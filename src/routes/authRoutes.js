const express= require('express');
const router =express.Router();   
const authControllers = require ('../controllers/authController');

router.get ('/login',authControllers.loginconsult);
router.post ('/login',authControllers.login);
router.get ('/register',authControllers.registerconsult);
router.post ('/register',authControllers.register);
router.get ('/logout',authControllers.logout);




module.exports=router;

