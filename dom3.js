// dom3.js
let members = [{name: '이가영',age: 27,birth: '1996-09-11'}, //배열로 선언
            {name: '이면지',age: 23,birth: '2000-09-07'},
            {name: '이음표',age: 3,birth: '2019-10-03'}
            ]; 

window.onload = loadCallback; //익명함수를 이벤트에 연결 or 자주 쓰이는 것은 함수를 만들어 붙여줌

function loadCallback(){ 
    // 최초 리스트 출력
    let table = document.getElementById('list');
    table.setAttribute('border', '1'); //table에서
    table.append(makeThead()); // <thead>...</thead>
    table.append(makeTbody()); // <tbody>...</tbody>

    // 추가 기능. btn이 실행되면 이벤트 발생
    document.getElementById ('btn').addEventListener('click', addFunc); // addEventListener(이벤트타입, 실행함수) btn을 id 값을 가지고 오겠다.
    document.getElementById('delBtn').addEventListener('click', delteFnc);
    document.getElementById('chg').addEventListener('click', imfoChg);
    // 화면에 만들어져있는 tr에다 마우스를 올렸을때 색이 바뀌는 것
    //mouseover, mouseout 이벤트.
    // ☆let trs = document.querySelectorAll('tbody>tr'); //querySelector ('tr') 첫번째 tr만 가지고 옴 tr전부에 적용하려면 querySelectorAll ('tr') 사용
    // for (let tr of trs){
    //     tr.addEventListener('mouseover', function() {tr.style.backgroundColor = 'lightcoral'}) // mouseover 이라는 이벤트가 발생하면 function 수행
    //     tr.addEventListener('mouseout', function() {tr.style.backgroundColor = ''}) // 마우스 때면 색 사라지게
    // } //추가로 입력한건 적용되지 않는다. >> 실행 위치를 바꿔라☆
    // console.log(trs);
}

//정보수정
function imfoChg(){
    let imforms = document.querySelectorAll('tbody>td');
    for(let imfo of imforms){
        let inputName =document.querySelector('#name').value;
        let name =document.querySelector(imfo);
        if (inputName == name){
            let inputAge = document.querySelector('#age').value;
            let inputBirth = document.querySelector('#birth').value;
            age = inputAge;
            birth = inputBirth;
        }

    }
}

function delteFnc(){
    let allChk = document.querySelectorAll('tbody input[type = "checkbox"]:checked'); //tbody를 넣어줌으로서 title은 없애지 않는다.
    console.log(allChk);
    for(let chk of allChk){
        chk.parentElement.parentElement.remove();
    }
}


function addFunc(){ //가지고 와서 붙여넣기 하면된다.
    //각각 다른 방법으로 적어봄 실행되는 것은 동일
    let name = document.querySelector('#name').value;
    let age = document.getElementById('age').value;
    let birth = document.querySelector('input[name="birth"]').value;
    let props = {name: name, age: age, birth: birth}; //[name, age, birth]; //makeRow 에 배열은 공통이 안되므로 객체 타입으로 변경해준다.
    //반복 //버튼 누르면 표에 추가되는 거
    //let tr = makeRow (props);
    // let tr = document.createElement('tr');
    //     for (let prop of props){
    //         //반복.
    //         let td = document.createElement('td');
    //         let txt = document.createTextNode(prop);
    //         td.append(txt);
    //         tr.append(td);
    //     }
        document.querySelector('#list>tbody').append(makeRow(props));
}

//<thead><tr><th>이름</th><th>나이</th><th>생일</th><tr><thead>만들기
function makeThead() {
    let title = ['이름','나이','생일', '삭제', ];
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    for(let head of title){
        let th =document.createElement('th'); //<th></th>
        th.innerText = head;
        tr.append(th);
    }
    //전체선택
    let th1 =document.createElement('th');
    let chk = document.createElement('input');
    chk.setAttribute('type', 'checkbox');
    chk.addEventListener('click', deleteAFnc);
    th1.append(chk);
    tr.append(th1);
    // 타이틀 쪽에 것은 삭제하고 싶지 않다면 위에 deleteFnc()로 가서 tbody 것만 사라지게 설정해줘야한다.

    thead.append(tr);
    return thead;
}

