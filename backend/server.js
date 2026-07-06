require("dotenv").config();
const passport = require("passport");
const session = require("express-session");

require("./config/passport");
const express = require("express");
const cors = require("cors");
console.log(process.env.MONGO_URI);
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");

const app = express();
const dns = require("dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "ecostaysecret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // Maximum 100 requests
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
});
app.use(limiter);

const stayRoutes = require("./routes/stays");
const authRoutes = require("./routes/authRoutes");

app.use("/api/stays", stayRoutes);
app.use("/api/auth", authRoutes);
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