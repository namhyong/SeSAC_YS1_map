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

        cb(rows);
    })

}

exports.insert_user =(user_info,cb) =>{
    var sql = `insert into user values('${user_info.id}','${user_info.pw}','${user_info.name}')`
cnn.query(sql,(err,result)=>{
    console.log("insert user info: ", result)
    cb()
})}
