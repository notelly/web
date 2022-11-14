//변수 선언.
console.log("Hello, World"); //콘솔탬에 출력.
let name; //변수선언.
name = "이가영"; //변수에 값을 할당. ""문자열
console.log(name); //name에 있는 값을 표현해준다.
let age =20; //넘버타입 ""사용X
console.log("이름은 " + name + "이고, 예전 나이는" + age + "입니다.")

let marriage = false; //T or F 값을 담는  boolean 변수
console.log("결혼여부는 " + marriage)

// 상수선언. 상수는 한번 할당이 되면 값을 변경할 수 없음
const gender = "Women"; //두번선언하면 에러남
// gender = "Women"

console.log(typeof name); // name의 타입/리트럴 출력 현재 string
name = true; // 선언한 내용을 바꿀 수 없다?
console.log(typeof name); //지금은 boolean

// string name = "홍길동"
// int age = 20;  자바는 이렇게 하는데 타입 변경이 가능하다 유동적인

//변수 : name1: 이름, height: 키, weight: 몸무게.
//이름은 ???이고, 키는 ??.?이고, 몸무게는 ??,? 입니다.
name1 = "이가영";
height = 170.8;
weight = 30.9;
console.log("이름은 " + name1 +" 이고, 키는 " + height +"cm 이고, 몸무게는 " + weight + "kg 입니다." );

//조건식.
let averageHeight = 165;
if (height > averageHeight){
    console.log(name1+"의 키가 " + averageHeight + "cm 보다 큽니다."); //변수에 ""쓰면 걍 문자 되는거임.
}
if(height>170) { // false. 출력X
    console.log("키가 170보다 큽니다.");
}
if(height>150) { // true.
    console.log("키가 150보다 큽니다.");
}


//사칙연산식(+, -, *, /)
let weight1 = 66.3;
let weight2 = 60.4;
let weight3 = 64.2;
let averageWeight = (weight1 + weight2 + weight3)/3;
console.log(averageWeight.toFixed(2)); //소수점 둘째자리까지만 적겠다.
// 홍길동의 몸무게는 평균 63.6보다 적습니다.
if(averageWeight > weight) {
console.log(name1 + "의 몸무게는 평균" + averageWeight.toFixed(2) + "보다 적습니다.");
}