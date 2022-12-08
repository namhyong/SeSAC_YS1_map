const express = require("express")
const app = express()
const port = 8000;

const cookieParser = require("cookie-parser")
app.set('view engine', 'ejs')

app.use(cookieParser())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const option = {
    httpOnly: true, //이 옵션이 들어간 쿠키는 클라이언트가 document.cookie 접근 할 수 없게 함(스크립트에서 쿠키를 조작하는 것을 막아준다.)
    maxAge: 86400000, //만들어진 순간부터 초만큼 뒤에 만료가 됨(ms 단위) ex)30000 -> 30초 뒤에 만료
    // expires: "2022-12-08T09:00:00", //날짜를 적어 만료를 정함 (GMT 시간 기준 2022-12-08T09:00:00)
    // path:"/a", //localhost:8000 경로에서는 쿠키가 없움. localhost:8000/a/~~~~~~ "/a"가 포함된 모든 경로에는 쿠키가 있음 default"/"
    // secure: false, // https 보안 서버에만 적용됨(true일 경우), false가 기본 값이기 때문에 쓰지 않아도 됨
    //signed: true //쿠키 암호화 여부 (true면 암호화 함) default false

}

app.get("/",(req,res)=>{
  //  if (req.cookies.NM_POPOP) res.render("ejs 파일명",{popup:"none"});
   // else { res.render("ejs 파일명",{popup:"display"})}

    res.render("popup")
})

app.get("/popup",(req,res)=>{
   
    if(req.cookies.POPUP == "1") res.render("popup",{POPUP:"none"})
    else{res.render("popup",{POPUP:"display"})}
})
app.post("/setpopup",(req,res)=>{
    //1. 쿠키를 만든다. 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키 생성
    //2. 실질적인 서버 응답.  
    res.cookie("POPUP","1",option)
    res.send("쿠키 생성 성공")
    
})


//document.cookies//javescript로 쿠키 접근 



app.get("/set",(req,res)=>{ //localhost:8000/set에 접속하면 localhost:8000에 쿠키 만들어짐
    res.cookie("NM_POPOP","1", option) //1인자:키, 2인자:value,3인자: 옵션객체(만료일 등)
    res.send("쿠키 생성 성공")
})



app.get("/get",(req,res)=>{
    console.log(req.cookies) //딕셔너리 형태로 {test:1}로 나옴
    console.log(req.cookies.test) //딕셔너리 형태이기 때문에 test의 값인 1을 가져옴
    res.send(req.cookies) // cookie는 브라우저에(클라이언트) 저장되기 때문에 클라이언트의 요청인 req를 사용(클라이언트가 가지고 있기 때문)
})


app.listen(port,()=>{
    console.log("server open:", port)
});