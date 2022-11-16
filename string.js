//string.js

let str = "Hello, World" // string => String index는 0부터 시작
console.log(str.length)

console.log(str.substring(0, 5)); // 문자의 일부분을 가지고 오고 싶습니다. X~Y까지 substring
console.log(str.substring(5)); // X~ 끝 문자까지 출력

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at
//다른 string 도 알아두는 것이 편하다.

//indexOf(값)  >> 메소드 문자의 index값을 반환
console.log(str.indexOf(",")); // ,의 문자의 인덱스(위치의 인덱스) 값을 반환하겠다. >> 5
//lastIndexOf()
console.log("Hello, World. Nice World".lastIndexOf("World")); // 지정된 단어의 인덱스 값

let temp = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis minima quas iste consequatur sapiente totam, sunt itaque saepe accusantium molestias facilis sit velit possimus delectus reiciendis at quidem, voluptatem commodi."
temp.split(" ");  //공백값을 기준으로 나누워서 새로운 배열을 만들어줌
let strAry =  temp.split(" ");
for (let word of strAry){ // 반복문 word 배열에 있는 단어(요소)를 하나씩 받아오는
    if (word.indexOf("m") != -1 ){
        console.log(word);
    } //m이 포함된 단어들을 출력
}
console.log(strAry);

// chartAt (인텍스) 특정 위치값을 입력하면 그 위치의 값을 반환
console.log(str.charAt(5));


// 찾을 이름을 입력하면 해당 나이를 반환

let people =[{name: "이가영", age: 20},
            {name: "이음표", age: 21},
            {name: "이면지", age: 22},
            {name: "이삼육", age: 23},
             ]
//name에 해당하는 age속성을 반환
function findPerson(name){
    for(let person of people){
        if (person.name.indexOf(name) != -1){ //indexOf 입력된 문자의 인덱스 위치값을 반환하는데 일치하는게 없으면 -1이 뜬다. 그걸 이용, 값을 입력했을때 -1이 나오지 않으면 리턴해라
            return person.age; //리턴 구문을 실행할 조건을 만족하는 것이 없다 그럼 괄호를 빠져나가서 실행.
        }
    }
    console.log("찾는 이름이 없습니다.")
    //return undefined; 리턴 구문이 없을 경우
}
let findName = prompt("이름을 입력하세요: ")//입력 받는 값으로 대체하고 싶다.
let result = findPerson(findName);
console.log(result);