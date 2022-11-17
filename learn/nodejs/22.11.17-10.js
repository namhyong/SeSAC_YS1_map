const {Car} = require("./22.11.17-9.js")
console.log(Car)

var car1 =new Car("red")  //new 함수이름() = constructor생성자 함수 실행
console.log(car1.returnColor());
var car2 =new Car("blue");
console.log(car2.returnColor());
var car3 =new Car("yellow");
console.log(car3.returnColor());