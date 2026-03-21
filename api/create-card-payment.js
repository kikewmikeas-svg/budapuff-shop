const fetch = require("node-fetch");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const LOG_CHAT_ID = process.env.LOG_CHAT_ID;
  const MARKETPLAYS_API_KEY = process.env.MARKETPLAYS_API_KEY;

  try {
    const { amount, orderId, type, userId, productName, district } = req.body;

    if (!amount || amount < 500) {
      return res.status(400).json({ error: "Минимальная сумма 500 ₽" });
    }

    const finalOrderId = orderId || String(Math.floor(100000 + Math.random() * 900000));

    const params = new URLSearchParams();
    params.append("amount", Math.round(amount));
    params.append("merchant_order_id", finalOrderId);
    params.append("use_card_payment", "RUB");
    params.append("api_key", MARKETPLAYS_API_KEY);
    params.append("success_url", "https://t.me/budapuff_bot");
    params.append("fail_url", "https://t.me/budapuff_bot");

    const response = await fetch("https://marketplays.pro/api/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: params.toString(),
    });

    const rawText = await response.text();
    console.log("Marketplays response:", rawText);
    let data;
    try {
      data = JSON.parse(rawText);
    } catch (e) {
      return res.status(500).json({ error: "Ошибка ответа от платёжной системы" });
    }

    const payUrl = data.url || data.link || data.payment_url || data.redirect_url;
if (payUrl) {
      const logText =
        type === "product"
          ? `💳 Оплата картой (товар)\n\nЗаказ: #${finalOrderId}\nСумма: ${amount} ₽\nПользователь: ${userId || "unknown"}\nТовар: ${productName || "?"}\nРайон: ${district || "?"}`
          : `💳 Пополнение картой\n\nЗаказ: #${finalOrderId}\nСумма: ${amount} ₽\nПользователь: ${userId || "unknown"}`;

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: LOG_CHAT_ID, text: logText }),
      });

      res.json({ ok: true, url: payUrl });
    } else {
      res.status(500).json({ error: "Не удалось создать платёж", details: data });
    }
  } catch (err) {
    console.error("Card payment error:", err);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};
