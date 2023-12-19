const { conn } = require('../config/conn');

const Product = {
    getAll: async () => {
        try {
            const query = "SELECT * FROM product p, licence l, category c where p.licence_id = l.licence_id and p.category_id = c.category_id";
            const [rows] = await conn.query(query);
            return rows;
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },
    getById: async (id) => {
        try {
            const [rows] = await conn.query('SELECT * FROM product WHERE product_id = ?', [id]);
            return rows;
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },
    getCategories: async () => {
        try {
            const query = "SELECT * FROM category";
            const [rows] = await conn.query(query);
            return rows;
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },
    getLicenses: async () => {
        try {
            const query = "SELECT * FROM licence";
            const [rows] = await conn.query(query);
            return rows;
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },
    create: async (product) => {
        try {
            return conn.query('INSERT INTO product SET ?', [product]);
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },
    update: async (id, product) => {
        try {
            return conn.query('UPDATE product SET ? WHERE product_id = ?', [product, id]);
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    },
    delete: async (id) => {
        try {
            return conn.query('DELETE FROM product WHERE product_id = ?', [id]);
        } catch (error) {
            throw error;
        } finally {
            conn.releaseConnection();
        }
    }
  };
  
  module.exports = Product;