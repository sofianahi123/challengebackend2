const { conn } = require('../config/conn');

const User = {
    verifyUserByCredencials: async (email, password) => {
        try {
            const [result] = await conn.query('SELECT * FROM user WHERE email = ? AND password = ?', [email, password]);
            return (result.length > 0) ? true : false;
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },
    create: async (user) => {
        try {
            return conn.query('INSERT INTO user SET ?', [user]);
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },
  };
  
  module.exports = User;