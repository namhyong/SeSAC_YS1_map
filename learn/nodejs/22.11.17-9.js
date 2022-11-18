class Car {
    constructor(color){
        this.color =color;
        this.isdoor = true;
    }
    move(){
        console.log("움직인다.")

    }
    stop(){
        console.log("멈춘다")

    }
    returnColor(){
        return this.color;
    }
}
module.exports ={Car};


class Cat {
    constructor(name, age) {
        //속성
        this.name = name;
        this.age = age;
    }

//메소드
mew() {
    console.log("나는" +" "+this.name +"~"+" "+this.age+"살이다 야옹");
}
eat(){
    console.log("먹이를 먹습니다.");
}
}

module.exports={Cat};
