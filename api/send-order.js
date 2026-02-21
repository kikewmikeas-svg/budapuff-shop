export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { orderText, userId } = req.body;

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const OPERATOR_CHAT_ID = process.env.OPERATOR_CHAT_ID;

  try {
    // Отправляем оператору
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: OPERATOR_CHAT_ID,
        text: orderText,
      }),
    });

    // Отправляем подтверждение пользователю
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: userId,
        text:
          "✅ Ваш заказ оформлен!\n\nВ ближайшее время с вами свяжется менеджер.",
      }),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Ошибка отправки заказа" });
  }
}
