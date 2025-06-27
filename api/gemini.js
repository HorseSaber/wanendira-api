export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer AIzaSyCmbPNPqDEMsdy8Cd3OLl-dpXLqZDK8xEM" // Ganti dengan environment variable kalau butuh aman
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: req.body.prompt
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: true,
        status: response.status,
        message: data.error?.message || "Unknown error"
      });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Server error: " + error.message
    });
  }
}

