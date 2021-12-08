// ===== IMPORTS =====
const Cars = require("./cars-model")
const vinValidator = require('vin-validator')

const checkCarId = async (req, res, next) => {
  const { id } = req.params
  const validatedId = await Cars.getById(id)
  if (validatedId) {
    next()
  } else {
    next({
      status: 404,
      message: `car with id ${id} is not found`
    })
  }
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage, } = req.body
  if (vin === undefined) {
    next({
      status: 400,
      message: `vin is missing`
    })
  } else if (make === undefined) {
    next({
      status: 400,
      message: `make is missing`
    })
  } else if (model === undefined) {
    next({
      status: 400,
      message: `model is missing`
    })
  } else if (mileage === undefined) {
    next({
      status: 400,
      message: `mileage is missing`
    })
  } else {
    next()
  }
}

const checkVinNumberValid = async (req, res, next) => {
  const { vin } = req.body
  const valid = vinValidator.validate(vin)
  if (!valid) {
    next({
      status: 400,
      message: `vin ${vin} is invalid`,
    })
  } else {
    next()
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  const validateVin = await Cars.findVin(req.body.vin)
  if (validateVin) {
    next({
      status: 400,
      message: `vin ${req.body.vin} already exists`
    })
  } else {
    next()
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
