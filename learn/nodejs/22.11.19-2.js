// function login(id,pw,cb){
//     setTimeout(function() { 
//         console.log("사용자 입장");
//         cb(id); //function(user)를 사용자 입장 콘솔로그 찍은 후 실행하는데 이 함수는 id값인 kim을 나타냄
//     },3000);
// }
// function getVideo(id,cb) {  
//     setTimeout(function(){  
//         console.log( id + "의 비디오 리스트");   //id값엔login함수 cb에서 받은 내용인 user kim이 들어가게 된다. 
//         cb( ['아바타','라라랜드']);  // kim 비디오 리스트 콘솔이 찍힌 후 function(videos)를 실행하는데 이 것은 [아바타,라라랜드]를 나타냄
//     },2000);
// }
// function getDetail(video,cb) {
//     setTimeout(function(){ 
       
//         cb(["비디오 제목:" + video]) //function(msg)를 실행하는데 이는 getvideo함수 cb에서 받은 내용인 아바타가 들어가된다.
//     },1000)
// }

// login('kim','1234',function(user){  //login 끝나고 유저 가지고 오고
//     getVideo(user,function(videos){ //video 함수 받아올때 user가지고 와서 사용
//         getDetail(videos[0],function(msg){ //detail 함수 받아올때 user에 0번째 가지고 오기
//             console.log(msg)
//         });
//     })
// })


function login(id,pw){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("사용자 입장");
            resolve(id);

        },3000)
    })
}
function getvideo(id){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(id +"의 비디오 리스트");
            resolve(['아바타','라라랜드'])
        },2000)
    })
}
function getDetail(video){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(["비디오 제목:"+video])
        },1000)
    })
}

// login('kim','1234').then( //리턴을 안하게 되면 콜백지옥과 같은 형태론 나타나게 된다.
//    function(user){
//     getvideo(user).then(
//         function(videos){
//             getDetail(videos[0]).then(
//                 function(msg){
//                     console.log(msg)
//                 }
//             )
//         }
//     )
//    } 
// )


login('kim','1234')
   .then(function(user){
      return getvideo(user)})
   .then(function(videos){
       return getDetail(videos[0])})
   .then(function(msg){console.log(msg)})
  



 