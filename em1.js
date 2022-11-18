// em1.js

//버튼이 눌리면 이벤트 발생

window.onload = local;

function local(){

document.getElementById('add').addEventListener('click', addFunc);
// document.getElementById('diff').addEventListener('click', diffFunc);
// document.getElementById('multi').addEventListener('click', multiFunc);
// document.getElementById('div').addEventListener('click', divFunc);

//함수
let first = document.querySelector('#first').value;
let last = document.querySelector('#last').value;
let result = document.querySelector('#result');

function addFunc(){
   result = parseInt(first) + parseInt(last);
   console.log(result);
   result.innerText = result;

}

// function diffFunc(){
//     result = first.innerText - last.innerText;
// }

// function multiFunc(){
//     result = first.innerText * last.innerText;
// }

// function divFunc(){
//     result = first.innerText / last.innerText;
// }

}