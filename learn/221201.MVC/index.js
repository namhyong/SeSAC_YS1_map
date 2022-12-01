const express = require("express");
const mysql = require("mysql");
const app = express();      
const port = 8000; 

const cnn = mysql.createConnection({ 
    host: 'localhost', 
    user: 'user',          
    password: 'qwer1234',    
    database: 'sessac_test' 
})

app.set('view engine', 'ejs') 

app.use("/static",express.static(__dirname + "static")) 
app.use(express.urlencoded({extended:false})) 
app.use(express.json()) 


const router = require("./routes"); //모든 router에 관한 것은 이 폴더에서 처리
// localhost:8000/
// localhist:8000/dasd 뒤에 뭐가 오든 router로 가겠다.
app.use('/', router);   // '/'로 들어오는 요청에 대해서 모두 router로 가겠다.


app.get('*',(req,res)=>{    //정의 해둔 router가 아닌 다른 router로 접속을 했을 때(*:모든 정의 되지 않은 라우터) error메세지를 알려줌
                            //제일 마지막에 적어야 한다. 
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해 주세요.")
    // res.render('error')
})









app.listen(port,()=>{
    console.log("server open:", port);
})