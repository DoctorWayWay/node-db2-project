// ===== IMPORTS =====
const db = require("../../data/db-config")

const getAll = async () => {
  const allCars = await db("cars")
    .select("vin", "make", "model", "mileage", "title", "transmission")
  return allCars
}

const getById = async (id) => {
  const [car] = await db("cars")
    .select("vin", "make", "model", "mileage", "title", "transmission")
    .where({ car_id: id })
  return car
}

const findVin = async (vin) => {
  const [foundVin] = await db("cars")
    .select("vin")
    .where({ vin: vin })
  return foundVin
}

const create = async (newCar) => {
  const [newCarId] = await db("cars").insert(newCar)
  const postedCar = await getById(newCarId)
  return {
    id: newCarId,
    ...postedCar
  }
}

module.exports = {
  getAll,
  getById,
  create,
  findVin,
}