function deleteAFnc(){
    let allChk = document.querySelectorAll('input[type = "checkbox"]') //체크박스전체를 선택.
    //전체체크박스를 대상으로 타이틀에 있는 체크박스와 같은값으로 변경.
    for(let chk of allChk){
        chk.checked = this.checked; //모르겠으면 console.log()을 쳐볼것. 이벤트를 받는 자기 자신 title의 checkbox로 td의 check박스가 바뀜.
        //chk.document.querySelector('input[type = "checkbox"]:checked')
    }
}

function makeTbody() {
    //<tbody><tr><td>값</td><td>값</td><td>값</td><tr> ..... </tbody>
    let tbody = document.createElement('tbody');
    for (let member of members){
        let tr = makeRow(member); //중복되는 코드가 많았음 함수로 간단하게
        tbody.append(tr); //받아노는 tr을 tbody에 붙이겠습니다.
        //데이터 건수만큼 반복.
        // let tr = document.createElement('tr');
        // for (let prop in member){ //{name: '이가영',age: 27,birth: '1996-09-11'}
        //     //반복.
        //     let td = document.createElement('td');
        //     let txt = document.createTextNode(member[prop]);
        //     td.append(txt);
        //     tr.append(td);
        //     }
        // tbody.append(tr);
    }
    return tbody;
}

function makeRow(member = {}) { // 값을 하나 받아오면 루틴을 돌면서  td tr 만들어주고 반환한다. 이름,나이,생일 => tr생성함수.
    //반복
    let tr = document.createElement('tr');
    tr.addEventListener('mouseover', mouseOverFnc) //function() {tr.style.backgroundColor = 'lightcoral'}) // mouseover 이라는 이벤트가 발생하면 function 수행
    tr.addEventListener('mouseout', function() {tr.style.backgroundColor = ''}) // 마우스 때면 색 사라지게
    tr.addEventListener('click', clickFnc, true);
    for (let prop in member){ // 객체가 아니니까 in
         //반복.
        let td = document.createElement('td');
        let txt = document.createTextNode(member[prop]);
        td.append(txt);
        tr.append(td);
    }
    //button은 member속성에 없음
    //<td>값</td> = > <td><button>삭제</button></td>
    //삭제 버튼 만든것
    let td = document.createElement('td');
    let btn = document.createElement('button');
    btn.addEventListener('click', function() {
        console.log('button click')
        event.stopPropagation(); // 상/하위 요소로 이벤트 전파 차단. //삭제할때 이름나이생일이 위에 뜰 필요가 없다.
        btn<td<tr.remove() // btn<td<tr = btn.parentElement.parentElement //function() {btn.remove()이건 버튼만 지워짐
    }, false); //false가 기본값 이벤트가 전파되는 기본 값을 정해준다.
    btn.innerText = '삭제';
    td.append(btn); 
    tr.append(td); //이거 빼먹지 말기

    //선택: 체크박스 만들기.
    td = document.createElement('td');
    let check =document.createElement('input'); //checkbox 태크는 따로 없고 input 에서 type을 checkbox로 하면 됨
    check.setAttribute('type', 'checkbox');
    td.append(check);
    tr.append(td);


    console.log(tr);
    return tr;
}

function mouseOverFnc(){
    let tr = this; // event 대상
    console.log(tr.style.backgroundColor = 'lightcoral'); //this 객체 자신을 가리킬 때. tr=this.아니면 tr을 선언해준다.  tr을 안쓰고 this를 쓰는 이유 tr이(makeRow를 벗어나) 선언된적이 없기 때문에 {tr.style.backgroundColor = 'lightcoral'} =>정의가 안되었다고 뜰꺼임.
    // // console.log(tr.children);
    // // console.log(tr.children[0].innerText);
    // // console.log(tr.children[1].innerText);
    // // console.log(tr.children[2].innerText);
    // document.getElementById('name').value = tr.children[0].innerText;
    // document.getElementById('age').value = tr.children[1].innerText;
    // document.getElementById('birth').value = tr.children[2].innerText;
    //불편 클릭했을때로 변경
}

function clickFnc(){
    console.log('tr click')
     tr =this;
     document.getElementById('name').value = tr.children[0].innerText;
     document.getElementById('age').value = tr.children[1].innerText;
     document.getElementById('birth').value = tr.children[2].innerText;
     event.stopPropagation();    
}