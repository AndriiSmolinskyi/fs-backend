const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: '123456A1z',
    host: "localhost",
    port: 5432,
    database: "fs"
}  
)

module.exports = pool
