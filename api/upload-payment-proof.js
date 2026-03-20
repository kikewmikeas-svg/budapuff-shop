import { IncomingForm } from "formidable";
import fetch from "node-fetch";
import FormData from "form-data";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const LOG_CHAT_ID = process.env.LOG_CHAT_ID;

  const form = new IncomingForm({ maxFileSize: 10 * 1024 * 1024 });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "parse error" });

    const file = Array.isArray(files.receipt) ? files.receipt[0] : files.receipt;
    if (!file) return res.status(400).json({ error: "no file" });

    const orderId = Math.floor(100000 + Math.random() * 900000);
    const amount = fields.amount?.[0] || fields.amount || "?";
    const crypto = fields.crypto?.[0] || fields.crypto || "BTC";
    const userId = fields.userId?.[0] || fields.userId || "unknown";

    const caption = `
💰 Новая заявка

Заказ: #${orderId}
Сумма: ${amount} ₽
Крипта: ${crypto}
Пользователь: ${userId}
`;

    const keyboard = {
      inline_keyboard: [[
        { text: "✅ Зачислить", callback_data: `approve_${orderId}` },
        { text: "❌ Отклонить", callback_data: `reject_${orderId}` },
      ]],
    };

    const tgForm = new FormData();
    tgForm.append("chat_id", LOG_CHAT_ID);
    tgForm.append("caption", caption);
    tgForm.append("reply_markup", JSON.stringify(keyboard));
    tgForm.append("photo", fs.createReadStream(file.filepath), {
      filename: "receipt.jpg",
      contentType: file.mimetype || "image/jpeg",
    });

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
        method: "POST",
        body: tgForm,
      });
      res.json({ ok: true });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "upload error" });
    }
  });
}
