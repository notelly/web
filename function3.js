// function3.js

let obj = {
    name: "이가영",
    age: 27,
    score: 88
}

function sum(num1=0, num2=0){ //0을 설정해 주지 않으면 숫자가 하나만 들어왔을때 undefine 정의되지 않는다.
    return num1 + num2;
}
console.log(sum(10,20));

function printobj(args ={name: "init", age:0} ){ //초기값을 {}로 주겠다.
    for(let arg in args){ //들어올 값이 객체인 경우 for...in...
        console.log(arg, args[arg]);
    }
}
printobj(obj);

let numAry = [10, 20, 30]
function printAry(ary = []){
    for(let num of ary){
        console.log(num);
    }
}
printAry(numAry);
function sum(a, b){
    return a+b;
}
function minus(a, b){
    return a-b;
}
function printFunc(fnc){
    let result = fnc(10,5);
    console.log(result);
}
printFunc(sum); // fnc = sum 10과 5로 처리된 값(sum함수값)을 result에 들어간다.

