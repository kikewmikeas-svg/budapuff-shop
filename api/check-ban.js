module.exports = async function handler(req, res) {

  try {

    const { userId } = req.query;

    if (!userId) {
  return res.status(400).json({ error: "No userId" });
}

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

    const response = await fetch(
      `${supabaseUrl}/rest/v1/users?telegram_id=eq.${userId}&select=banned`,
      {
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`
        }
      }
    );

    const data = await response.json();

    if (data.length && data[0].banned === true) {
      return res.status(200).json({ banned: true });
    }

    return res.status(200).json({ banned: false });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "check-ban error"
    });

  }

};
