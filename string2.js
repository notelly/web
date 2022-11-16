// string2.js
// trim(), trimStart(), trimEnd() : 공백제거.
let str = "    Hello, World    ";
let result = str.trim(); //tirmStart 왼쪽 여백삭제 trimEnd 오른쪽 여백을 삭제

// 대문자, 소문자, : toUpperCase, toLowerCase
result = str.toUpperCase().toLowerCase().trim(); //. 연산자로 메소드를 이어서 쓸 수 있다. 왜냐하면 반환해 주기때문에 >> 반환값이 문자열. 이어서 쓰는 것을 메소드 체인이라고 한다.
console.log(result); // 좌우의 여백 삭제


result = str.substring(0, 9).toUpperCase() + str.substring(9).toLowerCase(); //여백이 있을때 trim을 넣어주고 글자만 생각해서 자리를 잡아주면 된다.
console.log(result);

//문자열을 대체(replace)
//"    Hello, World    ";
result = str.replace("World", "world");
console.log(result); // "    Hello, world    ";


str = ["김기훈", "김근연", "이소라", "오수현", "박김희"]

//김 다포함
function findkim(){
    for(let inckim of str)
        if (inckim.indexOf("김") != -1){
            console.log(inckim);
        }
}
findkim();
// console.clear();
//성이 김인 사람만
 function findlkim(){
    for(let kim of str){
         if(kim.startsWith("김")){ //첫번째글자가 ()인것을 찾아라  string.endsWith 마지막 글자
             console.log(kim);
            }
        }
}
findlkim();

//substring => slice(시작인덱스 , 종료인덱스)
str = "Hello, World"; // 12개
result = str.slice(-5, -1); //-값이 들어가면 문자열 크기에서 -한것과 같다 -5: 12-5=7 -1: 12-1= 11 slice(7, 11)과 동일하다.
console.log(result); // Hello 출력

//주민번호(123456-1234567)
function checkGender(pn){
    if(pn.slice(7,8) == "2" || pn.slice(7,8) == "4"){ //slice(7,8) 대신 charAt(7)을 써도 똑같은 값이 나온다.
        return "여자";
    }else if (pn.slice(7,8) == "1" || pn.slice(7,8) == "3"){
        return "남자";
    // }else if(pn.slice(7,8) == "4"){
    //     return "여자";
    // }else if (pn.slice(7,8) == "3"){
    //     return "남자";
    }else
        return("잘못된 번호 입니다.");
}


result = checkGender("123456-1134567");
console.log(result);
result = checkGender("123456-2234567");
console.log(result);
result = checkGender("123456-3134567");
console.log(result);
result = checkGender("123456-4234567");
console.log(result);