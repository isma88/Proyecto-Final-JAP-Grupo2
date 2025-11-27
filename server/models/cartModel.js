
const mariaBD = require("mariadb")

const pool  = mariaBD.createPool ({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "ecommercejap",
    multipleStatements: true
})


const createCart = async (data) => { 
    console.log(data)
    let user = data.user
    let conn 
   try {
        conn = await pool.getConnection()

      

        let sql = `INSERT INTO users (Name, Last_name, Email, Password, Phone_number)
                VALUES (?, ?, ?, ?, ?);
                set @id_users = LAST_INSERT_ID();`; 
        let values = [user.nombre,user.apellido,user.email,'none',Number(user.telefono)]; 
        await conn.query(sql, values)

        for (let items of data.cart) {
        
        
        let sql = `INSERT INTO products (Name, Currency, Cost)
                VALUES (?, ?, ?);
                set @id_products = LAST_INSERT_ID();

                INSERT INTO purchase (user_id, total_amount)
                VALUES (@id_users, ?);
                set @id_purchase = LAST_INSERT_ID();

                INSERT INTO purchase_item (purchase_id, product_id, quantity, unit_price)
                VALUES (@id_purchase, @id_products, ?, ?);`;
        let values = [items.name, items.currency, Number(items.cost), 0 , Number(items.quantity), Number(items.cost)];
                console.log('Record inserted:', items);
               
            await conn.query(sql, values)
            }

            
       
        
    } catch (err) {
        console.log(err)
    }finally {
        if (conn) conn.release();
    }
    return false 
};


module.exports = {createCart}