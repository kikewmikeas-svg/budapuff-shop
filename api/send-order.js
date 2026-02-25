const crypto = require("crypto");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { orderText, initData } = req.body;

if (!initData) {
  return res.status(400).json({ error: "No initData" });
}

const BOT_TOKEN = process.env.BOT_TOKEN;
const OPERATOR_CHAT_ID = process.env.OPERATOR_CHAT_ID;

// Проверка подписи Telegram
const secret = crypto
  .createHash("sha256")
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

if (!hash || hmac !== hash) {
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
