// whileloop.js while 반복문


let i = 0;
while(i < 10) {  // for를 while로 보여주기 위한 것이지 보통 잘 안씀

    console.log(i);
    i++;
}


let isOK = true;
while (isOK) {  //그 조건이 될때까지는 반복문이 계속 돌아간다.
    let randomVal = parseInt(Math.random()*10);
    console.log(randomVal);
    if(randomVal % 3 == 0) // 나머지가 짝수가 되면
        break; // 반복문을 종료.
}


let sum = 0;
while(isOK) {
    sum += parseInt(Math.random()*10);
    console.log(sum);
    if(sum > 100){ //누적값이 100을 넘어서면
        break;     //종료
    }
}

console.clear(); //위에까지 출력했던 것을 지우고 다시 출력하겠다.


// while(true) {
//     let msg = prompt("문자를입력하세요: ");
//     console.log(msg);
//     if(msg == "stop"){ //사용자가 stop이라는 문자를 입력하면
//         break;         //종료
//     }
// }

// Math.random => 0~5 까지의 임의의 수를 생성. => randomval;
// prompt("숫자를 입력: ") =
// prompt와 randomval의 값이 같으면 종료
// randomval = 0;
// number = 0;
// while (true){ //틀렸다는 메세지 없이 맞을 때까지
//     let randomval = parseInt(Math.random()*5);
//     let number = prompt("0~5 사이의 숫자를 입력하세요: ");
//     console.log(number);
//     console.log(randomval);
//     if(number == randomval){
//         break;
//     }
// }



// Math.random => 0~100 까지의 임의의 수를 생성. => randomval;
// prompt("숫자를 입력: ") =>inputval;
// 입력한 값이 임의의 값 큽니다. 를 띄우고 값을 맞춰가도록 하는 것 만들기
let randomval1 = parseInt(Math.random()*100);
    //console.log(randomval1); 돌아가는 지 확인 용
    while (true){
        let inputval = prompt ("0~100 사이의 숫자를 입력하세요: ");
        if(randomval1 > inputval){
            console.log("입력한 값이 임의의 값보다 작습니다.");
        }else if (randomval1 < inputval){
            console.log("입력한 값이 임의의 값보다 큽니다.");
        }else {
            break;
        }
    }
console.log(randomval1);//마지막에 얼마인지 출력 안됨 되게 하기




console.log('end for while')