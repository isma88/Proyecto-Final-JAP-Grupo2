const express = require("express");
const cartRouter = express.Router();



cartRouter.post('/',(req,res)=>{
    const cart = req.body
    

    console.log(cart)


    res.json(cart)
})

module.exports= cartRouter;