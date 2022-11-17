//array4.js


let names = ["이가영", "장독대", "김가루"];
names.push("박나물");
names.splice(names.length, 0, '이면지');
names.splice(names.length, 0, '권투장');
names.splice(names.length, 0, '채끝살');
names.splice(0, 0, '오수');
names.splice(0, 0, '황금색');
names.splice(0, 0, '김치전');

console.log(names);

// 1)prompt("이름입력:")입력받은 삭제하는 2) 이름1, 이름2, 이름3 .......stop 입력.

// 1)
let remove = prompt('삭제하고 싶은 이름을 입력하세요.');

if (remove) {
    removeName(remove)
}

function removeName(name){
        if (names.includes(name)){
            names.splice(names.indexOf(name), 1); //왜 0이아니라 일인지 생각하기
        }else{
            console.log(`${remove}은(는) 없음.`)
        }
        console.log(names)
    }



// 2)

while(true){
    let people = prompt('이름을 입력하세요');
    if()
}
