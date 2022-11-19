// 콜백 함수
// collback:
//     함수가 끝난 뒤 실행되는 함수
//     함수를 만들때 parameter로 함수 받아서 사용한다.

const { get } = require("http");

// function func1(value, call){
//     console.log(value);
//     call()
// };

// func1('a',function(){ //func1먼저 실행, 
//     console.log("1")
// });

// function func2(){
//     console.log("2")
// };

// func1(func2);

// console.log("start");
// function login(id,cb){
//     setTimeout(()=>{        //timeout은 비동기이기 때문에 id값이 들어가지 않음 비동기식을 동기식으로 만들기 위해서 collback함수 시행
//        console.log('로그인 성공');
//        cb(id);  //로그인 함수를 먼저 실행하고 콜백 함수가 실행되는 형태
//     },2000); 
// }
// const id =login('kim',function(id){
//     console.log(id +"님 환영합니다.")
// });
// console.log("finish");

// 콜백 지옥
//     비동기 프로그래밍 시 발생하는 문제
//     함수의 매개변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기가 너무 깊어지는 현상
//     가독성 낮고 코드 수정 난이도 낮음

function login(id,pw,cb){
    setTimeout(function() { 
        console.log("사용자 입장");
        cb(id); //function(user)를 사용자 입장 콘솔로그 찍은 후 실행하는데 이 함수는 id값인 kim을 나타냄
    },3000);
}
function getVideo(id,cb) {  
    setTimeout(function(){  
        console.log( id + "의 비디오 리스트");   //id값엔login함수 cb에서 받은 내용인 user kim이 들어가게 된다. 
        cb( ['아바타','라라랜드']);  // kim 비디오 리스트 콘솔이 찍힌 후 function(videos)를 실행하는데 이 것은 [아바타,라라랜드]를 나타냄
    },2000);
}
function getDetail(video,cb) {
    setTimeout(function(){ 
       
        cb(["비디오 제목:" + video]) //function(msg)를 실행하는데 이는 getvideo함수 cb에서 받은 내용인 아바타가 들어가된다.
    },1000)
}

login('kim','1234',function(user){  //login 끝나고 유저 가지고 오고
    getVideo(user,function(videos){ //video 함수 받아올때 user가지고 와서 사용
        getDetail(videos[0],function(msg){ //detail 함수 받아올때 user에 0번째 가지고 오기
            console.log(msg)
        });
    })
})


// const func1 = setTimeout(function() { //익명함수(이름이 없는)형태로 일회성 함수 따로 함수의 이름을 정해주지 않아도 됨
//     console.log("1.5초 후 실행");
// },1500)
//     // function a(){ console.log("1.5초후 실행")} 위와 동일한 형태
//     // setTimeout(a,1500);
    
function func(a,callback){
    console.log(a)
    callback()
}
function func2(){
    console.log("gogo 함수")
    func('a',func2)
}



