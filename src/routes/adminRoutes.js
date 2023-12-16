const express= require('express');
const router =express.Router();   
const adminControllers = require ('../controllers/adminController');


router.get ('/admin',adminControllers.admin);
router.get ('/create',adminControllers.createconsult);
router.post ('/create',adminControllers.create);
router.get ('/edit/:id',adminControllers.idconsult);
router.put ('/edit/:id',adminControllers.idput);
router.delete ('/delete/:id',adminControllers.iddelete);



module.exports=router;

/*no pude ubicar bien la pagina de edit */