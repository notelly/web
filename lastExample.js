//lastExample.js

let person1 = {
    name: '이면지',
    point: (Math.random()*15).toFixed(1)
}
let person2 = {
    name: '이음표',
    point: (Math.random()*15).toFixed(1)
}
// 두사람 중에 포인트가 높은 사람의 이름을 프린트 하세요.
console.log(person1.point);
console.log(person2.point);
if (person1.point > person2.point){
      console.log(person1.point);
}else if (person1.point < person2.point){
        console.log(person2.point);
    }else{
        break;
    }
}

let person3 = {
    name: "이일리",
    point: (Math.random()*15).toFixed(1)
}
// 세사람 중 포인트 높은 사람의 이름 출력

// 세사람의 점수를 기준으로 정렬( 5.6, 6.5 .7.7 이렇게 정렬)
