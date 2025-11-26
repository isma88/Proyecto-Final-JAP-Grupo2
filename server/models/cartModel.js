
const mariaBD = require("mariadb")

const pool  = mariaBD.createPool ({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ecommercejap"

})


const createCart = async (data) => { 
    console.log(data)
   /* try {
        conn = await pool.getConnection()
            const rows = await conn.query(
                `INSERT INTO products(Name,Currency,Cost) VALUES('nombre', 'USD', 14000);c 
                set @id_products = LAST_INSERT_ID();
                INSERT INTO users(Name,Last_name,Email, PASSWORD, Phone_number) VALUES('v', 'a', '@', 'a', 12);
                set @id_users = LAST_INSERT_ID();

                INSERT INTO buy(id_user,id_product,quantity) VALUES(@id_users, @id_products, 50);`,[ ]
            );
            return rows
        
    } catch (err) {
        console.log(err)
    }finally {
        if (conn) conn.release();
    }
    return false */
};


module.exports = {createCart}