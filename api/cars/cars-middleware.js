// ===== IMPORTS =====
const Cars = require("./cars-model")

const checkCarId = async (req, res, next) => {
  const { id } = req.params
  const validatedId = await Cars.getById(id)
  if (validatedId) {
    next()
  } else {
    next({ status: 404, message: `car with id ${id} is not found` })
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
