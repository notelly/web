//달력만들기 calendar.js

function makeCalendar(month, startDay, lastDate){ //startDay 1일의 위치를 정하기 위해, lastDate 마지막날이 며칠인지.
    let str = "<table border=1>";
    str += "<caption>" + month + "월" + "</caption>"
    let days =["일", "월", "화", "수", "목", "금", "토"];
    //thead에 요일을 찍어주기 위함
    str += "<thead><tr>";
    for(let day of days){
        str += "<th>" + day+"요일" + "</th>"
    }
    str += "</tr></thead>";
    //tbody의 날짜
    str += "<tbody><tr>";
    for(let cnt = 1; cnt <startDay; cnt++){//startDay 만큼 빈 td를 만들어 주면된다.
        str += "<td></td>"
    }
    for(let day = 1; day <= lastDate; day++) {
        str += "<td>" + day + "</td>";
        if ((startDay+day-1) % 7 == 0){ // 7로 나눴을때 나머지가 0 = 7의 배수 왜 -1을 하지?
            str += "</tr><tr>"
        }
    }
    str += "</tr></tbody></table>"
    document.write(str);

}
function getFirstDay(month){
    switch(month){    //좀더 직관적으로 볼 수 있는  switch 조건문
        case 1: return 7;
        case 2: return 3;
        case 3: return 3;
        case 4: return 6;
        case 5: return 1;
        case 6: return 4;
        case 7: return 6;
        case 8: return 2;
        case 9: return 5;
        case 10: return 7;
        case 11: return 3;
        case 12: return 5;
    }
}
//     if(month == 11){
//         return 3;
//     }else if(month == 12){
//         return 5;
//     }else if (month == 10){
//         return 7;
//     }
// }

function getlastDate(month){
    switch(month){
        case 1: return 31;
        case 2: return 28;
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
    }
}
let month = 9;
makeCalendar(month, getFirstDay(month), getlastDate(month));