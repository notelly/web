// forEx.js

// 1~25까지 순차적으로 들어간 5*5 표 
 let str ="<table border = 1>";
    str += "<tr>";
    for (let i = 1; i <= 25; i++){
        str += "<td>" + i + "</td>";
        if (i % 5 == 0){
            str += "</tr><tr>";
        }
    }
str += "</tr></table>"
document.write(str);

// 1~25까지 세로로 들어간 5*5 표
let str1 ="<table border = 1><tr>";
for (let i = 1; i <= 5; i++){
    for(let j = 0; j <= 4; j++){
        str1 += "<td>" + (i+j*5) + "</td>"
    if ((j+1) % 5 == 0){
        str1 += "</tr><tr>";
        }
    }
}
str1 += "</tr></table>"
document.write(str1);

//교수님 답안. 1안
let pStr1 ="<table border = 1><tr>";
let cnt = 1;
let num = 1;
for (let i =1; i <=25; i++){
    pStr1 += "<td>" + num + "</td>";
    num = num +5;
    if (i % 5 == 0){
        num = ++cnt; // ++cnt 1을 먼저 증가시킨 다음에 대입하겠다. cnt++ 대입 먼저 시키고 1을 증가시키겠다.
        pStr1 += "</tr><tr>";
    }
}
pStr1 += "</tr></table>"
document.write(pStr1);
//2안 for 두개.
let pStr2 ="<table border = 1><tr>";
for(let j = 1; j <=5; j++){
    for(let i = j; i <= 25; i+=5){
        pStr2 += "<td>"+ i +"</td>";
    }
    pStr2 += "</tr><tr>";
}
pStr2 += "</tr></table>";
document.write(pStr2);
