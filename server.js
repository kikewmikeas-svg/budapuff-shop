const express = require("express")
const multer = require("multer")
const cors = require("cors")

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const FormData = require("form-data")

const app = express()

app.use(express.json())   // ← ДОБАВЬ ЭТУ СТРОКУ

app.use(cors({
  origin: "*",
  methods: ["GET","POST"]
}))

const BOT_TOKEN = "8633388398:AAGNjcC9T6pQAACDzR9mbltL1Y_h7i9K6Mw"
const LOG_CHAT_ID = "-1003559533857"

const upload = multer()

app.post("/api/upload-payment-proof", upload.single("receipt"), async (req,res)=>{
    console.log("Payment request received")

try{

const file = req.file

if(!file){
return res.status(400).json({error:"no file"})
}

const form = new FormData()

form.append("chat_id", LOG_CHAT_ID)
const orderId = Math.floor(100000 + Math.random() * 900000)

const amount = req.body?.amount || "?"
const crypto = req.body?.crypto || "BTC"
const userId = req.body?.userId || "unknown"

const caption = `
💰 Новая заявка

Заказ: #${orderId}
Сумма: ${amount} ₽
Крипта: ${crypto}
Пользователь: ${userId}
`

const keyboard = {
inline_keyboard: [
[
{ text: "✅ Зачислить", callback_data: `approve_${orderId}` },
{ text: "❌ Отклонить", callback_data: `reject_${orderId}` }
]
]
}

form.append("caption", caption)
form.append("reply_markup", JSON.stringify(keyboard))
form.append("photo", file.buffer, "receipt.jpg")

await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
method:"POST",
body: form
})

res.json({ok:true})

}catch(err){

console.log(err)
res.status(500).json({error:"upload error"})

}

})

app.post("/telegram-webhook", express.json(), async (req, res) => {

  const data = req.body.callback_query

  if (!data) {
    return res.sendStatus(200)
  }

  const action = data.data
  const chatId = data.message.chat.id

  // ================= APPROVE (оплата крипто/чек) =================

  if (action.startsWith("approve_")) {

    const orderId = action.replace("approve_", "")
    console.log("ORDER APPROVED:", orderId)

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageCaption`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: data.message.message_id,
        caption: `🟢 ПЛАТЕЖ ЗАЧИСЛЕН\n\nЗаказ: #${orderId}\nСтатус: Оплачено`,
        reply_markup: { inline_keyboard: [] }
      })
    })
  }

  // ================= REJECT (оплата крипто/чек) =================

  if (action.startsWith("reject_")) {

    const orderId = action.replace("reject_", "")
    console.log("ORDER REJECTED:", orderId)

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageCaption`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: data.message.message_id,
        caption: `❌ ПЛАТЕЖ ОТКЛОНЕН\n\nЗаказ: #${orderId}\nСтатус: отклонено`,
        reply_markup: { inline_keyboard: [] }
      })
    })
  }

  // ================= CONFIRM ORDER (новый магазин — кнопка у оператора) =================

  if (action.startsWith("confirm_order_")) {
    // формат: confirm_order_ORDERNUM_USERID
    const parts = action.replace("confirm_order_", "").split("_")
    const userId = parts[parts.length - 1]
    const orderNumber = parts.slice(0, -1).join("_")

    console.log("ORDER CONFIRMED:", orderNumber, "user:", userId)

    // Редактируем сообщение оператору
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: data.message.message_id,
        text: `✅ Заказ №${orderNumber} подтверждён\n\nПользователь уведомлён.`,
        reply_markup: { inline_keyboard: [] }
      })
    })

    // Отправляем уведомление пользователю
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: userId,
        text: `✅ Ваш заказ №${orderNumber} успешно создан!\n\n⏳ В ближайшее время с вами свяжется оператор для подтверждения и уточнения деталей.\n\nЕсли у вас возникли вопросы — вы можете написать нам в любое время:\n📩 Служба поддержки: @budapuff_support\n\nСпасибо, что выбираете Buda_Puff 🤝`
      })
    })
  }

  // ================= CANCEL ORDER (новый магазин) =================

  if (action.startsWith("cancel_order_")) {
    const parts = action.replace("cancel_order_", "").split("_")
    const userId = parts[parts.length - 1]
    const orderNumber = parts.slice(0, -1).join("_")

    console.log("ORDER CANCELLED:", orderNumber, "user:", userId)

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: data.message.message_id,
        text: `❌ Заказ №${orderNumber} отменён.`,
        reply_markup: { inline_keyboard: [] }
      })
    })

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: userId,
        text: `❌ Ваш заказ №${orderNumber} был отменён.\n\nЕсли это ошибка — напишите нам:\n📩 @budapuff_support`
      })
    })
  }

  res.sendStatus(200)
})

