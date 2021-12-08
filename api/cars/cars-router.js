// ===== IMPORTS =====
const router = require("express").Router()
const Cars = require("./cars-model")
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
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

router.post("/",
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
  async (req, res, next) => {
    try {
      const postedCar = await Cars.create(req.body)
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
