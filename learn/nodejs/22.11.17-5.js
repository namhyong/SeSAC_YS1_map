// timer 메소드:
    const func1 = setTimeout(function() { //익명함수(이름이 없는)형태로 일회성 함수 따로 함수의 이름을 정해주지 않아도 됨
        console.log("1.5초 후 실행");
    },1500)
        // function a(){ console.log("1.5초후 실행")} 위와 동일한 형태
        // setTimeout(a,1500);
    const func2 = setInterval(()=>{
        console.log("1초마다 반복");
    },1000)
    const func3 =setImmediate(()=>{
        console.log("func3 실행")
    },3000)
    setTimeout(() =>{
        clearTimeout(func3);
        clearInterval(func2);
    },2500)
    const func4 =setImmediate( ()=>{
        console.log("func4 즉시 실행")
    })
    const func5 =setImmediate( ()=>{
        console.log("func5 즉시 실행")
    })

    clearImmediate(func5)
    

//console.log__filename: 현재 파일 경로

//console.log__dirname: 현재 폴더 경로

console.log("__filename:" + __filename)
console.log("__filename:" + __dirname)

// 프로세스 객체: 현제 실행중인 정보가 담겨있는 객체

console.log("process.version:",process.version);
console.log("process.arch:",process.arch);
console.log("process.platform:",process.platform);
console.log("process.cpuUsage:",process.cpuUsage());
console.log("___________________________")


//OS객체: 운영체제에 대한 정보를 담고 있는 객체

const os = require("os") //내장 모듈이라서 os객체를 가져와서 써야함
console.log("os,type:", os.type()); 
console.log("os,cpus:", os.cpus()); 
console.log("os,homedir:", os.homedir()); 
console.log("os,freemem:", os.freemem()); 

//path모듈: 폴더랑 파일 경로를 쉽게 조작할 수 있도록 도와주는 기능

const path = require("path");
const file =__filename;
console.log("path.extname:", path.extname(file)); //확장자 명
console.log("path.parse:", path.parse(file)); // 경로 파일명에 대해서 구분할수 있는 것을 모두 다 구분 지어 놓은 것(예, 확장자에 따라, 루트켱로에 따라, 이름에 따라 등 모든 것을 구분 지어 놓는 것)

