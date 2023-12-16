const adminControllers={
    admin:(req,res) => res.render ('admin'),
    createconsult:(req,res) => res.render ('create'),
    create:(req,res) => res.send ('route for admin create view'),
    idconsult:(req,res) => res.render ('edit'),
    idput:(req,res) => res.send ('route for send id'),
    iddelete:(req,res) => res.send ('route for delete id'),
}

    module.exports=adminControllers;    