// 프로미스:
//     callback Hell로 인한 복잡도 증가와 예외처리의 어려움을 해결하기 위해 만들어진 것
//     비동기 작업에서 성공과 실패를 분리해 메소드를 수행한다.
//     resolve:일이 성공적으로 끝난 경우
//         프로미스 실행한 곳으리 then으로 돌아간다
//     reject: 일이 성공적이지 않은 경우, 에러발생시
//     프로미스 실행한 곳으리 catch으로 돌아간다


//프로미스 문법:
//     new Promise(function(resolve, reject){   
            //resoleve: 함수형태, 성공했을 때 실행핧 친구
            //reject: 함수형태, 실패 or 에러를 처리할때 사용 하는 친구
//     })

// function func1(){
//     return new Promise(function(resolve,reject){
//         resolve("성공");
//     });
// }

// function func2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){resolve("성공");},1000)
//     });
// }

// var a =func1()
// console.log(a);
// func1().then(function(result){
//     console.log("result:", result);
// })

// var b =func2()
// console.log(b);
// func2()
//.then(function(result){
//     console.log("result2:", result);
//     return 'a';
// })
//.then(function(abc){  //같은 라인에서 연결이 되있는것을 체이닝이라고 부름
//     console.log( "abc:", abc);  
// })


function func3(flag){
    return new Promise(function(resolve,reject){
        if(flag){
            resolve("flag는 true")
        }else {
            reject("flag는 false")
        }
    })
}
func3(false).then(
    function(msg){              //resolve로 들어왔을 때
        console.log("msg1:",msg)
    }
).catch(
    function(msg){             //then에서 처리가 될 수 있고, then에서 처리가 되지 않으면(reject일때) catch에서 처리가 될 수 있다.
        console.log("msg2:",msg)
    }
)
    // function(msg){              //reject로 들어왔을때
    //     console.log("msg2:",msg)
    // }
//}


