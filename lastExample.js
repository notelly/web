//lastExample.js

let person1 = {
    name: '이면지',
    point: (Math.random() * 15).toFixed(1)
}
let person2 = {
    name: '이음표',
    point: (Math.random() * 15).toFixed(1)
}

let i = parseFloat(person1.point);
let j = parseFloat(person2.point);

console.log(i);
console.log(j);

// 두사람 중에 포인트가 높은 사람의 이름을 프린트 하세요.
if (i > j) {
    console.log(person1.name + "의 포인트 " + i + "가 더 큽니다.");
} else if (i < j) {
    console.log(person2.name + "의 포인트 " + j + "가 더 큽니다.");
} else {
    console.log("두사람의 포인트는 같습니다.");
}
//15 하니까 맞다가 틀리게 나옴 왜지?

let person3 = {
    name: '이일리',
    point: (Math.random() * 15).toFixed(1)
}

//세사람 중 포인트 높은 사람의 이름 출력

let a = parseFloat(person1.point);
let b = parseFloat(person2.point);
let c = parseFloat(person3.point);
//  15.4  2 가 더 큰값으로 취급됨 글자가 아니라 숫자로 취급해줘야한다  azk  b 
console.log(a);
console.log(b);
console.log(c);

let people = [a, b, c];
let max = 0;
for (let n = 0; n < people.length; n++) {
    if (max < people[n]) {
        console.log(max,people[n]);
        max = people[n];
    }
}
console.log("최대 점수는 " + max + "점 입니다.")

// 세사람의 점수를 기준으로 정렬( 5.6, 6.5 .7.7 이렇게 정렬)