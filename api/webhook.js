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

        // ===== ADMIN MENU =====
        if (text && text.startsWith("/admin")) {
            if (chatId !== ADMIN_ID) return res.status(200).send("ok");

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `👨‍💼 <b>Админ панель</b>\n\nВыберите раздел:`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: "📢 Рассылка", callback_data: "adm_broadcast" },
                                { text: "📊 Статистика", callback_data: "adm_stats" }
                            ],
                            [
                                { text: "👥 Пользователи", callback_data: "adm_users" },
                                { text: "🛒 Заказы", callback_data: "adm_orders" }
                            ],
                            [
                                { text: "🚫 Бан пользователя", callback_data: "adm_ban" },
                                { text: "✅ Разбан", callback_data: "adm_unban" }
                            ]
                        ]
                    }
                })
            });
            return res.status(200).send("ok");
        }

        // ===== BROADCAST (текстовая команда) =====
        if (text && text.startsWith("/broadcast")) {
            if (chatId !== ADMIN_ID) return res.status(200).send("ok");

            const broadcastText = text.replace("/broadcast", "").trim();

            if (!broadcastText) {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: `📢 Введите текст рассылки после команды:\n\n<code>/broadcast Ваш текст</code>\n\nПоддерживается HTML:\n<code>&lt;b&gt;жирный&lt;/b&gt;</code>\n<code>&lt;a href="https://t.me/budapuff_bot"&gt;ссылка&lt;/a&gt;</code>`,
                        parse_mode: "HTML"
                    })
                });
                return res.status(200).send("ok");
            }

            const supabaseUrl = process.env.SUPABASE_URL;
            const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

            const usersResp = await fetch(
                `${supabaseUrl}/rest/v1/users?select=telegram_id&banned=eq.false`,
                { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
            );
            const users = await usersResp.json();
            const count = users.length;

            if (!count) {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: chatId, text: "⚠️ Нет пользователей для рассылки" })
                });
                return res.status(200).send("ok");
            }

            const broadcastKey = `bc_${Date.now()}`;
            await fetch(`${supabaseUrl}/rest/v1/broadcasts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    apikey: supabaseKey,
                    Authorization: `Bearer ${supabaseKey}`,
                    Prefer: "return=minimal"
                },
                body: JSON.stringify({ key: broadcastKey, text: broadcastText, created_at: new Date().toISOString() })
            });

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `📢 <b>Превью рассылки</b>\n\n👥 Получателей: <b>${count}</b>\n\n─────────────────\n${broadcastText}\n─────────────────\n\nЗапустить?`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [[
                            { text: `✅ Запустить (${count} чел.)`, callback_data: `bc_confirm_${broadcastKey}` },
                            { text: "❌ Отмена", callback_data: `bc_cancel_${broadcastKey}` }
                        ]]
                    }
                })
            });
            return res.status(200).send("ok");
        }

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

            // ===== ВОРКЕР КНОПКИ =====
            if (cbData === "w_balance" || cbData === "w_stats" || cbData === "w_reflink" || cbData === "w_history") {
                const supabaseUrl = process.env.SUPABASE_URL;
                const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

                const workerR = await fetch(
                    `${supabaseUrl}/rest/v1/users?telegram_id=eq.${cbChatId}&select=is_worker,balance,ref_earned,orders_count,first_name`,
                    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
                );
                const workerData = await workerR.json();

                if (!workerData.length || !workerData[0].is_worker) {
                    return res.status(200).send("ok");
                }

                const w = workerData[0];
                const balance = w.balance || 0;
                const refEarned = w.ref_earned || 0;
                const ordersCount = w.orders_count || 0;

                if (cbData === "w_balance") {
                    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                        method: "POST", headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            chat_id: cbChatId,
                            text: `💰 <b>Ваш баланс</b>\n\n💵 Текущий баланс: <b>${balance} ₽</b>\n📈 Заработано с рефералов: <b>${refEarned} ₽</b>\n\nДля вывода свяжитесь с администратором.`,
                            parse_mode: "HTML",
                            reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "w_back" }]] }
                        })
                    });
                }

                if (cbData === "w_stats") {
                    function getWorkerRank(orders) {
                        if (orders >= 300) return { icon: "👑", name: "Царь солевых" };
                        if (orders >= 150) return { icon: "🦁", name: "Лев" };
                        if (orders >= 75)  return { icon: "👺", name: "Гоблин-чемпион" };
                        if (orders >= 30)  return { icon: "🔮", name: "Шаман" };
                        if (orders >= 10)  return { icon: "🌿", name: "Травокур" };
                        return { icon: "🐌", name: "Слизняк" };
                    }
                    const rank = getWorkerRank(ordersCount);
                    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                        method: "POST", headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            chat_id: cbChatId,
                            text: `📊 <b>Ваша статистика</b>\n\n${rank.icon} Ранг: <b>${rank.name}</b>\n📦 Заказов обработано: <b>${ordersCount}</b>\n💰 Заработано всего: <b>${balance + refEarned} ₽</b>\n  — С заказов: <b>${balance} ₽</b>\n  — С рефералов: <b>${refEarned} ₽</b>`,
                            parse_mode: "HTML",
                            reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "w_back" }]] }
                        })
                    });
                }

                if (cbData === "w_reflink") {
                    const refLink = `https://t.me/budapuff_bot?start=ref_${cbChatId}`;
                    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                        method: "POST", headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            chat_id: cbChatId,
                            text: `🔗 <b>Ваша реферальная ссылка:</b>\n\n<code>${refLink}</code>\n\n— <b>+200 ₽</b> за каждого нового реферала\n— <b>+5%</b> с каждого заказа реферала`,
                            parse_mode: "HTML",
                            reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "w_back" }]] }
                        })
                    });
                }

                if (cbData === "w_history") {
                    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                        method: "POST", headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                            chat_id: cbChatId,
                            text: `📋 <b>История выплат</b>\n\n💰 Текущий баланс: <b>${balance} ₽</b>\n\nДля получения детальной истории — обратитесь к администратору.`,
                            parse_mode: "HTML",
                            reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "w_back" }]] }
                        })
                    });
                }

                return res.status(200).send("ok");
            }

            // ◀️ НАЗАД в меню воркера
            if (cbData === "w_back") {
                const supabaseUrl = process.env.SUPABASE_URL;
                const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
                const workerR = await fetch(
                    `${supabaseUrl}/rest/v1/users?telegram_id=eq.${cbChatId}&select=balance,ref_earned,orders_count,first_name,username`,
                    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
                );
                const w = (await workerR.json())[0] || {};
                const ordersCount = w.orders_count || 0;

                function getWorkerRank(orders) {
                    if (orders >= 300) return { icon: "👑", name: "Царь солевых" };
                    if (orders >= 150) return { icon: "🦁", name: "Лев" };
                    if (orders >= 75)  return { icon: "👺", name: "Гоблин-чемпион" };
                    if (orders >= 30)  return { icon: "🔮", name: "Шаман" };
                    if (orders >= 10)  return { icon: "🌿", name: "Травокур" };
                    return { icon: "🐌", name: "Слизняк" };
                }
                function getNextRank(orders) {
                    if (orders >= 300) return null;
                    const thresholds = [10, 30, 75, 150, 300];
                    const next = thresholds.find(t => t > orders);
                    return next ? `${next - orders} заказов до следующего ранга` : null;
                }
                const rank = getWorkerRank(ordersCount);
                const nextRank = getNextRank(ordersCount);

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `👷 <b>Панель воркера</b>\n\n👤 ${w.first_name || "Воркер"} ${w.username ? "@" + w.username : ""}\n🆔 ID: <code>${cbChatId}</code>\n\n${rank.icon} Ранг: <b>${rank.name}</b>${nextRank ? `\n📈 ${nextRank}` : "\n🏆 Максимальный ранг!"}\n\n💰 Баланс: <b>${w.balance || 0} ₽</b>\n📦 Заказов: <b>${ordersCount}</b>\n🔗 С рефералов: <b>${w.ref_earned || 0} ₽</b>`,
                        parse_mode: "HTML",
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: "💰 Мой баланс", callback_data: "w_balance" },
                                    { text: "📊 Статистика", callback_data: "w_stats" }
                                ],
                                [
                                    { text: "🔗 Реферальная ссылка", callback_data: "w_reflink" },
                                    { text: "📋 История выплат", callback_data: "w_history" }
                                ]
                            ]
                        }
                    })
                });
                return res.status(200).send("ok");
            }

            // ===== ADMIN MENU CALLBACKS =====

            // 📊 СТАТИСТИКА
            if (cbData === "adm_stats") {
                const supabaseUrl = process.env.SUPABASE_URL;
                const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

                const [usersR, ordersR, bannedR] = await Promise.all([
                    fetch(`${supabaseUrl}/rest/v1/users?select=telegram_id`, { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }),
                    fetch(`${supabaseUrl}/rest/v1/orders?select=total`, { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }),
                    fetch(`${supabaseUrl}/rest/v1/users?select=telegram_id&banned=eq.true`, { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } })
                ]);
                const [allUsers, allOrders, banned] = await Promise.all([usersR.json(), ordersR.json(), bannedR.json()]);
                const totalRevenue = allOrders.reduce((s, o) => s + (o.total || 0), 0);

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `📊 <b>Статистика магазина</b>\n\n👥 Всего пользователей: <b>${allUsers.length}</b>\n🛒 Всего заказов: <b>${allOrders.length}</b>\n💰 Общая выручка: <b>${totalRevenue.toLocaleString()} ₽</b>\n🚫 Забанено: <b>${banned.length}</b>`,
                        parse_mode: "HTML",
                        reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "adm_back" }]] }
                    })
                });
                return res.status(200).send("ok");
            }

            // 👥 ПОЛЬЗОВАТЕЛИ
            if (cbData === "adm_users") {
                const supabaseUrl = process.env.SUPABASE_URL;
                const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

                const usersR = await fetch(
                    `${supabaseUrl}/rest/v1/users?select=telegram_id,first_name,username,orders_count,total_spent&order=total_spent.desc&limit=10`,
                    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
                );
                const users = await usersR.json();

                const list = users.map((u, i) =>
                    `${i + 1}. ${u.first_name || "—"} ${u.username ? "@" + u.username : ""}\n    🆔 ${u.telegram_id} | 🛒 ${u.orders_count || 0} заказов | 💰 ${(u.total_spent || 0).toLocaleString()} ₽`
                ).join("\n\n");

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `👥 <b>Топ-10 пользователей по выручке</b>\n\n${list || "Нет данных"}`,
                        parse_mode: "HTML",
                        reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "adm_back" }]] }
                    })
                });
                return res.status(200).send("ok");
            }

            // 🛒 ЗАКАЗЫ
            if (cbData === "adm_orders") {
                const supabaseUrl = process.env.SUPABASE_URL;
                const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

                const ordersR = await fetch(
                    `${supabaseUrl}/rest/v1/orders?select=order_number,first_name,total,created_at&order=created_at.desc&limit=10`,
                    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
                );
                const orders = await ordersR.json();

                const list = orders.map(o => {
                    const date = new Date(o.created_at).toLocaleString("ru-RU", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
                    return `🛒 №${o.order_number} — ${o.first_name || "?"}\n    💰 ${(o.total || 0).toLocaleString()} ₽ | 📅 ${date}`;
                }).join("\n\n");

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `🛒 <b>Последние 10 заказов</b>\n\n${list || "Нет заказов"}`,
                        parse_mode: "HTML",
                        reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "adm_back" }]] }
                    })
                });
                return res.status(200).send("ok");
            }

            // 📢 РАССЫЛКА (кнопка из меню)
            if (cbData === "adm_broadcast") {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `📢 <b>Рассылка</b>\n\nНапишите команду с текстом:\n\n<code>/broadcast Ваш текст сообщения</code>\n\nПоддерживается HTML-форматирование:\n<code>&lt;b&gt;жирный&lt;/b&gt;</code>\n<code>&lt;a href="https://t.me/budapuff_bot"&gt;ссылка&lt;/a&gt;</code>`,
                        parse_mode: "HTML",
                        reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "adm_back" }]] }
                    })
                });
                return res.status(200).send("ok");
            }

            // 🚫 БАН (подсказка)
            if (cbData === "adm_ban") {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `🚫 <b>Бан пользователя</b>\n\nВведите команду:\n\n<code>/ban 123456789</code>\n\nID пользователя виден в логах заказов (строка 🆔 ID).`,
                        parse_mode: "HTML",
                        reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "adm_back" }]] }
                    })
                });
                return res.status(200).send("ok");
            }

            // ✅ РАЗБАН (подсказка)
            if (cbData === "adm_unban") {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `✅ <b>Разбан пользователя</b>\n\nВведите команду:\n\n<code>/unban 123456789</code>`,
                        parse_mode: "HTML",
                        reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "adm_back" }]] }
                    })
                });
                return res.status(200).send("ok");
            }

            // ◀️ НАЗАД — переоткрыть меню
            if (cbData === "adm_back") {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `👨‍💼 <b>Админ панель</b>\n\nВыберите раздел:`,
                        parse_mode: "HTML",
                        reply_markup: {
                            inline_keyboard: [
                                [
                                    { text: "📢 Рассылка", callback_data: "adm_broadcast" },
                                    { text: "📊 Статистика", callback_data: "adm_stats" }
                                ],
                                [
                                    { text: "👥 Пользователи", callback_data: "adm_users" },
                                    { text: "🛒 Заказы", callback_data: "adm_orders" }
                                ],
                                [
                                    { text: "🚫 Бан пользователя", callback_data: "adm_ban" },
                                    { text: "✅ Разбан", callback_data: "adm_unban" }
                                ]
                            ]
                        }
                    })
                });
                return res.status(200).send("ok");
            }

            // ✅ ЗАПУСТИТЬ РАССЫЛКУ
            if (cbData.startsWith("bc_confirm_")) {
                const broadcastKey = cbData.replace("bc_confirm_", "");
                const supabaseUrl = process.env.SUPABASE_URL;
                const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageReplyMarkup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: cbChatId, message_id: cbMsgId, reply_markup: { inline_keyboard: [] } })
                });

                const bcResp = await fetch(
                    `${supabaseUrl}/rest/v1/broadcasts?key=eq.${broadcastKey}&select=text`,
                    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
                );
                const bcData = await bcResp.json();
                if (!bcData.length) {
                    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ chat_id: cbChatId, text: "❌ Текст рассылки не найден. Попробуйте снова." })
                    });
                    return res.status(200).send("ok");
                }
                const broadcastText = bcData[0].text;

                const usersResp = await fetch(
                    `${supabaseUrl}/rest/v1/users?select=telegram_id&banned=eq.false`,
                    { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
                );
                const users = await usersResp.json();

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: cbChatId, text: `📤 Рассылка запущена...\n👥 Получателей: ${users.length}` })
                });

                let sent = 0, failed = 0;
                for (const user of users) {
                    try {
                        const r = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ chat_id: user.telegram_id, text: broadcastText, parse_mode: "HTML" })
                        });
                        (await r.json()).ok ? sent++ : failed++;
                    } catch(e) { failed++; }
                    await new Promise(r => setTimeout(r, 50));
                }

                await fetch(`${supabaseUrl}/rest/v1/broadcasts?key=eq.${broadcastKey}`, {
                    method: "DELETE",
                    headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` }
                });

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: `✅ Рассылка завершена!\n\n📨 Отправлено: ${sent}\n❌ Не доставлено: ${failed}\n👥 Всего: ${users.length}`,
                        reply_markup: { inline_keyboard: [[{ text: "◀️ В меню", callback_data: "adm_back" }]] }
                    })
                });
                return res.status(200).send("ok");
            }

            // ❌ ОТМЕНА РАССЫЛКИ
            if (cbData.startsWith("bc_cancel_")) {
                const broadcastKey = cbData.replace("bc_cancel_", "");
                const supabaseUrl = process.env.SUPABASE_URL;
                const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageReplyMarkup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: cbChatId, message_id: cbMsgId, reply_markup: { inline_keyboard: [] } })
                });
                await fetch(`${supabaseUrl}/rest/v1/broadcasts?key=eq.${broadcastKey}`, {
                    method: "DELETE",
                    headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` }
                });
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        text: "❌ Рассылка отменена.",
                        reply_markup: { inline_keyboard: [[{ text: "◀️ В меню", callback_data: "adm_back" }]] }
                    })
                });
                return res.status(200).send("ok");
            }

            // ✅ ПОДТВЕРДИТЬ ЗАКАЗ
            if (cbData.startsWith("confirm_order_")) {
                // формат: confirm_order_ORDERNUM_USERID_AMOUNT
                const parts = cbData.replace("confirm_order_", "").split("_");
                const totalAmount = parseInt(parts[parts.length - 1]) || 0;
                const userId = parts[parts.length - 2];
                const orderNumber = parts.slice(0, -2).join("_");

                const WORKER_PERCENT = 10;
                const workerBonus = Math.floor(totalAmount * WORKER_PERCENT / 100);

                // Редактируем сообщение оператору
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/editMessageText`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: cbChatId,
                        message_id: cbMsgId,
                        text: `✅ Заказ №${orderNumber} подтверждён\n\n👤 Пользователь уведомлён.\n💰 Ваш профит: +${workerBonus} ₽ (${WORKER_PERCENT}% от ${totalAmount} ₽)`,
                        reply_markup: { inline_keyboard: [] }
                    })
                });

                // Уведомляем пользователя
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: userId,
                        text: `✅ Ваш заказ №${orderNumber} успешно создан!\n\n⏳ В ближайшее время с вами свяжется оператор для подтверждения и уточнения деталей.\n\nЕсли у вас возникли вопросы — вы можете написать нам в любое время:\n📩 Служба поддержки: @budapuff_support\n\nСпасибо, что выбираете Buda_Puff 🤝`
                    })
                });

                // Начисляем воркеру (оператор который нажал кнопку)
                if (workerBonus > 0) {
                    try {
                        const supabaseUrl = process.env.SUPABASE_URL;
                        const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

                        const workerResp = await fetch(
                            `${supabaseUrl}/rest/v1/users?telegram_id=eq.${cbChatId}&select=balance,first_name`,
                            { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
                        );
                        const workerData = await workerResp.json();

                        if (workerData.length) {
                            const newBal = (workerData[0].balance || 0) + workerBonus;
                            await fetch(`${supabaseUrl}/rest/v1/users?telegram_id=eq.${cbChatId}`, {
                                method: "PATCH",
                                headers: { "Content-Type": "application/json", apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
                                body: JSON.stringify({ balance: newBal })
                            });
                            // Уведомляем воркера
                            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    chat_id: cbChatId,
                                    text: `💰 Успешный профит!\n\nДоля воркера: +${workerBonus} ₽\nЗаказ №${orderNumber} | Сумма: ${totalAmount} ₽\nВаш баланс: ${newBal} ₽`
                                })
                            });
                        }
                    } catch(e) { console.log("Worker pay error:", e); }
                }

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

        // ===== /pay ID сумма — ручное начисление =====
        if (text && text.startsWith("/pay")) {
            if (chatId !== ADMIN_ID) return res.status(200).send("ok");

            const payParts = text.split(" ");
            const targetId = payParts[1];
            const amount = parseInt(payParts[2]);

            if (!targetId || !amount || isNaN(amount)) {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: chatId, text: `❌ Формат: <code>/pay 123456789 500</code>`, parse_mode: "HTML" })
                });
                return res.status(200).send("ok");
            }

            const supabaseUrl = process.env.SUPABASE_URL;
            const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

            const userResp = await fetch(
                `${supabaseUrl}/rest/v1/users?telegram_id=eq.${targetId}&select=balance,first_name`,
                { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
            );
            const userData = await userResp.json();

            if (!userData.length) {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: chatId, text: `❌ Пользователь ${targetId} не найден в базе` })
                });
                return res.status(200).send("ok");
            }

            const curBalance = userData[0].balance || 0;
            const newBalance = curBalance + amount;
            const firstName = userData[0].first_name || "пользователь";

            await fetch(`${supabaseUrl}/rest/v1/users?telegram_id=eq.${targetId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json", apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
                body: JSON.stringify({ balance: newBalance })
            });

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: targetId,
                    text: `💰 Успешный профит!\n\nДоля воркера: +${amount} ₽\nВаш баланс: ${newBalance} ₽\n\n💪 Продолжай в том же духе!`
                })
            });

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `✅ Начислено!\n\n👤 ${firstName} (${targetId})\n💰 +${amount} ₽\n📊 Новый баланс: ${newBalance} ₽`
                })
            });
            return res.status(200).send("ok");
        }

        // ===== /myref — реферальная ссылка =====
        if (text && text.startsWith("/myref")) {
            const supabaseUrl = process.env.SUPABASE_URL;
            const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
            const refLink = `https://t.me/budapuff_bot?start=ref_${chatId}`;

            const userResp = await fetch(
                `${supabaseUrl}/rest/v1/users?telegram_id=eq.${chatId}&select=balance,ref_earned`,
                { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
            );
            const userData = await userResp.json();
            const balance = userData[0]?.balance || 0;
            const refEarned = userData[0]?.ref_earned || 0;

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `🔗 <b>Ваша реферальная ссылка:</b>\n\n<code>${refLink}</code>\n\n💰 Баланс: <b>${balance} ₽</b>\n📈 Заработано с рефералов: <b>${refEarned} ₽</b>\n\n— <b>+200 ₽</b> за каждого нового реферала\n— <b>+5%</b> с каждого заказа реферала`,
                    parse_mode: "HTML"
                })
            });
            return res.status(200).send("ok");
        }

        // ===== /addworker ID — добавить воркера =====
        if (text && text.startsWith("/addworker")) {
            if (chatId !== ADMIN_ID) return res.status(200).send("ok");
            const targetId = text.split(" ")[1];
            if (!targetId) {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: chatId, text: `❌ Формат: <code>/addworker 123456789</code>`, parse_mode: "HTML" })
                });
                return res.status(200).send("ok");
            }
            const supabaseUrl = process.env.SUPABASE_URL;
            const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

            // Проверяем есть ли пользователь
            const checkR = await fetch(`${supabaseUrl}/rest/v1/users?telegram_id=eq.${targetId}&select=telegram_id,first_name`, {
                headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` }
            });
            const checkData = await checkR.json();

            if (!checkData.length) {
                // Создаём если нет
                await fetch(`${supabaseUrl}/rest/v1/users`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}`, Prefer: "return=minimal" },
                    body: JSON.stringify({ telegram_id: parseInt(targetId), is_worker: true, balance: 0, ref_earned: 0 })
                });
            } else {
                await fetch(`${supabaseUrl}/rest/v1/users?telegram_id=eq.${targetId}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json", apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
                    body: JSON.stringify({ is_worker: true })
                });
            }

            const name = checkData[0]?.first_name || targetId;
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text: `✅ ${name} (${targetId}) добавлен как воркер` })
            });
            // Уведомляем воркера
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: targetId, text: `🎉 Вам открыт доступ к панели воркера!\n\nНапишите /worker чтобы открыть меню.` })
            });
            return res.status(200).send("ok");
        }

        // ===== /removeworker ID — убрать воркера =====
        if (text && text.startsWith("/removeworker")) {
            if (chatId !== ADMIN_ID) return res.status(200).send("ok");
            const targetId = text.split(" ")[1];
            if (!targetId) {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: chatId, text: `❌ Формат: <code>/removeworker 123456789</code>`, parse_mode: "HTML" })
                });
                return res.status(200).send("ok");
            }
            const supabaseUrl = process.env.SUPABASE_URL;
            const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
            await fetch(`${supabaseUrl}/rest/v1/users?telegram_id=eq.${targetId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json", apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
                body: JSON.stringify({ is_worker: false })
            });
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: chatId, text: `✅ Воркер ${targetId} удалён` })
            });
            return res.status(200).send("ok");
        }

        // ===== /worker — меню воркера =====
        if (text && text.startsWith("/worker")) {
            const supabaseUrl = process.env.SUPABASE_URL;
            const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

            // Проверяем что пользователь — воркер
            const checkR = await fetch(
                `${supabaseUrl}/rest/v1/users?telegram_id=eq.${chatId}&select=is_worker,balance,ref_earned,orders_count,first_name,username`,
                { headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` } }
            );
            const checkData = await checkR.json();

            if (!checkData.length || !checkData[0].is_worker) {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST", headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ chat_id: chatId, text: `❌ У вас нет доступа к этой команде.` })
                });
                return res.status(200).send("ok");
            }

            const w = checkData[0];
            const balance = w.balance || 0;
            const refEarned = w.ref_earned || 0;
            const ordersCount = w.orders_count || 0;
            const refLink = `https://t.me/budapuff_bot?start=ref_${chatId}`;

            function getWorkerRank(orders) {
                if (orders >= 300) return { icon: "👑", name: "Царь солевых" };
                if (orders >= 150) return { icon: "🦁", name: "Лев" };
                if (orders >= 75)  return { icon: "👺", name: "Гоблин-чемпион" };
                if (orders >= 30)  return { icon: "🔮", name: "Шаман" };
                if (orders >= 10)  return { icon: "🌿", name: "Травокур" };
                return { icon: "🐌", name: "Слизняк" };
            }
            function getNextRank(orders) {
                if (orders >= 300) return null;
                const thresholds = [10, 30, 75, 150, 300];
                const next = thresholds.find(t => t > orders);
                return next ? `${next - orders} заказов до следующего ранга` : null;
            }

            const rank = getWorkerRank(ordersCount);
            const nextRank = getNextRank(ordersCount);

            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `👷 <b>Панель воркера</b>\n\n👤 ${w.first_name || "Воркер"} ${w.username ? "@" + w.username : ""}\n🆔 ID: <code>${chatId}</code>\n\n${rank.icon} Ранг: <b>${rank.name}</b>${nextRank ? `\n📈 ${nextRank}` : "\n🏆 Максимальный ранг!"}\n\n💰 Баланс: <b>${balance} ₽</b>\n📦 Заказов обработано: <b>${ordersCount}</b>\n🔗 Заработано с рефералов: <b>${refEarned} ₽</b>`,
                    parse_mode: "HTML",
                    reply_markup: {
                        inline_keyboard: [
                            [
                                { text: "💰 Мой баланс", callback_data: "w_balance" },
                                { text: "📊 Статистика", callback_data: "w_stats" }
                            ],
                            [
                                { text: "🔗 Реферальная ссылка", callback_data: "w_reflink" },
                                { text: "📋 История выплат", callback_data: "w_history" }
                            ]
                        ]
                    }
                })
            });
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
