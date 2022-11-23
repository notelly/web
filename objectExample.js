// web/js/objectExample.js

const objArray = [{  //objects 안에 기능을 추가할 수 있다.
    name: "홍길동",
    age: 20
    
},{
    name: "김민수",
    age: 22
},{
    name: "박시혁",
    age: 25
}];

// for(let i = 0; i < objArray.length; i++){
//     console.log("이름: "+ objArray[i].name + ", 나이: " + objArray[i]["age"]); //age 에 쉼표 필수 없으면 age는 변수가 된다.
//     document.write("<p>" + "이름: " + objArray[i].name + ", 나이: " + objArray[i]["age"] + '</p>'); //str은 뭐지?
// }

let str = "<ul>"
for(let i = 0; i < objArray.length; i++){
    str += "<li>" + "이름: "+ objArray[i].name + ", 나이: " + objArray[i]["age"] + "</li>"
    console.log("이름: "+ objArray[i].name + ", 나이: " + objArray[i]["age"]); //age 에 쉼표 필수 없으면 age는 변수가 된다.
}
str += "</ul>";
document.write(str);