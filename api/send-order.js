const crypto = require("crypto");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { orderText, initData } = req.body;
  console.log("BODY:", req.body);
console.log("INIT DATA:", initData);

if (!initData) {
  return res.status(400).json({ error: "No initData" });
}

const BOT_TOKEN = process.env.BOT_TOKEN;
const OPERATOR_CHAT_ID = process.env.OPERATOR_CHAT_ID;

// Проверка подписи Telegram
const secret = crypto
  .createHmac("sha256", "WebAppData")
  .update(BOT_TOKEN)
  .digest();

const parsedData = new URLSearchParams(initData);
const hash = parsedData.get("hash");
parsedData.delete("hash");

const dataCheckString = [...parsedData.entries()]
  .sort()
  .map(([key, value]) => `${key}=${value}`)
  .join("\n");

const hmac = crypto
  .createHmac("sha256", secret)
  .update(dataCheckString)
  .digest("hex");

if (hmac !== hash) {
  return res.status(403).json({ error: "Invalid Telegram signature" });
}
  // Получаем реального пользователя из initData
const userDataRaw = parsedData.get("user");

if (!userDataRaw) {
  return res.status(400).json({ error: "No user data" });
}

const userData = JSON.parse(userDataRaw);
const userId = userData.id;
const username = userData.username || "";
const firstName = userData.first_name || "";
  try {
    // сохраняем заказ в Supabase
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

// получаем последний номер заказа
const lastOrderResponse = await fetch(
  `${supabaseUrl}/rest/v1/orders?select=order_number&order=order_number.desc&limit=1`,
  {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  }
);

const lastOrderData = await lastOrderResponse.json();

const nextOrderNumber =
  lastOrderData.length > 0
    ? lastOrderData[0].order_number + 1
    : 1;

// сохраняем новый заказ
await fetch(`${supabaseUrl}/rest/v1/orders`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    Prefer: "return=minimal",
  },
  body: JSON.stringify({
    order_number: nextOrderNumber,
    user_id: userId,
    username: username || null,
    first_name: firstName || null,
    order_text: orderText,
    total: parseInt(orderText.match(/Итого:\s*(\d+)/)?.[1] || 0),
  }),
});
    const orderNumber = Date.now();
  
    // Отправляем оператору
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_id: OPERATOR_CHAT_ID,
    text: `🛒 Заказ №${orderNumber}

👤 Клиент: ${firstName}
🔗 Username: ${username ? "@" + username : "нет"}
🆔 ID: ${userId}

${orderText}`,
  }),
});

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ошибка отправки заказа" });
  }
}
