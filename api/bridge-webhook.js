const sessions = {}; // временное хранилище

function generateCaptcha() {
  const fruits = ["🍌", "🍎", "🍐", "🍊", "🍉"];
  const vegetables = ["🍅", "🥕", "🥒", "🌽", "🥔"];

  const correctVeg = vegetables[Math.floor(Math.random() * vegetables.length)];
  const fruitSet = [];

  while (fruitSet.length < 3) {
    const f = fruits[Math.floor(Math.random() * fruits.length)];
    fruitSet.push(f);
  }

  const options = [...fruitSet, correctVeg].sort(() => Math.random() - 0.5);

  return {
    correct: correctVeg,
    options
  };
}

export default async function handler(req, res) {
  const body = req.body;
  const botToken = process.env.BRIDGE_BOT_TOKEN;

  if (body.message && body.message.text === "/start") {
    const chatId = body.message.chat.id;

    if (!sessions[chatId]) {
      sessions[chatId] = { attempts: 0, bannedUntil: null };
    }

    const userSession = sessions[chatId];

    if (userSession.bannedUntil && Date.now() < userSession.bannedUntil) {
      return res.status(200).json({ ok: true });
    }

    const captcha = generateCaptcha();
    userSession.correct = captcha.correct;
    userSession.attempts = 0;

    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "🛡 Подтвердите, что вы человек.\n\nВыберите НЕ фрукт:",
        reply_markup: {
          inline_keyboard: captcha.options.map(opt => [
            { text: opt, callback_data: opt }
          ])
        }
      })
    });
  }

  if (body.callback_query) {
    const chatId = body.callback_query.message.chat.id;
    const answer = body.callback_query.data;
    const queryId = body.callback_query.id;

    if (!sessions[chatId]) return res.status(200).json({ ok: true });

    const userSession = sessions[chatId];

    await fetch(`https://api.telegram.org/bot${botToken}/answerCallbackQuery`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ callback_query_id: queryId })
    });

    if (userSession.bannedUntil && Date.now() < userSession.bannedUntil) {
      return res.status(200).json({ ok: true });
    }

    if (answer === userSession.correct) {
      delete sessions[chatId];

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: "✅ Доступ подтверждён!\n\nПерейти в магазин:",
          reply_markup: {
            inline_keyboard: [[
              { text: "🛒 Открыть магазин", url: "https://t.me/Budapuff_bot" }
            ]]
          }
        })
      });

    } else {
      userSession.attempts += 1;

      if (userSession.attempts >= 5) {
        userSession.bannedUntil = Date.now() + 10 * 60 * 1000;

        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: "🚫 Слишком много попыток.\nПопробуйте снова через 10 минут."
          })
        });

        return res.status(200).json({ ok: true });
      }

      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: `❌ Неверно. Попыток осталось: ${5 - userSession.attempts}`
        })
      });
    }
  }

  res.status(200).json({ ok: true });
}
