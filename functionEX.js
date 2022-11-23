// functionEx.js
let memberAry = [{memberId: "user1", memberName:"사용자1", memberAddr: "대구 중구 100"},
                 {memberId: "user2", memberName:"사용자2", memberAddr: "대구 중구 200"},
                 {memberId: "user3", memberName:"사용자3", memberAddr: "대구 중구 300"}
                ]

// 자바스크립트 문자열: "", '', `` >>백틱? 엄청 편하다
function makeTr(memberObj) { //obj는 변수라 마음것 적어도 되긴 함
    //tr 태그를 만들어서 반환. td가 있어야한다.
    let tr = "<tr>";
    tr += "<td>" + memberObj.memberId + "</td>"; // obj 대신에 memberObj 이 들어간다. 설정한 변수를 써주기
    tr += "<td>" + memberObj.memberName + "</td>";
    tr += "<td>" + memberObj.memberAddr + "</td>";
    tr += "</tr>";
    return tr;
}

function makeHead() {
    let titles =['회원아이디', '회원이름', '회원주소'];
    let tr = "<tr>";
    // tr => th, th, th : 회원 아이디, 회원 이름, 회원주소
    for (let j = 0; j < titles.length; j++){
        tr += "<th>" + titles[j] + "</th>";
    }
    tr += '</tr>';
    return tr;
}

let str = "<table>";
str += makeHead();
for(let i = 0; i < memberAry.length; i++){
    str += makeTr(memberAry[i]); //why? 생각해보기 memberAry {memberId, memberName, memberAdd}첫번째 값 두번째값 ... 을 인덱스 값으로 가지고 올 것임
}
str +="</table>" //닫는 태그가 반드시 있어줘야한다.
document.write(str);



//`` 이거를 사용해보자

// function makeTr(obj) { //obj는 변수라 마음것 적어도 되긴 함
//     let tr = `<tr><td>${obj.memberId}</td><td>${obj.memberName}</td><td>${obj.memberAddr}</td>`; // 더하기 연산자를 안쓰고 바로 쓸 수 있음
//     return tr;
// }

// let cap = `<caption>쉽게 만들기</caption>`
// let str1 = "<table>";
// for(let i = 0; i < memberAry.length; i++){
//     str1 += makeTr(memberAry[i]);
// }
// str1 +="</table>"
// document.write(str1);