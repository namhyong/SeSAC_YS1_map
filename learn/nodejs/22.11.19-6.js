const http = require('http');  //http모듈 불러오기
const fs =require('fs').promises  //fs모듈 불러오기
const server =http.createServer(function(req,res){  //서버 생성
    fs.readFile('./22.10.29(6).html')   //파일 읽기
    .then(function(data){   //파일의 data나타내기
       res.end(data.toString());
    })
})    

server.listen(8080,function(){      //8080포트 서버 열기
    console.log('8080포트로 실행');
})


// ncp서버에서 서버 ip로 8080포트에서 실행하기 위해서는
// 이 nodejs파일과, 해당 html파일을 filezilla를 통해 서버에 올리고
// putty에서 cd /var/www/html로 이동해서 
// node 022.11.19-6으로 포트를 실행시킨다
// 이후   ncp acg에 nma-sesac-web-acg를 눌러 acg 설정을통해 8080번 포트를 허용하고
// http://27.96.135.104:8080/ 를 주소창에 적으면 서버에서 확인 가능 하다