const express = require("express");
const router = express.Router();

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

router.post("/", createStay);

router.put("/:id", updateStay);

router.delete("/:id", deleteStay);

module.exports = router;