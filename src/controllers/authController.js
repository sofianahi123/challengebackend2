const User = require('../models/user.model');
const { validationResult } = require('express-validator');

const authControllers={
    loginconsult:(req,res) => res.render ('login'),
    login: async (req, res) => {
        // Validación de campos utilizando express-validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
          const result = await User.verifyUserByCredencials(email, password);
          if (result){
            res.send({'message': 'bienvenido'});
          }
          else{
            res.send({'message': 'email/password incorrectas, reintentar.'});
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Error interno del servidor.' });
        }
    },
    registerconsult:(req,res) => res.render ('register'),
    register: async (req, res) => {
        // Validación de campos utilizando express-validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const {  name, lastname, email, password } = req.body;
        const newUser = { name, lastname, email, password };
        try {
          await User.create(newUser);
          res.render('login');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error interno del servidor.' });
        }
    },
    logout:(req,res) => res.send ('route for logout view')
}

    module.exports=authControllers;  