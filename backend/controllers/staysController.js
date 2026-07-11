const Stay = require("../models/Stay");

// ==========================
// GET All Stays
// ==========================
exports.getAllStays = async (req, res) => {
  try {
    const stays = await Stay.find().populate(
      "owner",
      "_id name email"
    );

    res.status(200).json(stays);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// GET Stay By ID
// ==========================
exports.getStayById = async (req, res) => {
  try {
    const stay = await Stay.findById(req.params.id).populate(
      "owner",
      "_id name email"
    );

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.status(200).json(stay);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// CREATE Stay
// ==========================
exports.createStay = async (req, res) => {
  try {

    const stay = new Stay({
      ...req.body,
      owner: req.user.id,
    });

    const savedStay = await stay.save();

    res.status(201).json(savedStay);

  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// ==========================
// UPDATE Stay
// ==========================
exports.updateStay = async (req, res) => {
  try {

    const stay = await Stay.findById(req.params.id);

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    if (stay.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can only edit your own stays.",
      });
    }

    stay.title = req.body.title || stay.title;
    stay.location = req.body.location || stay.location;
    stay.price = req.body.price || stay.price;
    stay.image = req.body.image || stay.image;

    await stay.save();

    res.status(200).json(stay);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// DELETE Stay
// ==========================
exports.deleteStay = async (req, res) => {
  try {

    const stay = await Stay.findById(req.params.id);

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    if (stay.owner.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can only delete your own stays.",
      });
    }

    await stay.deleteOne();

    res.status(200).json({
      success: true,
      message: "Stay deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// SEARCH Stays
// ==========================
exports.searchStays = async (req, res) => {
  try {

    const q = req.query.q || "";

    const stays = await Stay.find({
      $or: [
        {
          title: {
            $regex: q,
            $options: "i",
          },
        },
        {
          location: {
            $regex: q,
            $options: "i",
          },
        },
      ],
    }).populate("owner", "_id name email");

    res.status(200).json(stays);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ==========================
// GET Logged-in User's Stays
// ==========================
exports.getMyStays = async (req, res) => {
  try {

    const stays = await Stay.find({
      owner: req.user.id,
    }).populate("owner", "_id name email");

    res.status(200).json(stays);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};