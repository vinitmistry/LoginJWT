const mysql = require('mysql2')


const pool = mysql.createPool({
    host: 'localhost',
    user: 'TANTRASOFT',  
    password: '1234',  
    database: 'jwt',
})


module.exports = pool.promise();