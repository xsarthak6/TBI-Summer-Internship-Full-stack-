const express = require("express");
const router = express.Router();

const { tripPlanner } = require("../controllers/aiController");

router.post("/planner", tripPlanner);

module.exports = router;