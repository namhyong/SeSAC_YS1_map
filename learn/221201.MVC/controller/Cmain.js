//라우터에서 사용하는 함수는 모두 여기에서 정의 되어 있어야 한다.

const Test = require("../model/Test"); //model의 test.js에서 exports한 것을 require함 

exports.main = (req,res) => { //exports하는 것은 똑같지만, 불러오는 부분이 다르다.
    let hi = Test.hello() //model의 test.js에서 hello 함수에서 리턴하는 hello가 hi 라는 객체에 담김
    res.send(hi)
    // res.render("index");
}

exports.test = (req,res) => { //exports 뒤에 .test는 router에 controller.뒤에 있는 문자
    res.send("test");
}

exports.post = (req,res) => { 
    res.send("test");
}

exports.axios=(req,res) =>{
    res.render("login")
}



exports.axiospost=(req,res) => {
    let login = Test.login()
    if (login.id ==req.body.id && login.pw == req.body.pw){                 //전에는 req.body.id =="namhyong"으로 썼던것을 namhyong에 대한 것을 model의 Test로 배열 형태로 뺴서 함수로 만들고 그 함수를 controller에서 불러오는 형태. 
        res.send({msg:"<p style='color:blue'>로그인 성공</p>"});}
    else {
        res.send({msg:"<p style='color:red'>로그인 실패</p>"})};

}


exports.axiospost2=(req,res) => {
    let users = Test.user2();
    let user_list = users.split("\n")  //\n:엔터를 의미
    // user_list = ["spreatics//12341234//코딩온 codee//4321//codee soyeon//1234//김소연"] users를 split하면 이와 같은 배열 형태로 나뉨
    let login_flag = false
    let name ="";
    for (let i =0; i< user_list.length; i++){
        let user = user_list[i].split("//");
        // user =["spreatics","12341234","코딩온"] 위에 user_list를 split 하면 이와 같은 배열 형태로 나뉨
        if ( user[0]==req.body.id &&  user[1]== req.body.pw) {
            login_flag = true;
            name=user[2]
            break;  //for문에서 성공을 하면 다음거는 보지 않기 위해 break를 넣음

        }   
    }
    if(login_flag)res.send(`${name}님 환영합니다`)
    else res.send(`로그인 실패`)
}



// module.exports ={        //이렇게 쓰는 것과 비슷하다 (문법적으로 맞지않고 예시로 보여주기 위해 작성한 것임)
//     main:main,
//     test:test,
//     post:post
// }