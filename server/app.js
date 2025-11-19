const express = require("express")

const app = express()

const port = 3000; 

app.use(express.json())


//get categories
const CATEGORIES_URL = require("./emercado-api-main/cats/cat")
app.get("/cat", (req, res) => { 
    res.header('Access-Control-Allow-Origin', '*'); // Or restrict to 'http://localhost:8080'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.json(CATEGORIES_URL)

})

//get productos
app.get("/cats_products:id", (req, res) => {
     res.header('Access-Control-Allow-Origin', '*'); // Or restrict to 'http://localhost:8080'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   let link = require("./emercado-api-main/cats_products/" + req.params.id) 
      res.json(link)
})

//get products info
app.get("/products:id", (req, res) => {
     res.header('Access-Control-Allow-Origin', '*'); // Or restrict to 'http://localhost:8080'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   let link =  require("./emercado-api-main/products/" + req.params.id)
      res.json(link)
})

app.get("/products_comments/:id", (req, res) => {
     res.header('Access-Control-Allow-Origin', '*'); // Or restrict to 'http://localhost:8080'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   let link =  require("./emercado-api-main/products_comments/" + req.params.id)
      res.json(link)                                                                                         
})



app.listen(port, () => { 
    console.log(`http://localhost:${port}`)
})