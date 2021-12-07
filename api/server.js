// ===== IMPORTS =====
const express = require("express")
const carsRouter = require("./cars/cars-router")

// ===== INSTANCE OF EXPRESS =====
const server = express()

// ===== MIDDLEWARE =====
server.use(express.json())
server.use("/api/cars", carsRouter)

module.exports = server
