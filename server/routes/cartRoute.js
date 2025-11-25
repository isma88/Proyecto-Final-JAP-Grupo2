const express = require("express");
const cartRouter = express.Router();
const cartController = require("../controllers/cartController")


cartRouter.post('/', cartController.createCart)

module.exports= cartRouter;