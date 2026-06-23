const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const stayRoutes = require("./routes/stays");

app.use("/api/stays", stayRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "EcoStay API Running",
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});