const express = require("express");
const mysql = require("mysql");
const app = express();      
const port = 8000; 


app.set('view engine', 'ejs') 

app.use("/static",express.static(__dirname + "static")) 
app.use(express.urlencoded({extended:false})) 
app.use(express.json()) 


const router = require("./routes");  //router를 미들웨어로 걸어둠

//localhost:8000/visitor라고 들어오는 주소에서만 접속 가능
app.use('/', router);  


app.get('*',(req,res)=>{    
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해 주세요.")
    
})









app.listen(port,()=>{
    console.log("server open:", port);
})