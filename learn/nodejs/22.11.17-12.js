function login(id,cb){
    console.log("사용자는" + id)
    cb()
  
}
function start(a,cb){
    setTimeout(function(){
        console.log("시작은" + a)
    cb()
},2000)
}
function second(b,cb){
    setTimeout(function(){
        console.log("두번째는" + b)
    cb()
},1000)
}
function third(c,cb){
    setTimeout(function(){
        console.log("세번째는" + c)
    cb()
},500)
}


login('kim',function(){
    start('call',function(){
        second('back',function(){
            third('hell',function(){
                
            })
        })
    })
})