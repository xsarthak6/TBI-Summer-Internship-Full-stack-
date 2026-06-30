const Stay = require("../models/Stay");

// GET all stays
exports.getAllStays = async (req, res) => {
  try {
    const stays = await Stay.find();
    res.status(200).json(stays);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET stay by ID
exports.getStayById = async (req, res) => {
  try {
    const stay = await Stay.findById(req.params.id);

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.status(200).json(stay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE stay
exports.createStay = async (req, res) => {
  try {
    const stay = new Stay(req.body);
    const savedStay = await stay.save();

    res.status(201).json(savedStay);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// UPDATE stay
exports.updateStay = async (req, res) => {
  try {
    const stay = await Stay.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.status(200).json(stay);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE stay
exports.deleteStay = async (req, res) => {
  try {
    const stay = await Stay.findByIdAndDelete(req.params.id);

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.status(200).json({
      message: "Stay deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SEARCH stays
exports.searchStays = async (req, res) => {
  try {
    const q = req.query.q || "";

    const stays = await Stay.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { location: { $regex: q, $options: "i" } },
      ],
    });

    res.status(200).json(stays);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};