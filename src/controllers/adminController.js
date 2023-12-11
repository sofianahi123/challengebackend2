const adminControllers={
    admin:(req,res) => res.send ('route for admin view'),
   createconsult:(req,res) => res.send ('route for admin create consult'),
    create:(req,res) => res.send ('route for admin create view'),
    idconsult:(req,res) => res.send ('route for id'),
    idput:(req,res) => res.send ('route for send id'),
    iddelete:(req,res) => res.send ('route for delete id'),
}

    module.exports=adminControllers;    