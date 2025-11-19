connection = require("./connection")


const getCategories = async () => { 
    let conn
    try {
    conn = await pool.getConnection();
        msg= await conn.query("SELECT * FROM  users");
} catch (err) {
    console.log(err) 

}
}

export default getCategories