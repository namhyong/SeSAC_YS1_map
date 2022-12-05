const Visitor = require("../model/Visitor");


exports.first =(req,res)=>{    

        res.render("login")
    }


exports.login =(req,res)=>{    
    Visitor.login_insert( req.body ,function(rows){
        console.log("a:",rows)
        console.log("b:",req.body)
        if(rows.length>0){
        res.render("afterlogin",{data:rows[0]})} //왜 0인덱스 넣어야 값이 들어와 지는 지 모르겠네요?
        else{res.redirect("/")}
        
       
    })
}

exports.signin =(req,res) =>{
    res.render("signin")
}

exports.insert_user = (req,res) => {
    Visitor.insert_user(req.body,function(){
        console.log(req.body)
       res.send(true)
    })
}

exports.modify_user = (req,res) =>{
    Visitor.modify_user(req.body,function(){
        res.send(true)
    })
}

exports.delete_user = (req,res) =>{
    Visitor.delete_user(req.body,function(){
        res.send(true)
    })
}

