const express=require('express');
const router =express.Router();
const shopControllers = require ('../controllers/shopController');

router.get('/shop'  ,shopControllers.shop );
router.get('/item' ,shopControllers.item);
router.get('/shop/item/:id', shopControllers.id);             
router.post('/shop/item/:id/add' ,shopControllers.add );
router.get('/carrito_compras' , shopControllers.cart );
router.post('/shop/cart' , shopControllers.checkout);


module.exports=router;