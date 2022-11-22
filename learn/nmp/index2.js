const express = require("express");
const app = express();          
const port = 8080; 


app.set('view engine', 'ejs')

app.use("/static",express.static("static"))


app.listen(port,()=>{       
    console.log("server open : ", port );
    })
    app.get('/report',(req,res)=>{    
        res.render("index2",{
            data:["/static/img/1.jpg","/static/img/2.jpg","/static/img/3.jpg"]  
        })              
            
    }) 
    