const fetch = require("node-fetch");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const LOG_CHAT_ID = process.env.LOG_CHAT_ID;

  try {
    const { orderId, amount, type, userId, city, productName, pack, district, districtType } = req.body;

    const logText =
      type === "product"
        ? `💳 Оплата картой (товар)\n\nЗаказ: #${orderId}\nТовар: ${productName}\nФасовка: ${pack}\nТип: ${districtType}\nГород: ${city}\nРайон: ${district}\nСумма: ${amount} ₽\nПользователь: ${userId}`
        : `💳 Пополнение картой\n\nЗаказ: #${orderId}\nСумма: ${amount} ₽\nПользователь: ${userId}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: LOG_CHAT_ID, text: logText }),
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "log error" });
  }
};
