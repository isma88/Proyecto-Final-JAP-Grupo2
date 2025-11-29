const cartModel = require("../models/cartModel")

const createCart = async (req, res) => { 
    const cart = await cartModel.createCart(req.body)
    console.log(cart)
    res.json(cart)
}


module.exports = {createCart}