// // fs module:
// //     파일처리에 관련된 모듈

const { readFile } = require("fs");

const fs = require("fs");   //callback형태      잘 사용하지 않음
// fs.readFile("./test.txt", function(err,data){   
//     if(err) throw err; //에러가 뜨면 멈추겠다.
    
//     console.log("data:",data);
//     console.log("data2:",data.toString()); // or String(data)  데이터를 문자형태로 바꿈
// });


const fs2 =require("fs").promises; //promise형태
// fs2.readFile("./text.txt")
//     .then((data)=>{
//         console.log("promise-data:",data);
//     })


// var result = fs.readFile(".test.txt"); //파일처리 시스템이 비동기 형태라 이런형식으로 가져올 수 없음, 내용만 읽고 결과를 알려주지 않음

fs2.writeFile("./write.txt",'sesac') //write.txt파일에 sesac이라는 내용을 넣겠다
.then(function(){   //resolve형태로 읽어올 필요가 없음
    return fs2.readFile("./write.txt")
    
})
.then(function(data){
    console.log(data.toString()) //만들어진 것을 읽고 콘솔로그 찍을때 then을 같은 라인(들여쓰기 하면 안됨)에 적어야 한다.
})


fs.writeFile('./write2.txt','codingon',function(err){ //colback 형태
    if(err) throw err;
    console.log("writeFile success");
    fs.readFile("./wriete2.txt",function(err,data){
        if(err)throw err;
        console.log("write2File data:", data.toString())
    })
})