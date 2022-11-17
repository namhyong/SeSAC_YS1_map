// node 내장객체

// global:
//     노드의 전역 객체
//     모든 파일에서 접근 가능
//     생략하여 사용 가능
    
console.log(global);
global.console.log(global.console); //글로벌 객체안의 콘솔객체 실행

// 콘솔로그:
//     브라우저에서는 디버깅 콘솔에 접근 할 수 있는 객체로 브라우저마다 미묘한 차이가 있으며, global객체 안에 존재하고 있는 객체이다.console
    
    let obj ={
        out:{
            in:{
                key:'value'
            }
        }
    };

    // console 내장객체
    console.log(obj)
    console.log(obj["out"])   
    console.time('시간') //time과 time end의 변수는 같아야 하며, time부터 timeend까지의 시간을 나타냄
    console.error('error') //에러를 출력한다
    console.timeEnd('시간')
    console.table([{name:'abc'},{name:'def'}]) //콘솔을 표형태로 나타냄
    console.dir(obj,{color:true,depth:1}) //객체의 구조를 보여줌 obj의 객체 구조를 보여줄건데 색깔이 다르게 나오고 1단계 까지 볼것이다.
    console.dir(obj,{color:true,depth:2}) //객체의 구조를 보여줌 obj의 객체 구조를 보여줄건데 색깔이 다르게 나오고 2단계 까지 볼것이다.
    console.trace("Error") //console.error가 어디서 났는지 알려줌


