const mysql = require("mysql");

const cnn = mysql.createConnection({ //옵션으로 적어둔 것에 해당하는 데이터베이스에 연결
    host: 'localhost', //OR '127.0.0.1'     //mysql에 접속 할 수 있는 주소
    user: 'user',       //root는 workbench나 cmd로 들어가야지 되며, 외부에서 접속은 허용하지 않음    
    password: 'qwer1234',    //mysql비밀번호
    database: 'sessac_test'  //database이름
})

cnn.query('select * from user',(err,result)=>{   //err:에러가 떳을때, result: 잘 실행 되었을 때   
    if(err) throw err // throw err = console.log(err);

    console.log(result);
    
})