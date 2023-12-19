const express= require('express');
const router =express.Router();   
const adminControllers = require ('../controllers/adminController');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/uploads/'); 
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage })

router.get('/admin',adminControllers.admin);
router.get('/create',adminControllers.createconsult);
router.post('/create', upload.array('images',2), adminControllers.create);
router.get('/edit/:id',adminControllers.idconsult);
router.put('/update/:id', upload.array('images',2), adminControllers.idput);
router.delete('/delete/:id',adminControllers.iddelete);

module.exports=router;