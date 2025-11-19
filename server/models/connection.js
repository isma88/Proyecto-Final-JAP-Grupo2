const mariaBD = require("mariadb")

const pool  = mariaBD.createPool ({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ecommercejap"

})

export default pool