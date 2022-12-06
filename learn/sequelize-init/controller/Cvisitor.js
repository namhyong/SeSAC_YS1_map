// const Visitor = require("../model/Visitor");
const{ Visitor} = require("../model") // index.js에서 module.exports = Visitor; 형식으로 exports하니까  폴더자체를 require 하는 형식
//exports 2가지 방식: 
    //module.exports 이면, 폴더 자체를 require하고
    //exports.visitor이면, 폴더중 해당 파일을 선택하여 require한다.



 //async await 함수로 실행(where절 없는 select문)
exports.visitor = async(req, res) => {
    let result = await Visitor. findAll() //프로미스 객체에서만 await을 사용 가능하고, async함수에서만 사용이 가능 하기 때문에 async로 만들어줘야한다.
    //await함수가 실행 되고 나서 다음줄이 실행되는 형태
    res.render("visitor",{data:result});

}


//promise 함수로 실행 

 // exports.visitor = async(req, res) => {
    // Visitor. findAll() //select * form visitor;에 해당 하는 부분
    // .then((result)=>{ //sql문을 실행하고 나서 하고자 하는 것(정보를 조회하고 조회한 정보를 바탕으로 해야하는 것이 들어가야 함)
    //     console.log(result);
    //     console.log("ID:", result[0].id); //dataValues.id로 접근 하지 않아도 default로 dataValues가 들어가 있다.
    //     res.render("visitor", {data: result});
    // })

     
//sequelize 사용 전

    //select * form visitor;구문을 sequelize를 통해 자바스크립트로 실행 시켜야 함

    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
// }



//async, await 함수로 실행 (insert문)
    exports.register = async(req, res) => {
        let data = {
            name: req.body.name,
            comment: req.body.comment
        }
        let result = await Visitor.create(data)
        res.send(String(result.id))
    }



//promise 함수로 실행 
    //exports.register = (req, res) => {
    //    let data = {
    //        name: req.body.name,
    //        comment: req.body.comment
    //    }
    //    Visitor.create(data)
    //    .then((result)=>{
    //        console.log(result)
    //        res.send(String(result.id))
    //    })
    // }

  //sequelize 쓰지 않을 때

//var sql= `insert into visitor(name, comment) values('${req.body.name}','${req.body.comment}')`


//async await함수로 변환(where절이 있는 delete문)

    exports.delete = async(req, res) => {
        let result = await Visitor.destroy({where:{id:req.body.id}})
        console.log(result)
        res.send(true)
    }


//promise 함수로 실행 

    //exports.delete = (req, res) => {
        // mysql req.body.id에 해당하는 데이터를 delete
        // 서버 응답 res.send 
    //Visitor.destroy({
    // where:{id:req.body.id}
    //})
    //.then((result)=>{
    //    console.log(result)
    //    res.send(true)
    //})

//sequelize 쓰지 않을 때

   // var sql = `delete from visitor where id = ${req.body.id} ` 바꿔야할 sql문   
//    Visitor.delete_visitor(req.body.id, function(){
//        res.send(true);
//    })
//}


//async await함수로 변환(where절이 있는 select)

exports.get_visitor_by_id = async(req, res) => {
    let result = await Visitor.findOne({attributes:["id","name","comment"]},{where:{id:req.query.id}})
    res.send(result)
}


//promise로 실행

    // exports.get_visitor_by_id = (req, res) => {
    //     // req.query.id 에 해당하는 데이터를 조회
    //     // 서버 응답 > 조회한 데이터
    //     // Visitor.findAll({
            // attributes:["id","name","comment"], 내가 원하는 컬럼만 가저오게 하는 방법 
            // order: [["id","DESC"]] 어떤 정렬을 할지
    //     //     where : {id:req.query.id},
    //     //     limit:1
    //     // })가 아래와 같음
    //     Visitor.findOne({
    //         where : { id: req.query.id} //id가 req.query.id가 sql에서 id와 같은 것을 찾겠다.
    //     })
    //     .then((result)=>{
    //         res.send(result);
    //     })



//sequelize 쓰지 않을 때

    //select * from visitor where id = req.query.id; 구문을 sequelize를 통해 자바스크립트로 실행 시켜야 함
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
//}



//async await함수로 변환(where절이 있는 update문)

    exports.update_visitor = async(req, res) => {
        let data= {
            name:req.body.name,
            comment:req.body.comment
        }
        await Visitor.update(data,{where:{id:req.body.id}})
        
        res.send(true)
    }


//promise 함수로 실행 
    //exports.update_visitor = (req, res) => {
        // req.body 데이터를 mysql 에 update 할 수 있도록
        // 서버의 응답 
        //let data = {    //어떻게 업데이트 할것인지
        //    name: req.body.name,
        //    comment: req.body.comment
        //}
        //Visitor.update(data, {
        //   where:{id:req.body.id} //조건
        //})
        //.then((result)=>{
        //    console.log(result)
        //    res.send(true);
        //})



  //sequelize 쓰지 않을 때

    //var sql = `update visitor set  name='${req.body.name}',comment= '${req.body.comment}'where id = ${req.body.id}` 바꿔야할 구문
  

    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
//}