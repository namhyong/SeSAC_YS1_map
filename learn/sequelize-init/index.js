const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes"); //require하는 페이지가 index.js이기 때문에 routes만 적어줌
app.use('/visitor', router);
// localhost:8000/visitor~~~~
const userRoute = require("./routes/user"); // require하는 페이지가 user.js이기 때문에 user까지 적어줌
app.use('/user', userRoute); // 새롭게 선언한 userRoute를 이용함

app.get('*', (req, res)=>{
    res.send("주소가 존재하지 않습니다. 다시 한 번 확인해주세요.");
});

app.listen(port, ()=>{
    console.log("server open: ", port);
});