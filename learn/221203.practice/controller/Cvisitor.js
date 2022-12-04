const Visitor = require("../model/Visitor");


exports.first =(req,res)=>{    

        res.render("login")
    }


exports.login =(req,res)=>{    
    Visitor.login_insert( req.body ,function(rows){
        console.log("a:",rows)
        res.send(rows)    
    })
}

exports.signin =(req,res) =>{
    res.render("signin")
}

exports.insert_user = (req,res) => {
    Visitor.insert_user(req.body,function(){
        res.render("login")
    })
}

