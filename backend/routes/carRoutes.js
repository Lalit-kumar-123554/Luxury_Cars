const express = require("express");
const router = express.Router();

const {
  getAllCars,
  getCarById,
  createCar,
} = require("../controllers/carController");

// GET all cars
router.get("/", getAllCars);

// GET single car by ID
router.get("/:id", getCarById);

// POST - Add new car
router.post("/", createCar);

module.exports = router;
