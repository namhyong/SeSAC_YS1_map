const Visitor = require("../model/Visitor");


exports.first =(req,res)=>{    

        res.render("login")
    }


exports.login =(req,res)=>{    
    Visitor.login_insert( req.body ,function(rows){

        res.send({data:rows})    
    })
}


