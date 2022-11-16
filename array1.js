// array1.js

let ary = [10, 20];
ary.push(30); //값을 추가
ary.push(40);

ary.pop(); //잴 뒤에서 하나 제거  마지막 위치 제거
ary.shift(); //잴 앞에서 하나 제거  첫번째 위치 제거
ary.unshift(5);// 첫번째위치 추가

console.log(ary);

let names =[];
while (true) {
    let value = prompt("이름을 입력하세요.");
    if(value == "stop"){
        break;
    } 
    names.push(value);
}
// for 반복문.
for (let i = 0; i <names.length; i++){
    console.log(names);
}
for(let name of names){
    console.log(name); //한건에 대한 처리를 하려고 값을 하나씩 출력
}

