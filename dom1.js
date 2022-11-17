// dom1.js

console.log('dom 실행.');

let show = document.querySelector('#show'); //<div id =show></div> document 에서 id show를 가지고 옴. 요소를 선택하겠다는 메소드가 쿼리셀렉터. document의 쿼리 셀렉트를 show 에다 넣겠다.

let pTag = document.createElement('p'); //<p></p>를 만들겠다.
pTag.innerText = 'Hello'; //<p>Hello</p>

show.appendChild(pTag); //<div id =show><p>Hello</p></div> show > pTag 자식 요소로 붙이겠습니다.

let btn = document.createElement('button'); // 태그를 만든다 <button></button>
let txt = document.createTextNode('클릭'); //
//btn.innerText = "클릭"; //<button>클릭</button>
btn.appendChild(txt); //텍스트노드를 버튼에 넣는다
btn.onclick = function(){
    console.log('클릭되었습니다.');
}
btn.setAttribute('id', 'btn') // 속성지정. <button id="btn">클릭</button>
show.appendChild(btn);

let fruits =['apple', 'banana', 'cherry'];
let ul =document.createElement('ul'); // <ul><li></li><li></li></ul>
for(let fruit of fruits){
    let li = document.createElement('li');
    li.innerText = fruit;
    ul.appendChild(li);
}
show.appendChild(ul);


let secdp = document.querySelector("#show>p:nth-of-type(2)")
secdp.remove();
console.log(secdp);


// querySelector(선택자)
// createElement(요소 생성)
// 부모요소.appendChild(자식간의 관계를 이어주겠습니다.)
// remove (삭제)

// <p>내가 좋아하는 과일</p> <ol><li>복숭아</li><li>사과></li><li>포도<li></ul>

let myf = document.createElement('p');
myf.innerText = '내가 좋아하는 과일';
show.appendChild(myf);


let list = document.createElement('ol');
let ffs = ['복숭아', '사과', '포도'];
for(let ff of ffs){
    let li = document.createElement('li');
    li.innerText = ff;
    list.appendChild(li);
}
show.appendChild(list);

let list1= document.createElement('ol');
list1.innerText = '내가 좋아하는 과일';
let FFs = ['건망고', '애플망고', '망고'];
for(let FF of FFs){
    let li1 = document.createElement('li');
    li1.innerText = FF;
    list1.appendChild(li1);
}
show.appendChild(list1);

//이건 안됨  innerText가 자식 요소긴 하지만 이건 불가능, '내가 좋아하는 과일'이 만들어 지면서 위에 요소들이 다 사라짐.
let list2= document.createElement('ol');
let FFs1 = ['건망고', '애플망고', '망고'];
for(let FF1 of FFs1){
    let li2 = document.createElement('li');
    li2.innerText = FF1;
    list2.appendChild(li2);
}
list2.innerText = '내가 좋아하는 과일';
show.appendChild(list2);
//대안
let list3= document.createElement('ol');
let FFs2 = ['건망고', '애플망고', '망고'];
for(let FF2 of FFs2){
    let li3 = document.createElement('li');
    li3.innerText = FF2;
    list3.appendChild(li3);
}
let text = document.createTextNode('내가 좋아하는 과일');
list3.appendChild(text);
show.appendChild(list3);


