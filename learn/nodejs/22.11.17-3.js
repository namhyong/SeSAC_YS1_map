const result = require('./22.11.17-2.js')
//result = function(){return a+b;}


console.log(result); //[Function: add]
console.log(result()); //4


// module.exports = {add};라면 {}가 있는 딕셔너리 형태로 가져오기 때문에 키랑 값이 같이 들어가서 객체.키으로 가져와야 한다.
//만약 그냥 console.log(result)를 쓰게되면 { add: [Function: add] } 형태로 가져오게 된다.
// console.log(result.add()) //함수 자체를 가져옴 따라서 4
// console.log(result.add) //{안에 있는 function:add를 가져옴} 따라서 function: add
