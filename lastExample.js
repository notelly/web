//lastExample.js

let person1 = {
    name: '이면지',
    point:  (Math.random()*10).toFixed(1)
}
let person2 = {
    name: '이음표',
    point:  (Math.random()*10).toFixed(1)
}

let i = person1.point;
let j = person2.point;

console.log(i);
console.log(j);

// 두사람 중에 포인트가 높은 사람의 이름을 프린트 하세요.
if(i > j){
    console.log(person1.name + "의 포인트 "+ i + "가 더 큽니다.");
}else if (i < j){
    console.log(person2.name + "의 포인트 "+ j + "가 더 큽니다.");
}else{
    console.log("두사람의 포인트는 같습니다.");
}
//15 하니까 맞다가 틀리게 나옴 왜지?

let person3 = {
    name: '이일리',
    point:  (Math.random()*10).toFixed(1)
}

//세사람 중 포인트 높은 사람의 이름 출력

let a = person1.point;
let b = person2.point;
let c = person3.point;

console.log(a);
console.log(b);
console.log(c);

let people = [a, b, c];
let max = 0;
for (let n = 0; n <people.length; n++){
    if(max < people[n]){
        max =people[n];
    }
}
console.log("최대 점수는 " + max + "점 입니다.")

// 세사람의 점수를 기준으로 정렬( 5.6, 6.5 .7.7 이렇게 정렬)
