const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log(process.env.MONGO_URI);

const connectDB = require("./config/db");

const app = express();
const dns = require("dns");
dns.setServers(["1.1.1.1", "0.0.0.0"]);

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

const stayRoutes = require("./routes/stays");

app.use("/api/stays", stayRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "EcoStay API Running",
  });
});

// Use PORT from .env, otherwise default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});