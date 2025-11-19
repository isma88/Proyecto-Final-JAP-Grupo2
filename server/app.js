const express = require("express")

const app = express()

const port = 3000; 

app.use(express.json())



const categories = require("./emercado-api-main/cats/cat.json")
app.get("/cat", (req, res) => { 
    res.header('Access-Control-Allow-Origin', '*'); // Or restrict to 'http://localhost:8080'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.json(categories)
  next();

})


app.listen(port, () => { 
    console.log(`http://localhost:${port}`)
})