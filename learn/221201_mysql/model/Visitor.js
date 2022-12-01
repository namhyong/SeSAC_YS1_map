const mysql = require("mysql")

const cnn = mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'qwer1234',
    database:'sessac_test'
})

exports.get_visitor =(cb) =>{  
    var sql ='SELECT * FROM visitor';         
    // Cvisitor에서 실행한 getvisitor 함수 실행함 callback함수가 실행되어
    //아래 cnn 함수가 시행되어 mysql에서 원하는 데이터를 찾음
    // 그다음 cb(rows)콜백 함수 실행 => Cvisitor.js의 function(result)함수 다시 실행 됨 
    //따라서 mysql데이터를 조회 한 후 Cvisiter.js에서 visitor.ejs파일이 랜더가 됨 
     

//이 아래 cnn아래 함수의 실행이 오래 걸리기 때문에 원하는 비동기 처리를 하기 위해서 callback함수를 사용해 주는 것이다.    
    cnn.query(sql,(err,rows)=>{ //실행시켜서 결과를 rows에 반환 
        if(err) throw err;      //혹시 에러가 생기면 err객체에 반환
        console.log("visitors: ", rows); //에러 생기지 않았을 경우 콘솔 로그     

        cb(rows);   
    })
}

exports.register_visitor = (info,cb) =>{    //info:req.body를 넘겨준 정보
    //info = req.body;{name: ,comment}

    var sql= `insert into visitor(name, comment) values('${info.name}','${info.comment}')`
    //여기서 info는 Visitor.register_visiter 함수를 실행하면서 req.body의 정보를 담아 온 것 

    cnn.query(sql,(err,result)=>{ //쿼리를 실행하는 함수
        if(err) throw err;     
        console.log("insert result: ", result);    //result에는 mysql의 여러 결과가 담겨옴
        
    //1.위에 var sql과 cnn.query를 통해 sql문을 조회한 후
    //2. 아래 콜백 함수 실행 이는 곧 Cvisitor의 function(id)와 같은 함수
        cb(result.insertId);  
        //sql의 결과중 insertID만을 가져오기 위해 위와 같이 사용
    })
}