const mainControllers={
    home:(req,res) => res.send ('route for home view'),
    contact:(req,res) => res.send ('route for contact view'),
    about:(req,res) => res.send ('route for about view'),
    faqs :(req,res) => res.send ('route for faqs view'),
}


module.exports=mainControllers;



   /*falta el render que devuelve vista de index para el layout esta en carpeta tareascontroller.js se puede crear otra carpeta
    para renderizar los layout o ponerlos aca*/
  /*const index=(req,res) => {res.render("index");};
  module.exports ={ index ,};
  
  */

    