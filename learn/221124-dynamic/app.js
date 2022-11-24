
        const express = require("express");
        const app = express();      
        const port = 8080; 

        app.set('view engine', 'ejs') 


        app.use(express.urlencoded({extended:true})) 
        app.use(express.json()) 


        app.use("/static",express.static("static"))


        app.get("/post",function(req,res){
            res.render("post");
        })

        app.post("/post2",function(req,res){
            // console.log(req.body);   

            if (req.body.id =="namhyong" &&
            req.body.pw =="1234"){
                res.send({msg:"<p style='color:blue'>로그인 성공</p>"});}
            else {
                res.send({msg:"<p style='color:red'>로그인 실패</p>"})};
            });    
            
            
            
    
        

            // axios 버전
            // res.send({
            //     id:req.body.id, 
            //     pw:req.body.pw,
            //     result:("<p style='color:blue'>로그인 성공</p>"),
            //     result2:("<p style='color:red'>로그인 실패</p>")
            // });  


        



        app.listen(port,()=>{       //listen 첫번째 인자 포트번호 두번째 인자 함수
            console.log("server open : ", port );

        })

  