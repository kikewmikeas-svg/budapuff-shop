export default async function handler(req, res) {
  try {
    const { userId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "No userId provided" });
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

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

    return res.status(200).json(data[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
}
