// 모듈:
//     특장한 기능을 하는 함수나 변수들의 집합
//     재사용 가능한 코드 조각
//     모듈을 조합해서 프로그램을 만들 수 있음
    
//     장점:
//         코드 추상화
//         코드 캡슐화
//         코드 재사용
//         의존성 관리 

// const a ="a 변수";
// const b ="b 변수";

// function test(){
//     console.log('test')
// }

// module.exports = {   //모듈로서 쓰기위해 a,b,test를 내보내겠다
//     a,
//     b,
//     test
// }

const a =1;
const b =3;

module.exports ={
    a,
    b
}

//module.exports로 내보낸 것은 require로 받는 것이랑 같은 형태 
// 따라서 {a,b}로 내보내면, {a,b}로 받게 되고, 
// 따라서 현재 a,b로 내보낸 것이 2파일의 num으로 받아지게 된다.

// 2번파일에서 module.exports로 내보낸 것이 add 함수 이기 때문에 3파일에서 result로 가지고 오게 됨

// 만약 2파일에서 module.exports ={add}라면 중괄화 안에 있기 때문에 3파일에서 result.value로 가져와야 한다.