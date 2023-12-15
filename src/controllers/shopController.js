const shopControllers={
  shop:(req,res) => res.render ('shop'),
  id:(req,res) => res.send ('route for find a retrieve a product from an ID'),
  add:(req,res) => res.send ('route for add the current item to the shop cart'),
  cart :(req,res) => res.send ('route for cart view'),
  checkout:(req,res) => res.send ('route for got to checkout page')
}

module.exports=shopControllers;  