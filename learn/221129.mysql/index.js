const express = require("express");
const mysql = require("mysql");
const app = express();      
const port = 8080; 

const cnn = mysql.createConnection({ 
    host: 'localhost', 
    user: 'user',          
    password: 'qwer1234',    
    database: 'sessac_test' 
})

app.set('view engine', 'ejs') 


app.use(express.urlencoded({extended:true})) 
app.use(express.json()) 


app.use("/static",express.static("static"))


app.get("/ajax",function(req,res){
    res.render("ajax");
})

app.post("/ajaxpost",function(req,res){
    // console.log(req.body);   

    if (req.body.id =="namhyong" &&
    req.body.pw =="1234"){
        res.send({msg:"<p style='color:blue'>로그인 성공</p>"});}
    else {
        res.send({msg:"<p style='color:red'>로그인 실패</p>"})};
    }); 


app.get('/',(req,res)=>{
    res.render("index.ejs")
});
app.post("/sqlpost",function(req,res){
// cnn.query('select * from user where ',(err,result)=>{   
    cnn.query('select * from member  ',(err,result)=>{
        if(err) throw err 
    
        console.log(result);
        res.render("index",{rows:result});  //mysql데이터베이스에서 가져온 user테이블 데이터를(result) rows에담아 랜더한다.
        })
    })
        

app.listen(port,()=>{
    console.log("open:", port);
})