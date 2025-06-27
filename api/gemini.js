export default async function handler(req, res) {
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?AIzaSyCmbPNPqDEMsdy8Cd3OLl-dpXLqZDK8xEM
",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}
