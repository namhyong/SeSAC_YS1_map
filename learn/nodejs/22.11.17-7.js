// url 모듈

const url =require('url');

// console.log(url);
// // console.log(url.URL);
// console.log(url.parse);

// var obj = url.parse('https://sesac.seoul.kr/common/greeting.do?n_media=27758&n_query=SESAC&n_rank=1&n_ad_group=grp-a001-04-000000023843108&n_ad=nad-a001-04-000000178059628&n_keyword_id=nkw-a001-04-000004094617766&n_keyword=SESAC&n_campaign_type=4&n_contract=tct-a001-04-000000000603379&n_ad_group_type=5')
// console.log(obj) //obj 객체가 url클래스 객체라는 것을 알려주고 있음


// console.log(url.format(obj));

// console.log(obj.protocol);

// var string ="http://localhost?name=sesac&name=코딩온&age=10"

// var string = new url.URL('http://localhost?name=sesac&name=코딩온&age=10')
// console.log(string.searchParams.getAll('name')) //?뒤에 것을 나눠 놓은 name을 가져옴 sesac,코딩온을 가져옴

// console.log(string.searchParams.keys()); // =앞에 있는 키를 전부 가져옴
// console.log(string.searchParams.append('age','20')); //추가
// console.log(string.searchParams.keys('age')); // age를 가져옴
// console.log(string.searchParams.has('age')); //가지고 있는지 확인

var string = new url.URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac')
console.log(string.searchParams.keys());
console.log(string.searchParams.values());
string.searchParams.delete('sm');
console.log(string.searchParams.keys()); 




