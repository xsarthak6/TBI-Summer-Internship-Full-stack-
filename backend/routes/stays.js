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
  getMyStays,
} = require("../controllers/staysController");
const { authorize } = require("../middleware/roleMiddleware");

router.get("/", getAllStays);

router.get("/search", searchStays);

router.get("/my", protect, getMyStays);

router.get("/:id", getStayById);

// Protected Routes
router.post(
  "/",
  protect,
  authorize("host", "admin"),
  createStay
);

router.put(
  "/:id",
  protect,
  authorize("host", "admin"),
  updateStay
);

router.delete(
  "/:id",
  protect,
  authorize("host", "admin"),
  deleteStay
);


module.exports = router;