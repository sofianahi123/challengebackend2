const mysql = require('mysql2');
require('dotenv').config(); // requerimos el módulo dotenv

const connection = mysql.createConnection({
    host: process.env.HOST, // usamos las variables de entorno
    user: process.env.USER,
    password: process.env.DBPASS,
    database: process.env.DB   
});

connection.connect();

module.exports = connection;
