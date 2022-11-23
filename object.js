// object.js
// js에서 object => {name:"홍길동", age: 20, showInfo: function() {...}}
//object의 속성에 function이 정의 되어 있으면 메소드라고 부른다.
// 객체: 속성(필드: 값이 대입되어 있다.), 메소드(기능)

const member = {
    memberId: "user1",
    memberName: "홍길동",
    memberInfo: function() { //값이 아니라 기능이 정의 되어짐
        return `아이디: ${this.memberId} 이고 이름은 ${this.memberName} 이다.`;
    }
}

console.log(member.memberId);
console.log(member["memberName"]); //이렇게도 작성 가능
console.log(member.memberInfo()); //함수호출 메소드호출.

// 객체의 속성을 반복하면서 반환 for...in for over랑 for in 구별하기
// member.memberId, member["memberName"]
for(let prop in member) {
    // console.log(prop);
    console.log(prop, member [prop]);
    if(prop == 'memberInfo'){
        console.log(member [prop]());
    }
}
//배열안에 객체를 여러개 넣었다.

//정리
//for..of..: 배열 반복문. for..in.. 객체의 반복문.
const members = [
    {memId: "user1", memName: "이가영", memPoint: 88},
    {memId: "user2", memName: "이면지", memPoint: 55},
    {memId: "user3", memName: "이음표", memPoint: 100}
];
//console.log(members)
// 확장 for..of
for (let member of members){ //데이터 건수 반복. members 에 있는 값을 반복하면서 member에 가지고 오겠다.
    for(let prop in member){ //속성의 갯수 만큼 반복. member 각각의 속성을 prop에 부여
        console.log(`속성: ${prop}, 값: ${member[prop]}`); //출력
    }
    console.log(`======================================`) //어디서 끊기는지 보여줄려고
}

console.clear();

for (let member of members){
    if (member.memPoint >80){
        for(let prop in member){
            if(prop == 'memName'){
            console.log(`속성: ${prop}, 값: ${member[prop]}`);
            }
        }
        console.log(`======================================`)
    }
}

