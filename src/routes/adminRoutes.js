const express= require('express');
const router =express.Router();   
const adminControllers = require ('../controllers/adminController');


router.get ('/admin',adminControllers.admin);
router.get ('/create',adminControllers.createconsult);
router.post ('/create',adminControllers.create);
router.get ('/:id',adminControllers.idconsult);
router.put ('/edit/:id',adminControllers.idput);
router.delete ('/delete/:id',adminControllers.iddelete);



module.exports=router;

/*

const multer=require ("multer");
const upload = multer ({storage :multer.memoryStorage()});

const express = require("express");
const router = express.Router();

const controller = require("../controllers/tareasController");

router.get("/", controller.index);
router.post("/", controller.store);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router; */