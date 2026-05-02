export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).send("Method not allowed");
    }

    try {
        const BOT_TOKEN = process.env.BOT_TOKEN;
        const body = req.body;

        if (!body || (!body.message && !body.callback_query)) {
            return res.status(200).send("ok");
        }

        const chatId = body.message?.chat.id;
        const text = body.message?.text;
        const ADMIN_ID = 8498959430;

        // ===== BAN USER =====
if (text && text.startsWith("/ban")) {

  if (chatId !== ADMIN_ID) {
    return res.status(200).send("ok");
  }

  const parts = text.split(" ");
  const targetId = parts[1];

  if (!targetId) return res.status(200).send("ok");

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  await fetch(
    `${supabaseUrl}/rest/v1/users?telegram_id=eq.${targetId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`
      },
      body: JSON.stringify({
        banned: true
      })
    }
  );

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `🚫 Пользователь ${targetId} заблокирован`
    })
  });

  return res.status(200).send("ok");
}


// ===== UNBAN USER =====
if (text && text.startsWith("/unban")) {

  if (chatId !== ADMIN_ID) {
    return res.status(200).send("ok");
  }

  const parts = text.split(" ");
  const targetId = parts[1];

  if (!targetId) return res.status(200).send("ok");

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

  await fetch(
    `${supabaseUrl}/rest/v1/users?telegram_id=eq.${targetId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`
      },
      body: JSON.stringify({
        banned: false
      })
    }
  );

  await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: `✅ Пользователь ${targetId} разблокирован`
    })
  });

  return res.status(200).send("ok");
}

        // ===== CALLBACK QUERY (нажатие кнопок) =====
        if (body.callback_query) {
            const cbData = body.callback_query.data;
            const cbChatId = body.callback_query.message.chat.id;
            const cbMsgId = body.callback_query.message.message_id;

            // Отвечаем Telegram чтобы убрать "часики" на кнопке
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/answerCallbackQuery`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ callback_query_id: body.callback_query.id })
            });

            // ✅ ПОДТВЕРДИТЬ ЗАКАЗ
            if (cbData.startsWith("confirm_order_")) {
                // формат: confirm_order_ORDERNUM_USERID
                const parts = cbData.replace("confirm_order_", "").split("_");
                const userId = parts[parts.length - 1];
                const orderNumber = parts.slice(0, -1).join("_");

                // Редактируем сообщение оператору
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        message_id: cbMsgId,
                        text: `✅ Заказ №${orderNumber} подтверждён\n\nПользователь уведомлён.`,
                        reply_markup: { inline_keyboard: [] }
                    })
                });

                // Отправляем уведомление пользователю
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: userId,
                        text: `✅ Ваш заказ №${orderNumber} успешно создан!\n\n⏳ В ближайшее время с вами свяжется оператор для подтверждения и уточнения деталей.\n\nЕсли у вас возникли вопросы — вы можете написать нам в любое время:\n📩 Служба поддержки: @budapuff_support\n\nСпасибо, что выбираете Buda_Puff 🤝`
                    })
                });

                return res.status(200).send("ok");
            }

            // ❌ ОТМЕНИТЬ ЗАКАЗ
            if (cbData.startsWith("cancel_order_")) {
                const parts = cbData.replace("cancel_order_", "").split("_");
                const userId = parts[parts.length - 1];
                const orderNumber = parts.slice(0, -1).join("_");

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        message_id: cbMsgId,
                        text: `❌ Заказ №${orderNumber} отменён.`,
                        reply_markup: { inline_keyboard: [] }
                    })
                });

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: userId,
                        text: `❌ Ваш заказ №${orderNumber} был отменён.\n\nЕсли это ошибка — напишите нам:\n📩 @budapuff_support`
                    })
                });

                return res.status(200).send("ok");
            }

            return res.status(200).send("ok");
        }

        if (text && text.startsWith("/start")) {
            const message = `Будда уже собрал для тебя всё необходимое 🧘‍♂️✨

✨ Почему выбирают нас?
Только оригинальные товары высшего качества — без иллюзий
Прямые поставки из Европы
Быстрая и надёжная доставка — точная, как молния

🌍 География
Россия, Казахстан, Беларусь и другие страны
Работаем через проверенных партнёров — надёжно и стабильно

📦 Доставка
СДЭК, Почта России, Boxberry и другие службы
Всё приходит спокойно и вовремя

📍 Получение (в касание)
Передача проходит тихо и без лишних движений — как мимолётное касание в потоке
📦 Всё подготовлено заранее
🛡 Максимальная безопасность и анонимность
⚡️ Быстро, чётко, без лишних следов

💳 Оплата
Карта / Наложенный платёж / Криптовалюта

⚡️ О нас
С 2024 года — тысячи успешных сделок
Рейтинг: ⭐️ 4.98
Каждый заказ — под контролем

🧘‍♂️ Поддержка @budapuff_support — всегда на связи`;


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
