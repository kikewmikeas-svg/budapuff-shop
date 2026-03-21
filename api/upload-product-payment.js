const formidable = require("formidable");
const fetch = require("node-fetch");
const FormData = require("form-data");
const fs = require("fs");

module.exports.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const LOG_CHAT_ID = process.env.LOG_CHAT_ID;

  const form = new formidable.IncomingForm({ maxFileSize: 10 * 1024 * 1024 });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "parse error" });

    const file = Array.isArray(files.receipt) ? files.receipt[0] : files.receipt;
    if (!file) return res.status(400).json({ error: "no file" });

    const g = (key) => fields[key]?.[0] ?? fields[key] ?? "?";

    const orderId = Math.floor(100000 + Math.random() * 900000);
    const productName = g("productName");
    const pack = g("pack");
    const district = g("district");
    const districtType = g("districtType");
    const city = g("city");
    const userId = g("userId");
    const crypto = g("crypto");
    const amount = g("amount");

    const caption = `
🛒 Новая оплата товара

Заказ: #${orderId}
Товар: ${productName}
Фасовка: ${pack}
Тип: ${districtType}
Город: ${city}
Район: ${district}
Сумма: ${amount} ₽
Крипта: ${crypto}
Пользователь: ${userId}
`;

    const keyboard = {
      inline_keyboard: [[
        { text: "✅ Подтвердить", callback_data: `approve_${orderId}` },
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
      res.json({ ok: true, orderId });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "upload error" });
    }
  });
};
