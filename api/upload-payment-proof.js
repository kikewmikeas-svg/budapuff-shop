module.exports = async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    const {
      order_number,
      screenshot_url
    } = req.body;

    if (!order_number || !screenshot_url) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/crypto_orders?order_number=eq.${order_number}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`
        },
        body: JSON.stringify({
          screenshot_url,
          status: "checking"
        })
      }
    );

    return res.status(200).json({
      success: true
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Upload proof error"
    });

  }

};
