// js/function.js
// {name: "", age: "", showInfo: "기능"}

function sayHello(name){   //함수 기능을 수행하겠습니다. 함수 정의
    console.log("Hello, " + name + "!!"); //name 매개변수 
}
// 홍길동 = 매개값
sayHello("이가영"); //매개값을 대입해서 함수를 호출 함수 호출(call) 호출을 해줘야 실행이 된다. >>Hello World 가 뜬다. 매개변수 입력후에는 이름이 나온다.



function sayHi(msg, name1){
    console.log(msg +"," + name1 + "!!");
}

sayHi("안녕하세요", "이가영");
sayHi("안녕하세요", "이가영");


function sum(num1, num2) { //함수 정의
    let result = num1 + num2;
    return result; //함수를 호출한 영역으로 결과값을 반환(return).
}

let result = sum(10, 20);
//왜 반환을 하는가 다시 그 값을 사용해서 연산이 가능 ex)
console.log("결과: " + sum(result, 30));

//return이 없으면 함수의 결과값에 값이 없다. return이 있으면 결과값을 반환해준다. 그러면 새로운 연산이 가능하다.

let member = {
    memberId: "user1", 
    memberName: "사용자1",
    memberAddr: "대구 중구"
}

function showInfo(obj){ //obj 함수 안에서 사용되는 변수
    console.log("회원아이디: " + obj.memberId + ", 회원이름: " +obj.memberName + ", 주소: " + obj.memberAddr);
}

showInfo(member);
showInfo({
    memberId: "user1", 
    memberName: "사용자1",
    memberAddr: "대구 중구"
});
//두개 결과는 동일하다.

function makeList(obj) { // makeList 함수를 매개값도 가지고 기능을 수행하면 반환해주는 함수로 만들었다.
    // <ul><li>...</li></ul> 값이 들어오면 리스트를 만들어주는 태그로 만들기
    let li = "<li>";
    li += "id: " + obj.memberId;  //+= 는 값에 계속 누적시킨다.
    li += " name: " + obj.memberName;
    li += " addr: " + obj.memberAddr;
    li += "</li>";
    return li;
}

let memberAry = [{memberId: "user1", memberName:"사용자1", memberAddr: "대구 중구 100"},
                 {memberId: "user2", memberName:"사용자2", memberAddr: "대구 중구 200"},
                 {memberId: "user3", memberName:"사용자3", memberAddr: "대구 중구 300"}
                ]
//document.write(str);
let str = "<ul>";
for(let i=0; i<memberAry.length; i++){
    str += makeList(memberAry[i]); 
}
str += "</ul>"
document.write(str);