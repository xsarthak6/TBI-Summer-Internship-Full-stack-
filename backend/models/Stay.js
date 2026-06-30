const mongoose = require("mongoose");

const staySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Stay", staySchema);