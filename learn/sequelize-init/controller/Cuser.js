const { User } = require("../model"); //model 폴더의 index.js를 모듈로 받아와서 User객체에 담음


exports.index = (req,res) => {
    res.render("index");
    
}


exports.signup = (req,res) => {
    res.render("signup");
}


exports.post_signup = async(req,res) => { 
    let data = {
        id: req.body.id,
        name: req.body.name,
        pw: req.body.pw
    }
    let result = await User.create(data) //위에서 선언한 User객체를 사용해 sequelize문법 사용
    console.log(result)
    res.send(true);
}

// exports.post_signup = (req,res) => {
//     let data = {
//         id: req.body.id,
//         name: req.body.name,
//         pw: req.body.pw
//     }
//     User.create(data)
//     .then(()=>{
//         res.send(true)
//     })
// }




exports.signin = (req,res) => {
    res.render("signin");
}


exports.post_signin = async(req,res) => {
    let data = {id:req.body.id, pw:req.body.pw}
    let result = await User.findOne({where:data}) 
    //findOne은 배열형태로 나오지 않기 때문에 if문에 result.length로 적을 수 없다.
    //따라서 result 값이 오지 않는 형태이기 때문에 NULL값이 오게 되기 때문에 자동적으로 else문이 실행이 된다.
    //반대로 result 값이 오게되면 true이기 때문에 if문이 실행이 된다. 
    //결과적으로 findOne을 사용할때에는 result에 값이 있다면 if문 값이 NULL이라면 else문이 실행되는 형태이다.
    
    console.log(result)
    if ( result ) res.send(true);
    else res.send(false);
    
}
// exports.post_signin = (req,res) =>{
//     let data = {id:req.body.id, pw:req.body.pw}
//     User.fineOne({Where:data})
//     .then((result)=>{
//         if(result) res.send(true)
//         else res.send(false)
//     })
// }


exports.profile = async(req,res) => {
    let result = await User.findAll({where:{id:req.body.id}})
        if ( result.length > 0 ) res.render("profile", {data: result[0]});
        else res.redirect("/user/signin");
    //findAll의 경우에는 []에 있는 배열의 형태로 result가 출력되기 때문에 
    //배열의 길이가 0보다 큰 경우는 즉 result.length>0 인경우 if문
    //배열의 길이가 0인 경우 (조건에 맞는 데이터가 없는 경우) else문을 실행하게 된다. 
    //결과적으로 findAll을 사용할때는 배열의 크기에 따라 if문 else문이 나뉘는 형태이다. 
}

// exports.profile = (req,res) => {
//     User.findAll({where:{id:req.body.id}})
//    .then((result)=>{
//     if ( result.length > 0 ) res.render("profile", {data: result[0]});
//     else res.redirect("/user/signin");
//    })

// }



exports.profile_edit = async(req,res) => {
    let data ={
        name: req.body.name,
        pw: req.body.pw
    }
    await User.update(data,{where:{id:req.body.id}})
     res.send(true);
    
}
// exports.profile_edit = (req,res) => {
//     let data ={
//         name: req.body.name,
//         pw: req.body.pw
//     }
//.then(()=>{
//     User.update(data,{where;{id:req.body.id}})
//     res.send(true)
//})

// }


exports.profile_delete = async(req,res) => {
    await User.destroy({where:{id:req.body.id}})
    
        res.send(true);
   
}

// exports.profile_delete = (req,res) => {
//     User.destroy({
//         where:{id:req.body.id}
//     })
//     .then(()=>{
//     res.send(true)
//     })
// };
