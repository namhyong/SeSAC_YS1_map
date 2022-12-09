const express = require("express")
const app = express()
const port = 8000;



const session = require("express-session")
app.set('view engine', 'ejs')


app.use(session({
    secret: '1234', //적힌 임의의 문자열로 세션을 암호화 함
    resave: false, //변경사항이 없어도 저장을 할 것인가, "true":모든 요청마다 session에 변화가 없어도 session을 다시 저장함
    saveUninitialized: true, //초기화되지 않은 세션을 저장하냐 마냐 
//    cookie:{          session id 쿠키에 대한 옵션
//        httpOnly: true,
//        maxAge:
//    },
//    secure: true 보안서버에서만 작동
}))

app.use(express.urlencoded({extended:true}))
app.use(express.json())



const user = {id:"nam",pw:"1234"}
app.get("/navbar", (req,res)=>{
    res.render("navbar",{
        user:req.session.user
    })

})

app.post("/login",(req,res)=>{
    res.render("login")
})

app.post("/main",(req,res)=>{
    if(req.session.user) res.render(("navbar",{isLogin:true}))
    else res.render("login")
})

app.post("/login_check",(req,res)=>{
    if(req.body.id==user.id && req.body.pw ==user.pw){
        req.session.user = req.body.id
        res.send({user:req.session.user})
        
        console.log(req.session)
        
    }
    else{res.send(false)}
})



app.get("/",(req,res)=>{
    if(req.session.user) res.render("index",{isLogin:true})
    else res.render("index",{isLogin:false})
    res.send("세션 수업")
});


app.post("/login",(req,res)=>{
    if(req.body.id == user.id && req.body.pw ==user.pw) {
        req.session.user= req.body.id; 
        //세션의 user라는 공간에 누가 로그인했는지 저장 req.session.id는 사용하면 안됨 (종종 고유 id가 찍히기 때문)
        res.send("로그인 성공")
    }
    else {
        res.send("로그인 실패")
    }
})
//app.destroy("/logout",(req,res)=>{
 //   res.sessoin.destroy(function(err){ //세션 안의 값을 삭제
//       if (err) throw err
  //      res.send("로그아웃 성공")
  //  })
//})

app.get("/setsession",(req,res)=>{
    req.session.user ="soyoen" //sesion의 딕셔너리에 user 키와, soyoen 값을 넣어줌
    //req사용 이유: 클라이언트 마다 고유의 세션 id가 있기 때문에 그 고유 id에 접근 하기 위해 req를 사용한다.
    res.send("세션 생성 성공")
})

app.listen(port,()=>{
    console.log("server open:", port)
});