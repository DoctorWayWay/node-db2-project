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

const create = async () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
}
