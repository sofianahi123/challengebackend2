const authControllers={
    loginconsult:(req,res) => res.send ('route for login consult view'),
    login:(req,res) => res.send ('route for login form view'),
    registerconsult:(req,res) => res.send ('route for register consult view'),
    register :(req,res) => res.send ('route for register view'),
    logout:(req,res) => res.send ('route for logout view')
}

    module.exports=authControllers;    