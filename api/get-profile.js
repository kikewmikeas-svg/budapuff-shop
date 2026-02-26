export default async function handler(req, res) {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "No userId provided" });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return res.status(500).json({ error: "Missing env variables" });
    }

    // получаем пользователя
    const response = await fetch(
      `${supabaseUrl}/rest/v1/users?telegram_id=eq.${userId}`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    );

    const data = await response.json();

    if (!data.length) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = data[0];

    // получаем заказы
    const ordersResponse = await fetch(
      `${supabaseUrl}/rest/v1/orders?telegram_id=eq.${userId}&order=created_at.desc`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
        },
      }
    );

    const orders = await ordersResponse.json();

    let totalSpent = 0;
    orders.forEach(order => {
      totalSpent += order.total_price || 0;
    });

    return res.status(200).json({
      ...user,
      total_spent: totalSpent,
      orders_count: orders.length,
      orders,
    });

  } catch (error) {
    console.error("GET PROFILE ERROR:", error);
    return res.status(500).json({ error: "Server error" });
  }
}
