export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
    }

    try {
        const BOT_TOKEN = process.env.BOT_TOKEN;
        const body = req.body;

        if (!body || !body.message) {
            return res.status(200).send("ok");
        }

        const chatId = body.message.chat.id;
        const text = body.message.text;

        if (text && text.startsWith("/start")) {
            const message = `Нажмите кнопку «Открыть приложение», чтобы перейти в каталог и ознакомиться с ассортиментом 🛒

Почему выбирают нас?

✨ Вся продукция высшего качества, привезена напрямую из Европы
✅ Только оригинальные товары
🚚 Быстрая и надёжная отправка

📦 Доставка

🇷🇺 Россия
СДЭК, Boxberry, Почта России, Деловые Линии, ПЭК, КИТ, Энергия, ЖелДорЭкспедиция, 5Post, Авито Доставка, Яндекс Доставка и другие ТК по запросу.

🇰🇿 Казахстан
СДЭК, Энергия, КИТ, международные отправления Почтой России и другие службы по согласованию.

🇧🇾 Беларусь
СДЭК, международные отправления Почтой России и другие службы доставки по согласованию.

💳 Оплата

💵 Наложенный платёж
💳 Банковская карта
₿ Криптовалюта

🙍‍♂️ Менеджер по всем вопросам: @budapuff_support
🏪 Работаем круглосуточно`;


            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
                })
            });
        }

        return res.status(200).send("ok");

    } catch (error) {
        console.error(error);
        return res.status(200).send("error handled");
    }
}
