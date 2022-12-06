const User = (Sequelize,DataTypes) => { 
    //여기서 Sequelize는 model.js에서 보낸 sequelize로 fonfig.json에서 보낸 데이터베이스 정보가 담겨있다.
    //따라서 이 Visitor.js파일은 데이터베이스에서 특정 테이블의 정보를 정의 해주는 파일
    return Sequelize.define(
        "user", 
        {
            id: { 
                type: DataTypes.STRING(20), 
                allownull:false, 
                primaryKey: true,
                
    
            },
            pw: { 
                type: DataTypes.STRING(10),
                allowNull:false
            },
           name : { 
                type: DataTypes.STRING(10)
            }
        },
        {
            tableName:"user", 
            freezeTableName: true, 
            timestamps:false 
            
        }
    ) 
    
}


module.exports = User; 



