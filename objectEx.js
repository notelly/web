//objectEx.js
const members = [
    {memId: "user1", memName: "이가영", memPoint: 88},
    {memId: "user2", memName: "이면지", memPoint: 55},
    {memId: "user3", memName: "이음표", memPoint: 100}
];

//for of 데이타 건수만큼 만들어주는것 => tr, for in => td를 위한 용도 가지고 table만들기
//makeHead() => 타이틀(아이디, 이름, 점수)
//makeBody() => 데이터()
function makeHead(){
    let thead = "<thead><tr><th>아이디</th><th>이름</th><th>포인트</th></tr></thead>";
    return thead;
}
function makeBody(){
    let tbody = "<tbody>";
    // 데이타 건수만큼 반복하면서 들어오는 tr이 있어야 한다.
    for(let member of members){ //데이터 건수 반복. members 에 있는 값을 반복하면서 member에 가지고 오겠다
        tbody += "<tr>"
        for(let prop in member){
            tbody += "<td>" + member[prop] + "</td>";
        }
        tbody += "</  tr>"
    }
    tbody += "</tbody>";
    return tbody;
}




let str ="<table>";
console.log("1 => ", str)
str += makeHead(); // <thead>.....</thead>
console.log("2 => ", str)
str += makeBody(); // <tbody>.....</tbody>
console.log("3 => ", str)
str +="</table>"
console.log("4 => ", str)
document.write(str);

console.log(document);