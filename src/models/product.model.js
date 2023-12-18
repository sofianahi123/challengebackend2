const { conn } = require('../config/conn');

const getProducts = async () => {
 try {
 const [rows] = await conn.query('SELECT * FROM product;');
 return rows;
 } catch (error) {
 throw error;
 } finally {
 conn.releaseConnection();
 }
}

module.exports = {
    getProducts
}