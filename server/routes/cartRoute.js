const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController")

// Define la ruta POST para crear un nuevo carrito
cartRouter.post('/', cartController.createCart)

module.exports= cartRouter;