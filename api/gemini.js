export default async function handler(req, res) {
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDE7ZK0UQ2EN6beaxtQFxHaEo1A0Q87Ge0", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.status(200).json(data);
}

