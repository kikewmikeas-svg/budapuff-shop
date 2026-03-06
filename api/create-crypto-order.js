const crypto = require("crypto");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    const {
      telegram_id,
      username,
      product,
      city,
      amount_rub,
      amount_crypto,
      payment_method
    } = req.body;

    if (!telegram_id || !product || !amount_rub || !payment_method) {
      return res.status(400).json({ error: "Missing fields" });
    }

    // генерируем номер заказа
    const order_number = crypto.randomBytes(5).toString("hex");

    const response = await fetch(
      `${supabaseUrl}/rest/v1/crypto_orders`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: "return=representation"
        },
        body: JSON.stringify({
          order_number,
          telegram_id,
          username,
          product,
          city,
          amount_rub,
          amount_crypto,
          payment_method,
          status: "created"
        })
      }
    );

    const data = await response.json();

    return res.status(200).json({
      success: true,
      order_number,
      order: data[0]
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Create crypto order error"
    });
  }
};
