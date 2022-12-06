const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"] 

//config.json에서 development의 키 값인     
// {
//         "host":"localhost",
//         "database":"sessac_test",
//         "username":"user",
//         "password":"qwer1234",
//         "dialect":"mysql"
//     }부분이 config로 선언

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize
db.Sequelize = Sequelize

db.Visitor = require("./Visitor")(sequelize,Sequelize) // Visitor.js의 exports를 받아옴
//함수 실행을 위해()를 사용 sequlize를 인자로 보내(여기서 sequlize는 config.jason에서 가져온 database정보) Visitor.js에서 인자로 받아 Sequlize.define에 사용 
// Sequlize는 위에 require로 불러온 sequlize모듈을 visitor.js에서 인자로 받아 사용 

db.User = require("./User")(sequelize,Sequelize) //User.js(./User)에서 함수를 받아 실행시키고 db객체에 User라는 배열로 넣어줌

// 위에 두개는 아래와 같은 모습을 하고 있음
// db{
//     "Sequelize": Sequelize,
//     "sequelize": sequelize
//     "Visitor": "Visitor.js"에서 return 받은 값
//      "User:""User.js"에서 return 받은 값( 테이블 정보)
// }

module.exports = db;