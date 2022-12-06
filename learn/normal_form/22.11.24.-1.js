// 유효성 검사
//     form 요소들에 정보가 올바르게 입력되었는지 검사 하는 것
//     데이터가 불필요하게 움직이는 것을 막을 수 있음
// 검사방법
//     html5를 통한 검사
//         required

//     js코드를 통한 검사
//         oninput


// nodemon: 서버측 코드가 변경될 때마다 자동으로 node 재실행

// npm install nodemon -g nodemon:전역설치


// 동기 http 톹신: 한번에 하나만 처리->페이지를 아예 이동해 서버가 데이터 처리
// 비동기 http 통신: 서버에 데이터를 보내고 응답을 기다리는 동안 다른 처리 가능
//                  폼의 데이터를 서버와 dynamic하게 송수신 하는 것
//                  페이지 이동을 하지 않고 통신 가능
// dynamic:
//     웹 문서가 정적으로 멈춰있는 것이 아니라 일부 내용이  실시간으로 변경되는 것

// 비동기 http 통신 방법:
//     1.Ajax
//         js를 이용해 클라이언트와 서버간에 데이터를 주고 받는 비동기 http통신
//         단점:promise 기반이 아니다. 따라서 다른 것과 호환을 하기 어렵다.
//     2.Axios
//         return이 promise 객체로 온다.
//         장점: 브라우저 호환성이 뛰어나다.
//         단점: 설치를 해야한다.

//     3.Fetch
//         가장 최신 라이브러리
//         장점:
//         promise 기반
//         설치를 하지않아도 사용 가능
//         단점:
//             호환이 되지 않는 브라우저가 있음
//             timeout기능이 없음(언제까지 반응이 않오면 어떠한 동작을 하는 기능)

// json:
//     dictionary형태로: key,value로 되어 있어 데이터를 나타낼 수 있다.
//                      서버와 클라이언트를 왔다갔다 할때 json으로 하자라는 규약이 있기 때문에 사용

<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    </head>
    <body>

    </body>
</html>
