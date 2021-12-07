// ===== IMPORTS =====
const router = require("express").Router()
const Cars = require("./cars-model")


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

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: `${err.message}`
  })
})

module.exports = router
