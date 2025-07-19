const Car = require("../models/Car");

// GET /api/cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/cars/:id
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCar = async (req, res) => {
  const { model, price, type, features, image } = req.body;

  if (!model || !price || !type || !image) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  try {
    const newCar = new Car({
      model,
      price,
      type,
      features,
      image,
    });

    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
