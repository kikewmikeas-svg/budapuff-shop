export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
    }

    const BOT_TOKEN = process.env.BOT_TOKEN;
    const body = req.body;

    if (!body.message) {
        return res.status(200).send("ok");
    }

    const chatId = body.message.chat.id;
    const text = body.message.text;

    // Если нажали /start
    if (text === "/start") {

        const message = `
👋 Добро пожаловать в BudaPuff Shop!

Нажмите кнопку ниже, чтобы открыть каталог 🛒

📍 Доставка по Москве  
💳 Оплата при получении  
🕒 Работаем ежедневно 9:00 – 23:00
        `;

        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                reply_markup: {
    inline_keyboard: [
        [
            {
                text: "🛒 Открыть приложение",
                web_app: { url: "https://budapuff-shop.vercel.app" }
            }
        ],
        [
            {
                text: "💬 Связаться с оператором",
                url: "https://t.me/budapuff_meneger"
            }
        ]
    ]
}

    return res.status(200).send("ok");
}
