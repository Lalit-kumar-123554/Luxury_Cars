const express = require("express");
const { getAllCars, getCarById, createCar } = require("../controllers/carController");
const router = express.Router();

router.get("/", getAllCars);
router.get("/:id", getCarById);
router.post("/", createCar); // Only for admin use

module.exports = router;
