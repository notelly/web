// forloop.js 반복문 for 

//     초기값, 조건식, 증감치 (i = i+1 와 i += 1 와 i++은 동일)
for (let i = 0; i < 5; i++) { //증감치가 꼭 여기 있을 필요는 없다 {} 안에 들어가도 됨
    console.log(i);
}

for (let i = 1; i <= 10;){
    console.log(i);
    i += 2;      // i= 3, 5, 7, 9
}

for (let i = 10; i >= 0;){
    console.log(i);
    i -= 2;      // i= 10, 8, 6, 4, 2, 0
}

// for : 1~10
for (let i = 1; i <=10; i++){
    console.log(i);
}

// for : 2,4,6,8,10
for (let i = 2; i <= 10; i = i+2){
    console.log(i);
}

// for i=1 i++ //2,4,6,8,10
let add = 0;
for (let i = 1; i <= 5; i++){  //i=i++적으면 안됨...무한루프걸림
    if(i <= 5){
        add = 2*i;
        console.log(add);
    }
} //add 전에 새로운 변수에다 더해줘야 원래 값에 더해지지 않음 2 4 8 로 출력됨
for (let i = 1; i <= 5; i++){
    console.log(2*i);
}

//교수님 방법
for (let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i); //2,4,6,8,10
    }
}
for (let i = 1; i <= 10; i++){
    if(i % 2 == 1){
        console.log(i); //1,3,5,7,9
    }
} //홀수 응용

let sum = 0;
for (let i = 1; i<= 10; i++) {
    sum +=1;  // 1씩 증가
    console.log(sum);
}

let sum1 = 0;
for (let i = 1; i<= 10; i++) {  // i는 변하는 값
    sum += i;
}
console.log(sum1);


let sum2 = 0;
for (let i = 1; i <= 10; i++){
    if(i % 2 == 0){
        sum += i;
    }
}
console.log(sum2); // 짝수합: 30 홀수합:25

//구구단 3단 출력
for (let num = 1; num <= 9; num++){
    console.log("3 *" + num + " = " + ( 3 * num));
}

// 구구단 2단~9단 반복문을 두번 써야함
for (let k = 2; k <= 9; k++){
    let dan = k;
    for (let num = 1; num <= 9; num++){
    console.log(dan + " * " + num + " = " + ( dan * num));
}
}

document.write('<table border=1>'); // 값을 많이 보여줘야할때 표형식으로 보여주는 것이 좋다.
for (let k = 5; k <= 5; k++){
    let dan = k;
    for (let num = 1; num <= 9; num++){
        document.write('<tr>')
        console.log(dan + " * " + num + " = " + ( dan * num));
        document.write('<td>'+ dan+'</td><td>*</td><td>'+num+'</td><td>=</td><td>'+(dan*num)+'</td>');
        document.write('</tr>')
    }
}
console.log('end of for');



let fruits = [{fname:"Apple", price: 1000},       // index :0
              {fname: "Banana", price: 1500},     // index :1
              {fname: "Cherry", price: 2000},     // index :2
              {fname: "Mango", price: 1700},      // index :3
              {fname: "Watermelon", price: 1300}, // index :4
              {fname: "Blueberry", price: 2200}]  // index :5

document.write('<table>')
document.write('<thead><tr><th>과일</th><th>가격</th></tr></thead>');
document.write('<tbody>')
for (let i = 0; i <= 5; i++ ){
    document.write("<tr><td>" + fruits[i].fname +"</td><td>" + fruits[i].price + "</td></tr>");
}
document.write('</tbody></table>')

//교수님 답안
document.write('<table>')
document.write('<thead><tr><th>과일</th><th>가격</th></tr></thead>');
sum = 0;
document.write('<tbody>')
for (let i = 0; i <= 5; i++ ){
    document.write("<tr><td>" + fruits[i].fname +"</td><td>" + fruits[i].price + "</td></tr>");
    sum += fruits[i].price;

}
document.write('<tr><td>합계</td><td>' + sum +'</td></tr>');
document.write('</tbody></table>')


// 확장 for.
for(let fruit of fruits) {
    //fruit => {fname:'Apple', price: 1000}
    console.log('과일: ' + fruit.fname +", 가격: "+ fruit.price);
}


