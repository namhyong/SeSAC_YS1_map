// 미들웨어: 클라이언트와 서버가 요청과 응답을 할 때 중간에서 거쳐가는 함수
//     사전에 함수로 검사를 진행 할 수 있음
//     클라이언트의 요청(request)과,서버의 응답(response)을 모두 가지고 있음
//     미들웨어에는 next도 있음:미들웨어 동작이 끝났을 때 원래 가려고 했던 서버로직으로 이동하는 함수