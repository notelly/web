// function2.js

let numAry = [20, 25, 11, 34, 27, 52];
let sum = 0;
for(let i = 0; i < numAry.length; i++){
    if(numAry[i] %2 == 0){  //짝수인 것만 더하고 싶을때
        sum += numAry[i];
    }
    // 반복될때 마다 값을 확인하고 싶으면 console,log(`sum: ${sum}, numAry: ${numAry[i];}`)
}
console.log(`짝수의 합계값은 ${sum} 입니다.`);


//좀더 간편하게
sum = 0;
for (let num of numAry){ // 변수 num 에 다 담아 두겠다.
    if(num % 2 == 1){ //홀수합계
        sum += num;
    }
}
console.log(`홀수의 합계값은 ${sum} 입니다.`);


//함수로 만들기 또 다른 배열에서 쓸 수 있기 때문에
let numAry2 = [11, 22, 33];

//배열의 요소들의 합을 반환하는 함수
function sumArray(ary){ //ary 배열이름
    let sum = 0; // 위치
    for (let i = 0; i < ary.length; i++){
        sum += ary[i];
    }
    return sum; // sum을 반환하겠습니다. 각각의 합을 다 가지고 있으니까 반환해 줘야함?
}
let result = sumArray(numAry2); //sumArry의 역할을 매개값으로 들어온 것의 합을 내주는 것 >> 반환해준 것을 받는다.
console.log(`numAry의 합계: ${result}`);

let numAry3 = [125, 50, 72, 9, 2]

result = sumArray(numAry3);
console.log(`numAry3의 합계: ${result}`);

function evenSum(Array) {
    //배열요소중에서 짝수값의 합.
    let evensum = 0;
    for (let i =0; i < Array.length; i++){
        if(Array[i] % 2 == 0){
            evensum += Array[i];
        }
    }
    return evensum;
}
result = evenSum(numAry3);
console.log(`numAry3의 짝수 합은: ${result} 입니다.`)


function maxVal(first, last) {
    //매개값 중에서 큰 값을 반환하는 기능.
    let max;
    if(first >= last) {
        max = first; //console.log(last);
    }else {
        max = last;//console.log(first)
    return max;
    }
}
result = maxVal(13, 80);
console.log(`큰 값은: ${result}`);

//세개의 값중 가장 큰 값 내가 한 거 
function MaxVal(first, mid, last) {
    let Max;
    if (first >= mid){
        Max = first;
    }else{
        Max = mid;
    }
    if (Max >= last){
        Max = Max;
    }else{
        Max = last;
    }
    return Max;
}
result = MaxVal(60,4,50);
console.log(`셋중 가장 큰 값은 ${result}`);

//교수님이 한거
function MAxVal(first, mid, last) {
    let MAx;
    if (first >= last){
        if(first >= mid){
            MAx = first;
        }else {
            MAx = mid;
        }
    }else{
        if (last >= mid) {
            MAx = last;
        }else {
            MAx = mid;
        }
    }
    return MAx;
}
result = MAxVal(50,4,30);
console.log(`셋중 가장 큰 값은 ${result}`);