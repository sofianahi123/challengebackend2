const shopControllers={
  shop:(req,res) => res.render ('shop'),
  item:(req,res)=> res.render('item'),
  id:(req,res) => res.send ('route for find a retrieve a product from an ID'),
  add:(req,res) => res.send ('route for add the current item to the shop cart'),
  cart :(req,res) => res.render ('carrito_compras'),
  checkout:(req,res) => res.send ('route for got to checkout page')
}

module.exports=shopControllers;  