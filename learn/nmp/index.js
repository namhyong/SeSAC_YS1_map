const express = require("express");
const app = express();          //express 사용하기 위한 기본
const port = 8080; // 열 포트 정의

app.set('view engine', 'ejs') //ejs를 사용하기 위해 사용(ejs탬플릿을 view engine으로 사용하겠다.)

// app.use("/public",express.static("static")) //미들웨어 등록: 이미지를 불러오기 위해 클라이언트가 서버측에 폴더를 인식 할 수 있게 권한을 줘야함
// "/public"(가상경로): 원하는것 아무거나 들어와도 된다
//express.static("실제 존재하는 폴더 이름")
//static이라는 실제 존재하는 폴더에 public이라는 경로로 접근 할 수 있도록 함
//src ="/public/img/cat.jpg"


app.use(express.urlencoded({extended:true})) //x-www-urlencoded 데이터 해석
app.use(express.json()) //json:딕셔너리 형태와 비슷(key:value 형태)
//폼 전송을 위해 적어야 하는 두개

app.use("/static",express.static("static"))
//가상경로 이름을 폴더 이름과 같게 하는것이 보기 편함

app.use(express.static("static"))
// src="/img/cat.jpg" 이런식으로 접근: static폴더 자체를 가상 경로로 쓰게 되는 경우

// -------------------------------------------------------------------------------------------------------

app.get('/',(req,res)=>{    // '/'는 브라우저에서 localhost:8080/뒤에 올 것을 입력 두번째 인자는 매개변수가 필요 따라서 req,res입력
    res.send("hello express"); //res: (서버가 클라이언트측에 보내는 응답)
                                //req:클라이언트가 서버에게 보내는 요청
}) 
app.get('/test',(req,res)=>{    //localhost:8080/test로 접속 했을 때의 router
    res.sendFile(__dirname+"/views/index.html")  //__dirname: index.html의 폴더 경로가 담겨 있음
    //sendfile 에는 절대 경로롤 입력해야 하지만 __dirname+"/폴더/파일.html"을 입력하면 절대 경로를 입력하지 않아도 출력이 가능하다
})  //서버측 백엔드 언어 즉, index.js 파일을 바꾸는 경우가 아니면(프론트엔드 언어만 수정한 경우), 서버를 껏다 켜도 되지 않아도 된다.


app.get('/ejs',(req,res)=>{    //ejs 랜더 하기 위해 사용
    res.render("index",{                //reder("파일이름"): ejs파일을 랜더하겠다
        title:"index 페이지 입니다.",   //reder("파일이름".{ 딕셔너리 형태로 원하는 파일 넘기기(쓰거나 안쓰거나 마음대로)})
        data:["a","b","c"]           //a,b,c 배열 생성
    }); //view엔진으로 설정했기 때문에 확장자를 쓰지 않아도 됨(views안에 index.ejs 파일을 찾아간다)
    
}) 


app.get("/form",(req,res)=>{
    res.render("form");
})

app.get("/getForm",(req,res)=>{ //보낸 폼을 받을 url
    console.log(req.query) 
    //req:클라이언트가 서버측이 보내는 요청
    // query: url 뒤에 ? 뒤에 찍히는 것 terminal에 찍힘
    res.send("get 요청 성공")
})


app.post("/postForm",(req,res)=>{ //post method를 사용하기 위해서는 app.post로 바꿔야 한다.
    console.log(req.body) //정보가 query가 아니라 body에 담겨옴  
    res.render("result",{data:req.body}) //결과가 도출되는 새로운 ejs파일 만들고 데이터를 보내기
})


app.get("/getinfo",(req,res)=>{
    res.render("getinfo");
})

app.get("/getinfo2",(req,res)=>{ 
    console.log(req.query) 

    res.send("get 요청 성공")
})

app.get("/postinfo",(req,res)=>{
    res.render("postinfo");
})

app.post("/postinfo2",(req,res)=>{ 
    console.log(req.body) 
    res.send("post 요청 성공")
})




app.listen(port,()=>{       //listen 첫번째 인자 포트번호 두번째 인자 함수
    console.log("server open : ", port );

})
