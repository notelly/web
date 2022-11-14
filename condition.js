// condition.js 조건문 if 사용

let score = parseInt(Math.random() * 60) + 40; // 40 ~ 100(99.xxxxx) 임의의 정수를 뽑아냄.
console.log(score);
if (score >= 60) {
    console.log("합격");
} else {  // if 그 이외의 값은
    console.log("불합격");
}

if (score >= 60) {
    pass = "합격";
} else {  // if 그 이외의 값은
    pass = "불합격";
}
console.log(pass); // 좀 더 간단하게

pass = (score >= 60) ? "합격" : "불합격"; //넘으면 ? 뒤의 값을 아니면 : 뒤의 값을 출력
console.log(pass); // 더더 간단하게 조건 식

if(score >= 90) {
    pass = "A";
} else{ //90보다 작은 값
    if(score >= 80){
        pass = "B";
    } else{  //80보다 작은 값
        if (score >= 60){
            pass = "C";
        } else{ //70보다 작은 값
            pass ="D";
        }
    }
}
console.log(pass); //코드가 한눈에 안보이기 때문에 1차원적으로 짤것. 밑에가 예시

//if 조건문이 하나이고 조건을 4개의 조건으로 한번만 실행.
if(score >= 90) {
    pass = "A";
} else if (score >= 80){
    pass = "B";
} else if (score >= 60){
    pass = "C";
} else{ //70보다 작은 값
    pass ="D";
}
console.log(pass); //좀더 간단하게

// if 각각을 다 실행 <틀린건 아님 이렇게 짜야할 때도 있다.>
if(score >= 90) {
    pass = "A";
}
if (score >= 80){
    pass = "B"; //만족
}
if (score >= 60){
    pass = "C"; // 또만족
}
if (score < 60){ 
    pass ="D";
}
console.log(pass); //B와 C를 둘다 만족 가장 하위에서 만족하는 값이 나온다.

//if 의 순서도 중요하다
//score = 80;
if(score >= 60) {
    pass = "C";
} else if (score >= 80){
    pass = "B";
} else if (score >= 90){
    pass = "A";
} else{ //70보다 작은 값
    pass = "D";
}
console.log(pass); // 위에서 달성하면 더이상 하지 않는다.

// 95, 85, 75 => A+, B+, C+
if(score >= 95) {
    pass = "A+";
} else if (score >= 90){
    pass = "A";
} else if (score >= 85){
    pass = "B+";
} else if (score >= 80){
    pass = "B";
} else if (score >= 75){
    pass = "C+";
} else if (score >= 70){
    pass = "C";
} else{ //70보다 작은 값
    pass ="D";
}
console.log(pass);
//다른 해답
if(score >= 90) {
    if (score >=95) {
        pass = "A+";
    }else{
        pass = "A";
    }
}else if(score >= 80) {
    if (score >=85) {
        pass = "B+";
    }else{
        pass = "B";
    }
}else if(score >= 70) {
    if (score >=75) {
        pass = "C+";
    }else{
        pass = "C";
    }
}else{
        pass = "D";
    }
console.log(pass);


//과일 값이 1500원 이상인 경우만 표시

let fruits3 = [{fname:"Apple", price: 1000},
              {fname: "Banana", price: 1500},
              {fname: "Cherry", price: 2000}]

sum = "<table border=1>";
sum += "<thead><tr><th>" + "fname" + "</th><th>" + "price" + "</th></tr></thead><tbody>";
if(fruits2[0].price >= 1500){
 sum += "<tr><td>" + fruits2[0].fname + "</td><td>" + fruits2[0].price + "</td></tr>";
}
if(fruits2[1].price >= 1500){
sum += "<tr><td>" + fruits2[1].fname + "</td><td>" + fruits2[1].price + "</td></tr>";
}
if(fruits2[2].price >= 1500){
sum += "<tr><td>" + fruits2[2].fname + "</td><td>" + fruits2[2].price + "</td></tr>";
}
sum += "</tbody></table>";
document.write(sum); //이거 실행 안됨 해결하기

//반복문을 쓰면 위에처럼 안해도 됨
