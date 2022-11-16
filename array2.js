//array2.js
//배열과 관련된 메소드들
let names = ["윤성현", "김준혁", "서승민", "이정용"];
names.length;
names.push("김기훈"); //매개값을 내가 정해서 넣었다. 김기훈
//가지고온 데이터 건수만큼 반복하겠습니다. forEach 메소드//forOver도 사용.
names.forEach(function(val, idx, ary) { //for 반복문. function(매개값: 이미 정해져 있음.)<기능//매개함수>익명함수 forEach 배열에 관련된 메소드 => 배열의 요소들로 반복문을 실행하게 만든다.
    // console.log("for 반복문") //배열에 들어가있는 개수 만큼 반복하는데 for 반복문을 5번 출력함
    console.log(ary); //a-val 는 각각의 값(여기선 "이름") b-idx 는 인덱스 값(0~5) c-ary는 names 배열 그 자체를 프린트 한다. 매개함수의 매개값은 이미 정해져 있다.
}); //for 반복문

