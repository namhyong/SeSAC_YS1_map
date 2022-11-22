// npm: 노드 패키지를 관리해주는 틀
// 명령어    
//     npm init: package.json 셍성
//                 package.json: 프로젝트에 대한 설명을 적는 것
//     npm init --yes: package.json을 기본값으로 생성
//     npm install 패키지 이름(express,jason): 프로젝트에서 사용할 패키지를 설치하는 명령어

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
