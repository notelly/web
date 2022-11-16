//array3.js

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// indexOf(값)
let result = beasts.indexOf('bison'); //첫번째 bison의 인덱스 값 
console.log(`bison의 위치인덱스 값: ${result}`);
result = beasts.lastIndexOf('bison');
console.log(`bison의 위치인덱스 값: ${result}`);
//inclues(값) => boolean
if (beasts.includes('bison')){  // 값이 있는 지 없는지 확인하기 위해 반복문을 돌림.
    console.log(`bison이 존재.`)
} else {
    console.log('bison이 없음.')
}

function includes(name){
    let isChecked = false; //전체를 루틴돌게 만들어줘야한다.
    for(let beast of beasts) { 
        if (beast == name){
            return true;
        }
        isChecked = true; //for의 반복되는 작업을 끝까지 했다는 의미의 true
    }
    if(isChecked){
        return false;
    }
}
result = includes('duck');
console.log(result);

//join(구분자) : 배열 -> 문자.
result = beasts.join("-").split('-'); // 문자열을 다시 배열로 바꾸겠습니다. split
console.log(result);

// slice(시작인덱스, 종료인덱스)
result = beasts.slice(0,3);
console.log(result);
console.clear();

console.log(beasts);
// splice(위치인덱스, 대체할 요소 크기, 대체값) : 추가: push, unshift, 제거; pop, shift
beasts.splice(beasts.length, 0, 'pig'); //대체할 요소의 내용을 넣어준다. 요소의 크기를 넣으면  ex) (-1, 1, )이라고 할때 마지막 bison 자리에 대체된다. 0을 하면 6번째로 들어간다. (0,1, )첫번째 ant에 pig가 다시 들어간다. 삭제하고 싶으면 대체하는 값을 안넣으면 된다. (0, 2) 두개 삭제 하겠습니다. (0,2, 'bison', 'ant') ant bison 을 bison ant로 대체하겠다.
console.log(beasts);
