// objectEx3.js

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
    std_math: 100,
    std_eng: 70
}

students[0] = std1;
students.push(std2);
students.push(std3);
students.push({
    std_no: '1-004',
    std_name: "이일리",
    std_math: 95,
    std_eng: 84
})

//1건 이상을 출력 
function getStudents(mathScore){ //매개값으로 받는 mathScore을 기준으로 높은 값은 다 반환
    //새로운 배열을 선언해 주어야한다.
    let overMath = []; //배열선언 push를 쓰면 배열에 새로운 요소를 계속 추가해준다.
        for(let std of students){
            if(std.std_math > mathScore){
                overMath.push(std);
            }
        }
        return overMath;
}


let result = getStudents(70);
console.log(result);

//영어점수와 수학점수의 합계
function getStudents(totalScore){
    let overtotal = [];
    for (let std of students){
        if(std.std_math + std.std_eng > totalScore){
            overtotal.push(std);
        }
    }
    return overtotal;
}

result = getStudents(150);
console.log(result);


//점수의 영어점수가 제일 큰 사람만 반환. 왜 점수만 나오지 >> 잴 큰 점수가 담겨있는 temp 를 뽑아 냈기 때문에 
function getMaxStudent(){
    let temp = 0;
    let student = {};
    for(let std of students){
        if(std.std_eng > temp){
            temp = std.std_eng; //temp는 점수를 비교하기 위한 용도 가장 큰값을 담고 있다.
            student =std;  //>> 비교시 큰값의 전체 정보를 넣어준다. push X 하나만 들어가야하기 때문
        }
    }
    return student; //다시 돌아가기
}
result = getMaxStudent();
console.log(result);

//점수의 합계가 가장 큰 사람
function getMaxtotal(){
    let total = 0;
    let stud ={};
    for(let std of students){
        if(std.std_eng + std.std_math > total){
            total = std.std_eng + std.std_math
            stud = std;
        }
    }
    return stud;
}
result = getMaxtotal();
console.log(result);
