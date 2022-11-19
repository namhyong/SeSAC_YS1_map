
// http, express 모듈이 있음
//  http 모듈: 웹 서버를 구동하기 위한 node.js 내장 웹 모듈

// localhost: 컴퓨터 내부 주소(127.0.0.1)
// port:서버 접속할때 문
// 상태코드: 내가 응답을 할때 상태를 보내는 코드 
//    100번대: 처리중
//    200번대: 성공
//    300번대: 리다이렉트
//    400번대: 요청오류 ex)404: 찾을 수 없음 
//    500번대: 서버오류


 const http = require('http');
 const fs =require('fs').promises //파일을 가져오기 위해 프로미스 모듈
 const server =http.createServer(function(req,res){ //클라이언트가 접속했을때 실행되는 함수 
   fs.readFile('./test.html')
   .then(function(data){
      res.end(data.toString());
   })
});
   //  res.write("<h1>Hello</h1>"); //end를 적지 않으면 서버가 계속 읽으려고 하는 상태
   //  res.end("<hr>"); //end 함수를 통해 응답이 여기 까지라는것을 알려줘야 함 

 //req 객체:클라이언트의 요청
 //res 객체:서버의 응답 
         // writehead:라이트 헤더 작성
         // write:응답 작성
         // end: 응답 본문 작성 후 종료


//  server.on() //이벤트를 등록하는 함수 on
//  server.listen() //서버를 실행하고 클라이언트를 기다리는 함수 listen

 server.listen(8080,function(){   //8080번 포트로 서버를 열고, 콜백을 통해(function) 8080포트로 열었으면 '8080포트로 실행' 콘솔 실행
    console.log('8080포트로 실행');
 })

//  localhost:8080으로 접속 해야함 
// 접속하면 8080이 계속 실행되어 있는 상태
// 접속 빠져나오고 싶으면 터미널에서 ctrl + c
// 만약 에러가 뜨면 8080포트가 이미 열려있는 상태에서 열어달라고 요청한것이기 때문에 터미널 오른쪽 위에 +버튼을 눌러 포트가 이미 열려있는지 확인 해야함


