const Car = require("../models/Car");

exports.getAllCars = async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
};

exports.getCarById = async (req, res) => {
  const car = await Car.findById(req.params.id);
  res.json(car);
};

exports.createCar = async (req, res) => {
  const car = new Car(req.body);
  await car.save();
  res.status(201).json(car);
};
