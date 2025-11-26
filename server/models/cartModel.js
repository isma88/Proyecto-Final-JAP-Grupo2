
const mariaBD = require("mariadb")

const pool  = mariaBD.createPool ({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ecommercejap"
})


const createCart = async (data) => { 
    console.log(data)
   try {
        conn = await pool.getConnection()
         /*   const rows = await conn.query(
                `
               	INSERT INTO users (Name, Last_name, Email, Password, Phone_number)
                VALUES ('a', 'a', 'a', '123', 123);
                set @id_users = LAST_INSERT_ID();
                
                
                INSERT INTO products (Name, Currency, Cost)
                VALUES ('a', 'a', 123);
                set @id_products = LAST_INSERT_ID();
                
                INSERT INTO purchase (user_id, total_amount)
                VALUES (@id_users, 123);
                set @id_purchase = LAST_INSERT_ID();

                INSERT INTO purchase_item (purchase_id, product_id, quantity, unit_price)
                VALUES (@id_purchase, @id_products, 51, 500);
                `,[ ]
            );
            return rows*/
        
    } catch (err) {
        console.log(err)
    }finally {
        if (conn) conn.release();
    }
    return false 
};


module.exports = {createCart}