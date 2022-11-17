//dom2.js

let pTag = document.createElement('p'); //<p></p>
let txt = document.createTextNode('Hello');  //Hello
pTag.appendChild(txt);//<p>Hello</p>

// window.alert("경고 경고!!");
// console.log(window);
// window.onclick = function() {  //클릭 이벤트 클릭하면 이벤트가 발생됨.
//     console.log('윈도우 클릭');

// }

window.onload = function() {
    document.querySelector('.show').appendChild(pTag);

    //버튼 선택 >클릭 이벤트 등록
    let btn = document.querySelector('#btn');
    btn.onclick =function(){ //on은 모두 이벤트와 관련된 속성 onmouseover마우스가 올라가면 횟수가 올라감
        // 이름값을 가져오는 부분.
        let name = document.querySelector('#name').value;
        let age = document.querySelector('input[name="age"]').value; // input[name="age"] css의 선택자
        if(!name || !age){ // !name name에 값이 || 없거나 !age age에 값이 없으면
            window.alert("값을 입력하세요!");
            return; //실행하다가 종료하겠습니다.
        }
        // li생성. text: name, age => ul 의 자식으로 등록
        let liTag = document.createElement('li');
        let txt = document.createTextNode(name + ', '+age);
        liTag.appendChild(txt);
        document.getElementById ('list').append(liTag); //qurreyselect (#list)= getElementById('list')

        //초기화
        document.querySelector('#name').value = "";
        document.querySelector('#age').value = "";
    }
    console.log(btn);
}


