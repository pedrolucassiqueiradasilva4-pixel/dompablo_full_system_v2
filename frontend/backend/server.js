// backend/server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Configurações básicas
const app = express();
const PORT = process.env.PORT || 5000;

// Para usar import/export em Node
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Rotas de API — Exemplo simples
app.get("/api/status", (req, res) => {
  res.json({ message: "Servidor da Barbearia Dom Pablo ativo!" });
});

// ✅ Se o frontend for integrado (Vite build):
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ✅ Inicializa o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

  )
}
