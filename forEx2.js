// forEx2.js
// 둘다 다시 볼것.
let str = "<table border = 1><tr>";
for (let j = 1; j <= 9; j++){
    for(let i= 2; i <= 4; i++){
        str += `<td> ${i} </td><td> * </td><td> ${j} </td><td> = </td><td> ${i*j} </td>`;
    }
    str += "</tr><tr>";
}
str += "</tr></table>"
document.write(str);

// 
let cnt = 1;
str = "<table border = 1>";
for (let j = 1; j <= 5; j++){
    str += "<tr>";
    for (let i = 1; i <= 5; i++){
        if (i <= j){ // i와 j의 값을 비교해서 보여줄 경우와 안보일 경우를 처리.
            str += `<td>${cnt}</td>`;
        }else {
            str +="<td></td>";

        }
        cnt++;
    }
    str +="</tr>";
}
str += "</tr></table>";

document.write(str);