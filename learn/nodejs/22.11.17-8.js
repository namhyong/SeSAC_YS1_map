// javascropt 문법
 
// 배열 구조분해 할당:
//     배열이나 객체의 속성을 해체해 그 값을 개별 변수에 담는 것

// let list =['apple', 'banana']
// [item1,item2] =list;
// //let item1 = item[0];
// //let item2 = item[1];
// console.log(item1);
// console.log(item2);

// [item1,item2 ='peach', item3='orange']=lsit; //만약 아이템2의 값이 없으면 피치를 넣고 아이템3 값이 없으면 오렌지를 넣어라
// console.log(item1);
// console.log(item2);
// console.log(item3);

// let x =1;    x=1로 선언
// let y = 3    y=3으로 선언
// let temp = x;    x값을 temp에 올려둠
// x= y;        x와y를 같게 만들어 줘서
// y = temp     temp에 있는 x값을 y로 가져옴

// let x=1, y=3;
// [x,y] =[y,x];
// console.log(x,y)


// //[1,3]
// //[a,b] =[1,3]

// // 객체 구조분해
let obj ={
    a:'one',
    b:'two',
    e:'1',
    f:'2'
};

// let a =obj.a;
// let{b,a} =obj; 
// let{b:key1,a} =obj; // b키의 이름을 key1으로 바꿈
// // let{b:key1,a, c ='three'} =obj; //c키와 값을 새로 넣어줌
// console.log(a);
// console.log(key1);

let{b,...rest} =obj
console.log(b); // 먼저 b라는 키를 가져옴
console.log(rest); //b키를 제외한 나머지 애들을 전개해서 가져옴