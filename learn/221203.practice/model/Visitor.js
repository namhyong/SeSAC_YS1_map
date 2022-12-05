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
    cb(result)
})}

exports.modify_user =(user_info,cb) =>{
    var sql = `update user set pw='${user_info.pw}', name='${user_info.name}'where id = '${user_info.id}'`
    cnn.query(sql,(err)=>{
    if(err) throw err;
   
    cb()
    })
    
}
exports.delete_user = (info,cb) =>{
    var sql = `delete from user where id = '${info.id}'`;
    cnn.query(sql,(err)=>{
        if (err) throw err;
        cb()
    })
}