const express= require('express');
const router =express.Router();   
const authControllers = require ('../controllers/authController');


router.get ('/auth/login',authControllers.loginconsult);
router.post ('/auth/login',authControllers.login);
router.get ('/auth/register',authControllers.registerconsult);
router.post ('/auth/register',authControllers.register);
router.get ('/auth/logout',authControllers.logout);




module.exports=router;

