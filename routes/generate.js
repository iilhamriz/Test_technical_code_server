const express = require("express");
const route = express.Router();

const { generateSegitiga, generateBilanganGanjil, generateBilanganPrima } = require("../controller/generate")

route.post('/segitiga', generateSegitiga)
route.post('/bilangan-ganjil', generateBilanganGanjil)
route.post('/bilangan-prima', generateBilanganPrima)

module.exports = route;