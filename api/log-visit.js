const crypto = require("crypto");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { initData } = req.body;

    if (!initData) {
      return res.status(400).json({ error: "No initData" });
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const LOG_CHAT_ID = process.env.LOG_CHAT_ID;

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
      return res.status(403).json({ error: "Invalid signature" });
    }

    const userRaw = parsedData.get("user");
    const user = JSON.parse(userRaw);

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: LOG_CHAT_ID,
        text: `👀 ПОЛЬЗОВАТЕЛЬ ЗАШЁЛ В МАГАЗИН

👤 ${user.first_name}
🔗 Username: ${user.username ? "@" + user.username : "нет"}
🆔 ID: ${user.id}`
      }),
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error logging visit" });
  }
};
