// ===== IMPORTS =====
const router = require("express").Router()
const Cars = require("./cars-model")
const {
  checkCarId,
  checkCarPayload,
} = require("./cars-middleware")


// ===== ENDPOINTS =====
// [GET] - /api/cars (returns all cars)
router.get("/", async (req, res, next) => {
  try {
    const allCars = await Cars.getAll()
    res.status(200).json(allCars)
  } catch (err) {
    next(err)
  }
})

// [GET] - /api/cars/:id (returns a single car by id)
router.get("/:id", checkCarId, async (req, res, next) => {
  try {
    const { id } = req.params
    const car = await Cars.getById(id)
    res.status(200).json(car)
  } catch (err) {
    next(err)
  }
})

router.post("/", checkCarPayload,  async (req, res, next) => {
  try {
    const { vin, make, model, mileage, title, transmission } = req.body
    const postedCar = await Cars.create({
      vin: vin,
      make: make,
      model: model,
      mileage: mileage,
      title: title,
      transmission: transmission
    })
    res.status(201).json(postedCar)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: `${err.message}`
  })
})

module.exports = router
