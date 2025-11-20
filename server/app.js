const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "CLAVE ULTRA SECRETA";
const port = 3000; 

app.use(express.json());
app.use(cors({origin: '*'}));

//get categories
const CATEGORIES_URL = require("./emercado-api-main/cats/cat")
app.get("/cat", (req, res) => { 
      res.json(CATEGORIES_URL)
})

//get productos
app.get("/cats_products:id", (req, res) => {
   let link = require("./emercado-api-main/cats_products/" + req.params.id) 
      res.json(link)
})

//get products info
app.get("/products:id", (req, res) => {
   let link =  require("./emercado-api-main/products/" + req.params.id)
      res.json(link)
})

app.get("/products_comments/:id", (req, res) => {
   let link =  require("./emercado-api-main/products_comments/" + req.params.id)
      res.json(link)                                                                                         
})



app.listen(port, () => { 
    console.log(`http://localhost:${port}`)
})

app.post("/login",(req,res) => {
   const {username,password} = req.body;
   if (username === "admin" && password === "admin") {
      const token = jwt.sing ({ username}, SECRET_KEY);
      res.status(200).json({token});
   } else{
      res.status(401).json({message:"usuario y/o contraseña incorrecto"});
   }

});