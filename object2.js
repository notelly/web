// objects2.js
//객체 : 복잡한 형태의 데이터 구조
// {name: "홍길동", age: 20, showInfoL function() {...}}
// 계속 만들고 싶으면 속성을 계속 부여해줘야함

// 학생번호, 학생이름, 전화번호, 혈액형, 점수
class Student {  //class 선언시 대문자로 선언 class 값이 아니라 값의 틀을 규정짓는 것
    constructor(stdNo, stdName, phone, bloodType, score){ // constructor(생성자) 안에다가 속성선언 this(class 에서는 this로 속성들을 정의한다.)랑 단짝
        this.stdNo = stdNo; //생성자의 첫번째 매개값에서 가지고 오겠습니다.
        this.stdName = stdName; //두번째 매개값에서 가지고 오겠습니다.
        this.phone = phone;
        this.bloodType = bloodType;
        this.score = score;
    }
    //class 에서는 함수 function 필요없이 그냥 아래처럼 적으면 된다.
    showInfo(){
        return `학번은 ${this.stdNo}, 이름은 ${this.stdName} 입니다.`;
    }
    showBloodType(){
        return `${this.stdName}의 혈액형은 ${this.bloodType} 입니다.`
    }
    setScore(score) {
        this.score = score;
    }
    getScore() {
        return `${this.stdName}의 점수는 ${this.score} 입니다.`;
    }
    setPhone(phone){ //네이밍 룰도 존재(통상적) 값을 지정하고 싶을때: set.
        this.phone = phone; 
    }  
}

//이런식으로 객체를 만든다. 속성이름 반복할 필요없이 값만 넣으면 된다.
let std1 = new Student('1-001', '이가영', '111-1111', 'O형', 80); //student 라는 00에 값을 넣어줘야하고 
let std2 = new Student('1-002', '이음표', '222-2222', 'B형', 100);
let std3 = new Student('1-003', '이일리', '333-3333', 'AB형', 75);
let std4 = new Student('1-004', '이면지', '444-4444', 'A형', 90);

//값을 바꾸고 싶을때
std1.setScore(82);
console.log(std1.getScore());

console.log(std1.showBloodType());

let students = []; // 배열 객체입니다. new Array(); 보다 나음
students.push(std1);
students.push(std2);
students.push(std3);
students.push(std4);

for(let student of students){
    console.log(student.showInfo()); //이건 메소드 괄호가 붙어야 실행됨
}

// 삼각형을 정의 하는 클래스.
class Triangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea() { //넓이 구하는 함수
        return this.width * this.height / 2;
    }
    //밑변 수정
    setWidth(width){
        this.width = width;
    }
    // 높이 수정
    setHeight(height){
        this.height = height;
    }
}

let trian1 = new Triangle(6, 4);
trian1.setWidth(12);
trian1.setHeight(11.
    );
console.log(`삼각형의 너비는 ${trian1.getArea()}`)

