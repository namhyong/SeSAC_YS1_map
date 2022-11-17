// const result= require('./22.11.17-1.js') //모듈을 불러옴

// console.log(result.a) //터미널을 통해 확인
// console.log(result.b)
// console.log(result.test()) //모듈 함수 실행 할때 함수 뒤에 소괄호 필요
// // 터미널 확인 방법: (터미널에서) node 파일명 (파일명 찾는법: tab울 누르면 자동완성 기능)


const num = require('./22.11.17-1.js')
//num ={a:1 b:3}
const a= num.a;
const b= num.b;

function add(){
    return a+b;
}
module.exports = add;
// module.exports = {add};
