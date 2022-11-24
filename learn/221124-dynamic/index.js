const express = require("express");
const app = express();      
const port = 8080; 

app.set('view engine', 'ejs') 


app.use(express.urlencoded({extended:true})) 
app.use(express.json()) 


app.use("/static",express.static("static"))


app.get("/",function(req,res){
    res.render("index");
})
app.get("/form",function(req,res){
    console.log(req.query);
    // res.send("이름은: " +req.query.name); //정보를 보낸것에 대한 응답을 따로 처리해야 비동기에서 응답을 받아 올 수 있다.
    res.send({msg: "get - 이름은: " +req.query.name});  //msg로 key값의 경우

})

app.post("/form",function(req,res){
    console.log(req.body);   
    
    res.send({msg: "post - 이름은: " +req.body.name});  

})

app.get("/get",function(req,res){
    res.render("get")
})

app.get("/form2",function(req,res){
    console.log(req.query);
    res.send({
        //msg: "이름은: " + req.query.name + " " + "성별은: " + req.query.gender + " " + "생일은: " +req.query.birthDay
        //params에서 정해둔 속성으로 가져오기
        msg: "이름은: " + req.query.name,       //이렇게 하고 alert를 여러개 만들면 알림이 3개 뜬다.
         a: "성별은: " + req.query.gender ,
         b: "생일은: " +req.query.birthDay
    })


 
})

app.listen(port,()=>{       //listen 첫번째 인자 포트번호 두번째 인자 함수
    console.log("server open : ", port );

})
