const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./config");

const app = express();
app.use(cors());
app.use(express.json());

const cardRoutes = require("./adapters/routes/cardRoutes");
app.use("/api/cards", cardRoutes);

const PORT = process.env.PORT || 4000;

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});
