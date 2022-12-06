//테이블 정보 자체를 자바스크립트 언어로 정의를 해줘야 사용 가능
//Sequlize.define을 통해 visitor 정보를 저장 하는데 return이기 때문에 함수를 실행 시켜야 함
//따라서 이 함수를 model의 index.js에서 실행 시킴


const Visitor = (Sequelize,DataTypes) => { 
    //여기서 Sequelize는 model.js에서 보낸 sequelize로 fonfig.json에서 보낸 데이터베이스 정보가 담겨있다.
    //따라서 이 Visitor.js파일은 데이터베이스에서 특정 테이블의 정보를 정의 해주는 파일
    return Sequelize.define(
        "visitor", 
        {
            id: { 
                type: DataTypes.INTEGER, 
                allownull:false, 
                primaryKey: true,
                autoIncrement:true
    
            },
            name: { 
                type: DataTypes.STRING(10),
                allowNull:false
            },
            comment : { 
                type: DataTypes.TEXT('medium')
            }
        },
        {
            tableName:"visitor", 
            freezeTableName: true, 
            timestamps:false 
            
        }
    ) 
    
}

// // Sequelize.define(테이블 이름, 컬럼 정보, 테이블 옵션 자체의 정의)
// Sequelize.define(
//     "visitor", // create table visitor(
//     {
//         id: { // id int not null primary key auto_increment
//             type: DataTypes.INTEGER, //데이터 타입이 무엇인지 int varchar와 같은
//             allownull:false, // null이 허용 여부
//             primaryKey: true, // pk여부
//             autoIncrement:true // 자동증가 여부

//         },
//         name: { //name varchar(10) not null
//             type: DataTypes.STRING(10),
//             allowNull:false
//         },
//         comment : { //comment medium text
//             type: DataTypes.TEXT('medium')
//         }
//     },
//     {
//         tableName:"visitor", //select * from visitor;이면 sequelize는 자동적으로 visitors로 만듦
//         freezeTableName: true, // 위와같이 복수형태로 만들지 않고 그냥 사용하겠다
//         timestamps:false //default값이 true임 creatAT modifyAT 컬럼에 시간을 저장하는데 사용하고자 하면 컬럼을 만들어야 함
//         //collate, charset:한글 인코딩 설정 : 데이터 베이스 자체에서 한글 인코딩을 했기 떄문에 설정을 하지 않아도 된다.
//     }
// ) 

module.exports = Visitor; //함수 exports model의 index.js에서