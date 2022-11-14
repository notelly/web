//operator.js 기본적인 사칙연산

//+, -, *, /, %(나머지 연산을 하겠다.)

let num1 = num2 = 10 //변수를 선언하는데 10이라는 값을 num2와 num1으로 선언하겠다.

let result = num1 + num2;
console.log("결과값 " + result);
console.log("결과값 " + num1 + num2); //먼저 문자열이 오면 뒤에 오는 +는 덧셈이 아니라 뒷 문자열이랑 합치겠다는 의미로 받아 들인다.
console.log("결과값 " + (num1 + num2)); //()먼저 계산해주고 그 결과를 '결과값 뒤에 오게 해라
console.log("결과값 " + num1-num2); // 결과값 10이라는 문자열과 -10 할수는 없다. → not a number(NaN)
console.log("결과값 " + (num1-num2));
console.log("10" - num1); //"10" 이것도 문자열, 근데 계산된다. why?바꿀수 없는 거면 계산을 못하지만 숫자타입은 유연하게 변경해서 숫자로 인식 계산해준다.
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 나머지 값 0 몫은 1. %는 나머지값 출력
console.log(num1 % 4);

//if(100 >= 80) // == 같습니까?


Math.random() ; // 0 ~ 1 사이의 임의의 난수를 생성. 0.13276584, 0.1567452
Math.random() * 30; // 0~30 사이의 값 여전히 0.12542354 소숫점
num1 = parseInt(Math.random() * 30); // 정수부분만 쓰겠다. parseInt
console.log(num1);
// num2 → 1 ~50 까지의 임의의 수를 생성해서 할당.
num2 = parseInt(Math.random() * 49 + 1 ); // 내가 한거
console.log(num2)
num3 = parseInt(Math.random() * 50) + 1; //정답 1~50
console.log(num3);
//result = num1 + num2 : 합이 60 이상이면 "60보다 큰 수입니다."출력
let rresult = num1 + num3;
if (rresult >=60){
    console.log("결과는 60보다 큰 수 입니다.");
}


// 누적 연산.
let sum = 0;
sum = sum + num1; // x=x+num1
sum = sum + num1; //
sum += num1; // sum = sum + num1 와 동일함

sum = sum -num1;
sum -= num1; // sum = sum - num1 와 동일함

sum *= num1; // sum = sum * num1 와 동일함
sum /= num1; // sum = sum / num1 와 동일함
sum %= num1; // sum = sum % num1 와 동일함

sum = "";
sum += "<span>Hello </span>"; // "" + "Hello"
sum += "<span>World</span>"; // "" + "Hello" + "World"

console.log(sum);
document.write(sum); // 화면에 출력

let fruits = ["Apple", "Banana", "Cherry" ]
sum = "<ul>"; // ul 값으로 초기화
sum += "<li>" + fruits[0] + "</li>";
sum += "<li>" + fruits[1] + "</li>";
sum += "<li>" + fruits[2] + "</li>";
sum += "</ul>";
document.write(sum);
//tr td 로 만들어보기
sum = "<table>";
sum += "<tr>";
sum += "<td>" + fruits[0] + "</td>";
sum += "</tr>";
sum += "<tr>";
sum += "<td>" + fruits[1] + "</td>";
sum += "</tr>";
sum += "<tr>";
sum += "<td>" + fruits[2] + "</td>";
sum += "</tr>";
sum += "</table>";
document.write(sum); // 복잡

//간단ver
sum = "<table border=1><tbody>"; //tbody 없어도 생성해주기는 함
sum += "<tr><td>" + fruits[0] + "</td></tr>";
sum += "<tr><td>" + fruits[1] + "</td></tr>";
sum += "<tr><td>" + fruits[2] + "</td></tr>";
sum += "</tbody></table>";
document.write(sum); //태그를 만드는데 자바스크립트 버전으로 만들어본거

let fruits2 = [{fname:"Apple", price: 1000},
              {fname: "Banana", price: 1500},
              {fname: "Cherry", price: 2000}]
sum = "<table border=1>";
sum += "<thead><tr><th>" + "fname" + "</th>";
sum += "<th>" + "price" + "</th></tr></thead>";
sum += "<tbody><tr><td>" + fruits2[0].fname + "</td>";
sum += "<td>" + fruits2[0].price + "</td></tr>";
sum += "<tr><td>" + fruits2[1].fname + "</td>";
sum += "<td>" + fruits2[1].price + "</td></tr>";
sum += "<tr><td>" + fruits2[2].fname + "</td>";
sum += "<td>" + fruits2[2].price + "</td></tr>";
sum += "</tbody></table>";
document.write(sum);
