const mysql = require("mysql")

const cnn = mysql.createConnection({
    host:'localhost',
    user:'user',
    password:'qwer1234',
    database:'sessac_test'
})



exports.login_insert = (login_info, cb) =>{
    var sql = `select * from user where id='${login_info.id}' and pw='${login_info.pw}'`

    cnn.query(sql,(err,rows)=>{
        if(err) throw err;
        if (rows.length>0){
            cb({rows});
        }
        else{
            cb({})
        }
        
    })

}
