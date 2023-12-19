const mysql = require('mysql2');
require('dotenv').config(); // requerimos el módulo dotenv

const pool = mysql.createPool({
    host: process.env.HOST, // usamos las variables de entorno
    user: process.env.USER,
    password: process.env.DBPASS,
    database: process.env.DB,
    port: process.env.PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = {
    conn: pool.promise()
};
