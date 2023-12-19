const Product = require('../models/product.model');
const multer = require('multer');
const { validationResult } = require('express-validator');

const adminControllers = {
  admin: async (req, res) =>{
    try {
      const products = await Product.getAll();
      res.render('admin', {'products': products})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  },
  createconsult: (req, res) => res.render('create'),
  create: async (req, res) => {
    // Validación de campos utilizando express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { 
      name,
      description, 
      price,
      stock,
      discount,
      sku,
      dues,
      licence_id,
      category_id } = req.body;
    const image_front = req.files[0] ? req.files[0].filename : null;
    const image_back = req.files[1] ? req.files[1].filename : null;
    const newProduct = 
    { name, 
      description, 
      price,
      stock,
      discount,
      sku,
      dues,
      image_front,
      image_back,
      licence_id,
      category_id };
    try {
      await Product.create(newProduct);
      res.json({ message: 'Producto agregado exitosamente' });
    } catch (error) {
      if (err instanceof multer.MulterError) {
        console.error('Error de Multer:', err.message);
        return res.status(500).send('Error al subir el archivo: ' + err.message);
      }
      else{
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor.' });
      }
    }
  },
  idconsult: async (req, res) => {
    // Validación de campos utilizando express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    try {
      const product = await Product.getById(id);
      res.render('edit', {'product': product[0]})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  },
  idput: async (req, res) => {
    // Validación de campos utilizando express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const id = req.params.id;
    const { name, price } = req.body;  // cambiar campos
    const image = req.file ? req.file.filename : null;
    const updatedProduct = { name, price, image };
    try {
      const result = await Product.update(id, updatedProduct);
      if (result[0].affectedRows === 0) {
        return res.status(404).json({ error: 'No se encontró el producto.' });
      }
      res.json({ message: 'Producto modificado exitosamente.' });
    } catch (error) {
      console.error('Error general: ', error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  },
  iddelete: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Product.delete(id);
      if (result[0].affectedRows === 0) {
        return res.status(404).json({ error: 'No se encontró el producto.' });
      }
      res.json({ message: 'Producto eliminado exitosamente.' });
    } catch (error) {
      console.error('Error general: ', error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  }
};

module.exports = adminControllers;

/*const adminControllers={
    admin:(req,res) => res.render ('admin'),
    createconsult:(req,res) => res.render ('create'),
    create:(req,res) => res.render ('edit'),
    idconsult:(req,res) => res.render (''),
    idput:(req,res) => res.send ('route for send id'),
    iddelete:(req,res) => res.send ('route for delete id'),
}

module.exports=adminControllers;    

/*
    let tareas = [
        { id: 1, title: "Tarea 1", completed: false },
        { id: 2, title: "Tarea 2", completed: false },
        { id: 3, title: "Tarea 3", completed: false },
        { id: 4, title: "Tarea 4", completed: false },
      ];                               
      
      const index = (req, res) => {
        console.log(tareas);
        res.render("index", { tareas });
        // res.render("index", { tareas, layout: "layouts/admin" });
      };
      
      const store = (req, res) => {
        const tarea = {
          id: Date.now(),
          title: req.body.title,
          completed: false,
        };
      
        tareas.push(tarea);              
      
        res.redirect("/");
      };
      
      const update = (req, res) => {
        tareas.forEach((tarea) => {
          if (tarea.id == req.params.id) {
            tarea.completed = !tarea.completed;
          }
        });
      
        res.redirect("/");
      };
      
      const destroy = (req, res) => {
        tareas = tareas.filter((tarea) => tarea.id != req.params.id);
      
        res.redirect("/");
      };
      
      module.exports = {
        index,
        store,
        update,
        destroy,
      };  
          */