// object3.js

// 책: Book (제목: title, 저자:author, 출판사:press, 가격:price);
class Book{
    constructor(title, author, press, price){
        this.title = title;
        this.author = author;
        this.press = press;
        this.price = price;
    }
    showAuthor(){
        return `${this.title}의 저자는 ${this.author} 입니다.`
    }
}
// 다산북스, 김영사, 범우사
let b1 =  new Book('오만과편견', '제인오스틴', '민음사', 1.5);
let b2 =  new Book('데미안', '헤르만 헤세', '민음사', 1.0);
let b3 =  new Book('헝거게임', '수잔 콜린스', '김영사', 1.3);
let b4 =  new Book('해리포터', 'JK.롤링', '김영사', 1.4);
let b5 =  new Book('국어사전', '우리만연구소', '범우사', 1.7);
let b6 =  new Book('로미오와 줄리엣', '세익스피어', '범우사', 2.0);


let books = []; // 6건 입력.
books.push(b1);
books.push(b2);
books.push(b3);
books.push(b4);
books.push(b5);
books.push(b6);


function findBooks(press) {
    let prMatch = [];
        for(let bk of books){
            if(bk.press == press){
                prMatch.push(bk);
            }
        }
    return prMatch;
}

let result = findBooks("범우사"); //출판사 정보가 같은 것 출력하도록
console.log(result);