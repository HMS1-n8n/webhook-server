// app.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota do Webhook
app.post("/webhook/farmaai", (req, res) => {
  console.log("📩 Webhook recebido:", req.body);
  res.sendStatus(200);
});

// Rota de teste
app.get("/", (req, res) => {
  res.send("Servidor Node.js ativo 🚀");
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
