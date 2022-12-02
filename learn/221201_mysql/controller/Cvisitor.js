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
    console.log(id);
    res.send(String(id))
    // 만약 Visitor.js의 cb(result.insertId)로 보내지 않고, cb(result)로 보냈다면, String(id.insertId)이렇게 보내도 된다.
 })
    //insert req.body
 //
}
