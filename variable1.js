// variable1.js 바로 만들 수 있는데 어캐하지
// 객체(object) = 복잡한 구조의 데이터를 저장하고 싶을 때.
let person1 = {
    name: "홍길동",
    age: 20, //number type
    height: 167.7,
    marriage: false //boolean type
}

console.log(person1.name); // getter 불러오겠다는 의미
person1.name = "hongkildong"; // setter 값을 세팅하겠다.
console.log(person1.age);
console.log(person1["age"]); // 위에꺼를 이렇게도 쓸수 있음 복잡해보이지만 가변적이라 더 좋음
person1["age"] = 22;
console.log(person1["age"]) // 다시 넣으면 바뀜
let field = "height";
console.log(person1[field]);//person1에서 height 값을 가지고 오겠다
field = "marriage";
console.log(person1[field]);

// 여러건의 정보를 (담고 싶을 때) 저장. 배열(Array) []
// 시험점수 평균을 낼때 변수를 다쓰기는 힘들다.  이럴때 배열을 사용
let scoreArray = [90, 80, 85, 70, 88];
console.log(scoreArray[0]); // getter 배열은 눈에 보이지 않은 인덱스 주소값을 가짐 첫번째 값의 주소값이 0이기 때문에 90을 출력하고 싶을 때 적는다.
scoreArray[0] = 95; //setter
console.log(scoreArray[0]);

console.log(scoreArray[2]);

// 배열 + 객체 (함꼐 사용. 이름 점수 이런 느낌)
let 자바스크립트반점수 = [100]; //변수가 한글이 또 가능함 근데 외국인이랑 일할때 불편하기 땜시 영어로 쓰쇼
console.log(자바스크립트반점수[0]);

//학생의 이름, 학생번호, 점수
let stud1 ={
    studName: '이가영',
    studNo: '1-001',
    score: 90
}
let stud2 ={
    studName: '이음표',
    studNo: '1-002',
    score: 93
}
let stud3 ={
    studName: '이면지',
    studNo: '1-003',
    score: 95
}
let stud4 ={
    studName: '이진수',
    studNo: '1-004',
    score: 80
}
let jsClass = [stud1, stud2, stud3];
console.log(jsClass[0]);
console.log(jsClass[0].studName); //이름 속성만 읽고 싶다.
console.log(jsClass[1].score == stud2.score); //값은 true 변수의 값을 통해서 값을 읽어 들임
console.log(jsClass[2]["studNo"]); //기억하기
console.log(jsClass[2]["studNo"] == stud3.studNo);//값은 true
jsClass[3] = stud4; //값 추가

console.log(jsClass.length); //값의 개수
jsClass[4] = {
        studName: '이산수학',
        studNo: '1-005',
        score: 100
}
console.log(jsClass.length); //jsClass의 크기 
// jsClass 점수의 평균을 구하고 싶다.
let avergae = (jsClass[0].score+jsClass[1].score+jsClass[2].score+jsClass[3].score+jsClass[4].score)/jsClass.length;
console.log("우리반의 평균은 " + avergae +"입니다.");
let avergae1 = (jsClass[0]["score"]+jsClass[1]["score"]+jsClass[2]["score"]+jsClass[3]["score"]+jsClass[4]["score"])/jsClass.length;
console.log("우리반의 평균은 " + avergae1 +"입니다.");

//변수 이름으로 했는데 안된 이유: 5번째가 이름이 없다.
let avergae2 = (stud1.score+stud2.score+stud3.score+stud4.score+jsClass[4].score)/jsClass.length;
console.log("우리반의 평균은 " + avergae2  +"입니다.");