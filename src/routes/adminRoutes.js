const express= require('express');
const router =express.Router();   
const adminControllers = require ('../controllers/adminController');


router.get ('/admin',adminControllers.admin);
router.get ('/admin/create',adminControllers.createconsult);
router.post ('/admin/create',adminControllers.create);
router.get ('/admin/edit/:id',adminControllers.idconsult);
router.put ('/admin/edit/:id',adminControllers.idput);
router.delete ('/admin/delete/:id',adminControllers.iddelete);



module.exports=router;

