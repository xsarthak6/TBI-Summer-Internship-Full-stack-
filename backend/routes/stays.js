const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getAllStays,
  getStayById,
  createStay,
  updateStay,
  deleteStay,
  searchStays,
} = require("../controllers/staysController");

router.get("/", getAllStays);

router.get("/search", searchStays);

router.get("/:id", getStayById);

// Protected Routes
router.post("/", protect, createStay);

router.put("/:id", protect, updateStay);

router.delete("/:id", protect, deleteStay);

module.exports = router;