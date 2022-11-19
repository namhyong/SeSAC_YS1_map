const fs2 =require("fs").promises;


fs2.writeFile("./sesac.txt",'반갑습니다')
    .then (function(){
        console.log("file writed")
    })
    .then(function(){
        return fs2.copyFile("./sesac.txt","./sesac2.txt" )
    })
    .then(function(){
        console.log("file copied")
    })
    .then(function(){
        return fs2.rename("./sesac2.txt","new.txt")
    })
    .then(function(){
        console.log('rename complete')
    })







//fs2.writeFile("./sesac.txt",'반갑습니다')    처음에 만든 버전  만들고 복사하는 과정에서 비동기기 때문에 내용이 복사되지 않아서 
                                                //새로 복사된 파일에 동기식으로 반갑습니다를 writeFile해줘야 했음

//fs2.copyFile("/.sesac.txt","./sesac2.txt" )     
   // .then(function(){
    //    return fs2.writeFile("./sesac2.txt", '반갑습니다')
    //})

    //.then(function(){
    //    return fs2.rename("./sesac2.txt","new.txt")
    //})
    //.then(function(){
    //    console.log('rename compete')
    //})


//fs2.rename("./sesac2.txt","new.txt")   
//    .then(function(){
//        console.log("rename compete")
//    })