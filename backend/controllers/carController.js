const Car = require("../models/Car");

// GET all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single car

exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// POST - Add a new car
exports.createCar = async (req, res) => {
  try {
    const {
      model,
      image,
      fuelType,
      transmission,
      seats,
      speed,
      price,
      hourlyPrice, // ✅ make sure you read it from req.body
      features,
    } = req.body;

    const newCar = new Car({
      model,
      image,
      fuelType,
      transmission,
      seats,
      speed,
      price,
      hourlyPrice, // ✅ save it
      features,
    });

    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

