const { conn } = require('../config/conn');

const getUsers = async () => {
 try {
 const [rows] = await conn.query('SELECT * FROM user;');
 return rows;
 } catch (error) {
 throw error;
 } finally {
 conn.releaseConnection();
 }
}

module.exports = {
    getUsers
}