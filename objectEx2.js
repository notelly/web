// objectEx2.js

let students = []; //선언 할 때 const 상수 let 변수
const std1 = {
    std_no: '1-001', //stdNo 두단어의 조합으로 어떤 변수를 만들고 싶을때  두단어의 조합이라는 의미로 _(언더바) 구분.
    std_name: "이가영",
    std_math: 80,
    std_eng: 85
}
const std2 = {
    std_no: '1-002',
    std_name: "이면지",
    std_math: 70,
    std_eng: 75
}
const std3 = {
    std_no: '1-003',
    std_name: "이음표",
    std_math: 90,
    std_eng: 70
}
// 배열
students[0] = std1;
students.push(std2); // Array.push(값) : 배열의 마지막 위치에 추가하겠습니다.
students.push(std3);
//console.log(students.length); 결과: 3

function getStudent(name) { //name 매개변수  똑같은거 한건만 객체타입
    //이름을 매개값으로 배열(students)의 요소에서 학생의 이름이 매개값이랑 같은 학생을 반환한다.(return)
    //students 반복. 그 값 중에서 name 속성의 요소가 있으면 그 것의 4가지 정보를 다 반환하는 걸 만들기
    for (let std of students){ //students에 들어있는 객체만큼 반복하겠습니다.
        if (std.std_name == name){ //std에는 넘버 이름 수학성적...etc
            return std; // 객체 전체를 다 반환하고 싶습니다. 함수에서 return 반환하겠다 or 끝난다. 마지막이다를 표현하기도 함.
            //이후에 더이상 적어도 적용되지 않는다.
            }
        }
    }


let result = getStudent("이가영");
console.log(result);
