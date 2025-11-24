const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "CLAVE ULTRA SECRETA";
const port = 3000; 


app.use(express.json());
app.use(cors({origin: '*'}));

//post token login
app.post("/login",(req,res) => {
 
   let {email} = req.body;
   if (email !== "") {
      const token = jwt.sign ({email}, SECRET_KEY);
      res.status(200).json({token});
   } else{
      res.status(401).json({message:"usuario y/o contraseña incorrecto"});
   }
});

app.use('/api', (req, res, next) => {
   try {
   const decoded = jwt.verify(req.headers["access-token"], SECRET_KEY);
   console.log(decoded)
   next();
} catch(err) { 
   res.status(401).json ({message:"Usuario denegado"});
}
});

//get categories
const CATEGORIES_URL = require("./emercado-api-main/cats/cat")
app.get("/api/cat", (req, res) => { 
      res.json(CATEGORIES_URL)
})

//get productos
app.get("/api/cats_products:id", (req, res) => {
   let link = require("./emercado-api-main/cats_products/" + req.params.id) 
      res.json(link)
})

//get products info
app.get("/api/products:id", (req, res) => {
   let link =  require("./emercado-api-main/products/" + req.params.id)
      res.json(link)
})

app.get("/api/products_comments/:id", (req, res) => {
   let link =  require("./emercado-api-main/products_comments/" + req.params.id)
      res.json(link)                                                                                         
})



app.listen(port, () => { 
    console.log(`http://localhost:${port}`)
})

