const authControllers={
    loginconsult:(req,res) => res.render ('login'),
    login:(req,res) => res.send ('route for login form view'),
    registerconsult:(req,res) => res.render ('register'),
    register :(req,res) => res.send ('route for register view'),
    logout:(req,res) => res.send ('route for logout view')
}

    module.exports=authControllers;  