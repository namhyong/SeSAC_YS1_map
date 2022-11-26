
const express = require("express");
const multer = require("multer");
const { userInfo } = require("os");
const path =require('path');
const app = express();      
const port = 8080; 

app.set('view engine', 'ejs') 


app.use(express.urlencoded({extended:true})) 
app.use(express.json()) 


// app.use("/static",express.static("uploads"))
app.use( "/uploads", express.static( "uploads" ) );
// app.use(express.static("uploads"))

// const upload = multer({
//     dest:"upload/"
// })

// const upload = multer({
//     storage:multer.diskStorage({ //하드디스크에 업르드 지정
//         destination(req,file,done){
//             done(null,'uploads/'); //erorr없이 파일이 업로드된 경로를 uploads로 설정해라
//         },
//         filename(req,file,done){
//             console.log( "filename: ", req.body);
//             const ext = path.extname(file.originalname) //확장자명을 가져오는 함수
//             const filename= Date.now() + ext; //오늘 날짜로 파일 이름 지정 + 확장자명
//             done(null,filename); //done함수를 통해 내가 변경한 이름을 알려줘야함
//         }
//     })
// })


const upload = multer({
    storage:multer.diskStorage({ //하드디스크에 업르드 지정
        destination(req,file,done){
            done(null,'uploads/'); //erorr없이 파일이 업로드된 경로를 uploads로 설정해라
        },
        filename(req,file,done){
           
            const ext = path.extname(file.originalname); //확장자명을 가져오는 함수
            const filename = req.body.id + ext
            done(null,filename); //done함수를 통해 내가 변경한 이름을 알려 줘야함
        }
    })
})


app.get("/file", (req,res) => {
    res.render("file")
})


//upload.single("userfile")이 미들웨어
//userfile부분에는 내가 설정한 input태그의 name 속성이 들어가야 한다
//single: 한개의 파일만을 보낼때 사용
//array: 같은 name으로 여러개의 파일(multiple)로 올 때 사용
//프론트엔드의 input의 name과 서버의 name이 같아야 한다
app.post("/upload", upload.single("userfile"),(req,res) => { 

    req.name ="12345"
    console.log(req.file); //file의 경로가 담겨서 출력
    console.log(req.body);
    res.send("Upload Complete");
});

app.post("/upload-array", upload.array("userfile"),(req,res) => { 

    req.name ="12345"
    console.log(req.files); 
    console.log(req.body);
    res.send("Upload Complete");
});


app.post("/upload-fields", upload.fields([{name:'userfile1'},{name:'userfile2'},{name:'userfile3'}]),(req,res) => { 

    req.name ="12345"
    console.log(req.files); 
    console.log(req.body);
    res.send("Upload Complete");
});

app.get("/", test, test2, (req,res)=>{ // "/"와 req,res 사이에 test를 넣으면 /함수를 처리하고 res,req를 하기 전에 test 함수를 실행시키겠다.
    console.log("req.name: ", req.name)
    console.log("hello");
    res.send("hello")
});
function test(req,res,next) {
    console.log(req.query);
    console.log("test 함수입니다.");
    next(); //test 미들웨어 함수가 끝났고 그 다음을 진행 해라
}
function test2(req,res,next) {
    console.log("test2 함수입니다");
    next()  //미들웨어가 끝났으면 next를 써줘야 한다 그렇지 않으면 다음 동작이 실행되지 않는다.
}

// 클라이언트의 요청과 응답 사이에서 거처가는 함수가 미들웨어 함수이다.
// 파일 업로드 : nmp i multer



app.get("/fileupload", (req,res) => {
    res.render("fileupload")
})

app.post("/fileuploaded", upload.single("userfile"),(req,res) => { 

    
    console.log(req.file); //file의 경로가 담겨서 출력
    console.log(req.body);
    res.render("fileuploaded",{data:req.file.filename});
});


app.get("/result2", (req,res) => {
    res.render("practice2")
})




app.post("/result2", upload.single("userfile"),(req,res) => { 
    res.send(req.file.filename )
});

app.get("/result3", (req,res) => {
    res.render("practice3")
})




app.post("/result3", upload.single("userfile"),(req,res) => { 
    res.send(req.file.filename )
});





app.get("/register2", (req,res) => {        //정답코드
    res.render("practice36");
});
app.post("/register2", upload.single("userfile"), (req,res) => {        //페이지 이동을 안하기 위해 /register2를 같이 썼음
    res.send({ path: req.file.path } );
});


app.listen(port,()=>{       //listen 첫번째 인자 포트번호 두번째 인자 함수
    console.log("server open : ", port );

})

