const Visitor = require("../model/Visitor");
exports.visitor =(req,res)=>{    //exports 뒤에 .visitor는 router에 controller.뒤에 있는 문자. 결국은 router로 내보냄
    Visitor.get_visitor(function(result){       //함수 안에 함수가 있는 콜백 함수 형태 
                                               //get_visitor 함수를 Visitor.js에서 실행
        console.log(result);
        res.render("visitor", {data:result})    //기존에 있는 데이터를 보여주기 위해 data:result로 넘겨주는 것임 
    })
}

exports.register =(req,res) => {    //exports 뒤에 .register는 router에 controller.뒤에 있는 문자
 Visitor.register_visitor(req.body, function(id){ //사용자가 입력한 정보를 넘겨주기 위해 req.body를 넘겨줌
    console.log("register:",id);
    res.send(String(id))
    // 만약 Visitor.js의 cb(result.insertId)로 보내지 않고, cb(result)로 보냈다면, String(id.insertId)이렇게 보내도 된다.
 })
    //insert req.body
 //
}

exports.delete =(req,res) =>{
   //1. mysql에서 req.body.id에 해당하는 데이터를 delete해야한다. model에서 mysql 처리
   //2. 서버 응답을 해야한다 즉 res.send를 해야한다. controller에서 처리

   Visitor.delete_visitor(req.body.id, function(){
      
      res.send(true); //삭제가 잘 됐다는 응답을 보냄 서버에 보낼게 없어도 응답을 무조건 보내야 함
   })
}

exports.get_visitor_by_id =(req,res) =>{
   //1. req.query.id에 해당하는 데이터를 조회
   //2. 서버응답 -> 조회한 데이터를 응답
   Visitor.get_visitor_by_model(req.query.id, function(rows){
      res.send(rows) //배열로 나오기 때문에 id 하나만 보내기 위해서 index값 0만을 보냄 
   })
}

exports.update_visitor = (req,res) =>{
   //1. req.body 데이터를 mysql에 업데이트 해야한다.
   //2. 서버에응답을 보내야 한다.
   Visitor.update_visitor(req.body,function(){
      res.send(true);
   })
}