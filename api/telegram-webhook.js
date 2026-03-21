const fetch = require("node-fetch");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const BOT_TOKEN = process.env.BOT_TOKEN;

  const data = req.body?.callback_query;
  if (!data) return res.status(200).json({ ok: true });

  const action = data.data;
  const chatId = data.message.chat.id;
  const messageId = data.message.message_id;

  if (action.startsWith("approve_")) {
    const orderId = action.replace("approve_", "");
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageCaption`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: messageId,
        caption: `🟢 ПЛАТЕЖ ЗАЧИСЛЕН\n\nЗаказ: #${orderId}\nСтатус: Оплачено`,
        reply_markup: { inline_keyboard: [] },
      }),
    });
  }

  if (action.startsWith("reject_")) {
    const orderId = action.replace("reject_", "");
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageCaption`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: messageId,
        caption: `❌ ПЛАТЕЖ ОТКЛОНЕН\n\nЗаказ: #${orderId}\nСтатус: отклонено`,
        reply_markup: { inline_keyboard: [] },
      }),
    });
  }

  res.status(200).json({ ok: true });
};
