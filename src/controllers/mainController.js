const mainControllers={
  index:(req,res) => res.render ('index'),
  contact:(req,res) => res.render ('contacto'),
  about:(req,res) => res.send ('route for about view'),
  faqs :(req,res) => res.send ('route for faqs view'),
}


module.exports=mainControllers;
