// /api/proxy.js
export default async function handler(req, res) {
  const response = await fetch("https://6359033d1a3f.ngrok-free.app", {
    headers: {
      "ngrok-skip-browser-warning": "true", // or use "User-Agent": "MyCustomAgent"
    },
  });

  const contentType = response.headers.get("content-type") || "text/html";
  const body = await response.text();

  res.setHeader("Content-Type", contentType);
  res.status(response.status).send(body);
}

