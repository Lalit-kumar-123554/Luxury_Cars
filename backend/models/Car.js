const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: String,
  price: String,
  type: { type: String, enum: ["Buy", "Rent"] },
  features: [String],
  image: String
});

module.exports = mongoose.model("Car", carSchema);
