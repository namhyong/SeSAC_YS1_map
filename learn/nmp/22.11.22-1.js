// npm: 노드 패키지를 관리해주는 틀
// 명령어    
//     npm init: package.json 셍성
//                 package.json: 프로젝트에 대한 설명을 적는 것
//     npm init --yes: package.json을 기본값으로 생성
//     npm install 패키지 이름(express,jason): 프로젝트에서 사용할 패키지를 설치하는 명령어

const { application } = require("express")

// 터미널 이전폴더로 이덩 cd ../
// npm init을 터미널에 입력한 후 엔터 계속하면 package.json이 생김
// npm init --yes 터미널에 입력 하면 모든 값이 기본값으로 생성

//npm install express: express 모듈 설치
// package.jason에서 depenencies와 express버전을 확인 가능
//.gitingnore에 /node_modules 와 package-lock.json을 추가 하여 깃에 올라가지 않게 한다.
// 앞에 **/를 추가 하게 되면 어디위치에 있든 해당 파일을 무시하겠다


// express: 
//     웹 서버를 생성하는 것과 관련된 기능을 담당하는 프레임워크
//     웹 애플리케이션을 만들기 위한 각종 메소드와 미들웨어 등이 내장
//     httP 모듈의 낮은 코드 가독성과 낮은 확장성을 해결하기 위해 만들어짐


// express(): express 모듈이 export 하는 최상위 함수로, express application을 만듦
// app객체: express()함수를 호출함으로써 만들어진 express application
// app 객체의 method: http 요청을 각 요청에 맞는 경로롤 전송하는 메소드(라우팅)


//express로 서버를 만들면 static폴더를 인식하게 해줘야 함

// EJS 템플릿: html과 똑같이 태그를 작성하면 된다. javascript코드를 html태그에 내장시킬 수 있음
    // script태그를 쓰지 않고도 js를 쓸 수 있음
    // npm install ejs :package.json이 있는 곳에서 설치를 해야함

    //ejs 설치하기
    //npm install ejs 
    



// form 전송: 서버가 클라이언트가 넘겨주는 정보를 받는 것
// app.use(express.urlencoded({extended:true}))
// app.use(express.json())
// 폼 전송을 위해 위 코드 두개를 적어야 한다.