app.post("/api/upload-product-payment", upload.single("receipt"), async (req,res)=>{
  console.log("Product payment received");

  try{
    const file = req.file;
    if(!file){
      return res.status(400).json({error:"no file"});
    }

    const orderId = Math.floor(100000 + Math.random() * 900000);
    const productName = req.body?.productName || "?";
    const pack = req.body?.pack || "?";
    const district = req.body?.district || "?";
    const districtType = req.body?.districtType || "?";
    const city = req.body?.city || "?";
    const userId = req.body?.userId || "unknown";
    const crypto = req.body?.crypto || "?";
    const amount = req.body?.amount || "?";

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
        { text: "❌ Отклонить", callback_data: `reject_${orderId}` }
      ]]
    };

    const form = new FormData();
    form.append("chat_id", LOG_CHAT_ID);
    form.append("caption", caption);
    form.append("reply_markup", JSON.stringify(keyboard));
    form.append("photo", file.buffer, "receipt.jpg");

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`, {
      method: "POST",
      body: form
    });

    res.json({ok:true, orderId});

  }catch(err){
    console.log(err);
    res.status(500).json({error:"upload error"});
  }
});

const MARKETPLAYS_API_KEY = "e3099f548981338a5bc53167aa5a9309c73c8084f15816376e8aa6c622507013"

app.post("/api/create-card-payment", async (req, res) => {
  console.log("Card payment request received");

  try {
    const { amount, orderId, type } = req.body;

    if(!amount || amount < 500){
      return res.status(400).json({error: "Минимальная сумма 500 ₽"});
    }

    const params = new URLSearchParams();
    params.append("amount", Math.round(amount));
    params.append("merchant_order_id", orderId || String(Math.floor(100000 + Math.random() * 900000)));
    params.append("use_card_payment", "RUB");
    params.append("api_key", MARKETPLAYS_API_KEY);
    params.append("success_url", "https://t.me/budapuff_bot");
    params.append("fail_url", "https://t.me/budapuff_bot");

  console.log("Sending to marketplays:", params.toString());
  const response = await fetch("https://marketplays.pro/api/request", {
  method: "POST",
  headers: { 
    "Content-Type": "application/x-www-form-urlencoded",
    "Accept": "application/json"
  },
  body: params.toString()
});

    const rawText = await response.text();
console.log("Marketplays raw response:", rawText);

let data;
try {
  data = JSON.parse(rawText);
} catch(e) {
  console.log("Parse error, raw:", rawText.substring(0, 200));
  return res.status(500).json({ error: "Ошибка ответа от платёжной системы" });
}

    if(data.url){
      // Отправляем лог в тг
      const logText = type === "product"
        ? `💳 Оплата картой (товар)\n\nЗаказ: #${params.get("merchant_order_id")}\nСумма: ${amount} ₽\nПользователь: ${req.body.userId || "unknown"}\nТовар: ${req.body.productName || "?"}\nРайон: ${req.body.district || "?"}`
        : `💳 Пополнение картой\n\nЗаказ: #${params.get("merchant_order_id")}\nСумма: ${amount} ₽\nПользователь: ${req.body.userId || "unknown"}`;

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: LOG_CHAT_ID,
          text: logText
        })
      });

      res.json({ ok: true, url: data.url });
    } else {
      console.log("Marketplays error:", data);
      res.status(500).json({ error: "Не удалось создать платёж", details: data });
    }

  } catch(err) {
    console.log("Card payment error:", err);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

app.post("/api/log-card-payment", async (req, res) => {
  console.log("Card payment log received");

  try {
    const { orderId, amount, type, userId, city, productName, pack, district, districtType } = req.body;

    const logText = type === "product"
      ? `💳 Оплата картой (товар)\n\nЗаказ: #${orderId}\nТовар: ${productName}\nФасовка: ${pack}\nТип: ${districtType}\nГород: ${city}\nРайон: ${district}\nСумма: ${amount} ₽\nПользователь: ${userId}`
      : `💳 Пополнение картой\n\nЗаказ: #${orderId}\nСумма: ${amount} ₽\nПользователь: ${userId}`;

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: LOG_CHAT_ID,
        text: logText
      })
    });

    res.json({ ok: true });

  } catch(err) {
    console.log(err);
    res.status(500).json({ error: "log error" });
  }
});

app.listen(3001, () => {
  console.log("Payment server started")
})
