const {Car} = require("./22.11.17-9.js")
console.log(Car)

var car1 =new Car("red")  //new 함수이름() = constructor생성자 함수 실행
console.log(car1.returnColor());
var car2 =new Car("blue");
console.log(car2.returnColor());
var car3 =new Car("yellow");
console.log(car3.returnColor());




const {Cat} =require("./22.11.17-9.js")
let cat1 = new Cat('나비',1) //새로운 Cat의 클래스 속성을 가지고 있는 cat1 객체 생성
let cat2 = new Cat('냥이',2)

cat1.mew()
cat1.eat()

cat2.mew()
cat2.eat()