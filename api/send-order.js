const crypto = require("crypto");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { orderText, initData } = req.body;

const totalMatch = orderText.match(/Итого:\s*(\d+)/);
const totalAmount = totalMatch ? parseInt(totalMatch[1]) : 0;
  

if (!initData) {
  return res.status(400).json({ error: "No initData" });
}

const BOT_TOKEN = process.env.BOT_TOKEN;

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
const userId = parseInt(userData.id);
const username = userData.username || "";
const firstName = userData.first_name || "";

// ===== ПРОВЕРКА БАНА =====
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

const bannedCheck = await fetch(
  `${supabaseUrl}/rest/v1/users?telegram_id=eq.${userId}&select=banned`,
  {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`
    }
  }
);

const bannedData = await bannedCheck.json();

if (bannedData.length && bannedData[0].banned === true) {
  return res.status(403).json({
    error: "User banned"
  });
}

try {
   

// Проверяем есть ли пользователь
const existingUserResponse = await fetch(
  `${supabaseUrl}/rest/v1/users?telegram_id=eq.${Number(userId)}`,
  {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "count=exact"
    },
  }
);

const existingUsers = await existingUserResponse.json();

console.log("Searching user:", userId);
console.log("Found users:", existingUsers);

if (existingUsers.length === 0) {
  await fetch(`${supabaseUrl}/rest/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      telegram_id: userId,
      username: username || null,
      first_name: firstName || null,
      total_spent: totalAmount,
      orders_count: 1,
    }),
  });

  // === ЛОГ: новый пользователь ===
  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.LOG_CHAT_ID,
      text: `🆕 НОВЫЙ ПОЛЬЗОВАТЕЛЬ

👤 ${firstName}
🔗 Username: ${username ? "@" + username : "нет"}
🆔 ID: ${userId}`
    }),
  });

} else {
  // Если пользователь есть — обновляем статистику
  const user = existingUsers[0];

  await fetch(
    `${supabaseUrl}/rest/v1/users?telegram_id=eq.${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({
        total_spent: user.total_spent + totalAmount,
        orders_count: user.orders_count + 1,
      }),
    }
  );
}



function generateOrderNumber() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 7; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const randomOrderNumber = generateOrderNumber();

// сохраняем новый заказ
const supabaseResponse = await fetch(`${supabaseUrl}/rest/v1/orders`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    Prefer: "return=representation",
  },
  body: JSON.stringify({
    order_number: randomOrderNumber,
    user_id: userId,
    username: username || null,
    first_name: firstName || null,
    order_text: orderText,
    total: totalAmount,
  }),
});

const supabaseResult = await supabaseResponse.text();

if (!supabaseResponse.ok) {
  return res.status(500).json({ error: supabaseResult });
}
    const orderNumber = randomOrderNumber;
  
    // Отправляем оператору
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_id: process.env.LOG_CHAT_ID,
    text: `🛒 Заказ №${orderNumber}

👤 Клиент: ${firstName}
🔗 Username: ${username ? "@" + username : "нет"}
🆔 ID: ${userId}

${orderText}`,
  }),
});
    // === Подтверждение пользователю ===
await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    chat_id: userId,
    text: `✅ Ваш заказ №${orderNumber} успешно создан!

⏳ В ближайшее время с вами свяжется оператор для подтверждения и уточнения деталей.

Если у вас возникли вопросы — вы можете написать нам в любое время:
📩 Служба поддержки: @budapuff_support

Спасибо, что выбираете Buda_Puff 🤝`
  }),
});

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ошибка отправки заказа" });
  }
}
