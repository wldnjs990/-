'use strict';

// operator - 연산자

// 1.string concatenation - 문자열 연산
// + 기호를 통해서 문자열과 문자열을 합하는 연산자
console.log('my' + 'cat');
console.log('1' + 2);
// ` <-이게 좋은 이유 : `` 영역 안에서는 ''같은 특수기호를 이용해도 그대로 문자열(string)로 표기된다.
// 띄워쓰기나 tab 효과도 일반적으로 엔터 쳐서 띄우는 것으로 할 수 있어서 유연하게 사용 가능함.
// '' <- 이거는 문단마다 사용해야 하는 단점과 tab기능을 사용하려면 \n, \b등 명령어를 사용해야 띄어쓸 수 있음.
// 결론은 ``<- 이거 애용해라.

console.log(`string literals: 1 + 2 = ${1 + 2}`);
console.log("ellie's\b \nbo\tok")

// 2.Numertic operators - 숫자 연산
// 말 그대로 숫자 연산하는거임.
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 2);
console.log(55 % 2); //나누고 남은 몫
console.log(2 ** 3); //제곱

// 3. Increment and decrement operators - ++ / --연산자 
// Increment and decrement 연산자는 앞에 연산자를 붙이는 preIncrement/predecrement 와
// 뒤에 연산자를 붙이는 postIncrement/postdecrement로 나뉜다

// 3-1 preIncrement / predecrement
// number 변수에 preIncrement(++) / predecrement(--) 연산자를 붙이면
// 그 number 함수가 +1 / -1 된 값으로 연산되어 먼저 pre연산자를 사용한 변수에 출력되고 그 후에 number변수에서 출력된다.
let counter = 2;
const preIncrement = ++counter;
// 1. conuter = conuter + 1
// 2. preIncrement = counter
console.log(`preIncrement: ${preIncrement} counter: ${counter}`)

// 3-2 postIncrement / postdecrement
// number 함수에 postIncrement(++) / postdecrement(--) 연산자를 붙이면
// 먼저 기존 값이 post연산자를 사용한 변수에 출력되고, +1 / -1 로 연산된 값이 number변수에 출력된다.
const postIncrement = counter++;
// 1. postIncrement = counter
// 2. counter = counter + 1
console.log(`postIncrement: ${postIncrement} counter: ${counter}`)

// 4. Assignment operators - =연산자
// 숫자나 공식을 정의하는 연산자임(?)

let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators - 비교 연산자
// 부등호로 boolean(참/거짓)을 결정하는 연산자이다.
console.log(10 < 6); 
console.log(10 <= 6); 
console.log(10 > 6); 
console.log(10 >= 6); 

// 6. Logical operators - || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
function check() {
    for (let i = 0; i < 10; i++) {
        //시간낭비
        console.log('놀라는 이모티콘');
    }
    return true;
}

// 6-1. || (or) - or연산자가 표시되어있는 영역 중 true(참)이 나온다면
// 그 뒤에 나오는 출력값들을 계산하지 않고 바로 true로 값을 내는 함수이다.
console.log(`or: ${value1 || value2 || check()}`);
// check() 함수 계산중에 "i < 10" 공식이 true가 나왔으니,
// 그 뒤에 나오는 "놀라는 이모티콘" 값이 계산되지 않고 true로 결과가 나옴.

// 6-2 && (and) - and연산자가 표시되어있는 영역 중 false(거짓)이 나온다면
// 그 뒤에 나오는 출력값들을 계산하지 않고 바로 false로 값을 내는 함수이다.
console.log(`and: ${value1 && value2 && check()}`);
// value1의 "false" 값이 false가 나왔으니,
// 그 뒤에 나오는 value2, check() 값이 계산되지 않고 false로 결과가 나옴.

// * && (and)는 추가로 null 함수를 체크할 때에도 자주 사용된다.
// nullableObject && nullableObject.something(아래는 코드로 변환했을때)
// if(nullableObject !=null) {
//     nullableObject.something;
// }

// 6-3 ! (not) - not연산자는 true / false 값을 반대로 바꿔주는 역할을 한다.
console.log(!value1); // true

// 7. Equality - = == === 연산자
const stringFive = '5'; // string
const numberFive = 5;   // number
// == loose equality - 타입을 변경해서(신경쓰지 않고) 검사함.
console.log(stringFive == numberFive); // ==(같은가) 아 어쨌든 5는 똑같잖슴 true
console.log(stringFive != numberFive); // !=(다른가) 아 어쨌든 5는 똑같잖슴 false

// === strict equality - 타입을 신경써서 검사함.
console.log(stringFive === numberFive); // ===(같은가) string이랑 number은 다르지; false
console.log(stringFive !== numberFive); // !==(다른가) string이랑 number은 다르지; true

// object equality by reference
// 데이터 공간(reference) 안에서 바꾸는 선택자의 이름이 같으면 ==(loose equality)는 true가 된다.
// 그러나 ===(strict equality)는 데이터 공간이 다르기 때문에 거짓이 된다.

const jiwon1 = {name: 'jiwon'}; // jiwon1이라는 저장공간(reference)를 가지고 있고 안에 name: "jiwon라는 value가 들어가있음."
const jiwon2 = {name: 'jiwon'}; // jiwon2이라는 저장공간(reference)를 가지고 있고 안에 name: "jiwon라는 value가 들어가있음."
const jiwon3 = jiwon1;          // jiwon1과 같다고 명시되어 있기 때문에 jiwon1이라는 저장공간(reference)를 가지고 있고 안에 name: "jiwon라는 value가 들어가있음."
console.log(jiwon1 == jiwon2);  // 안에 들어있는 value인 name: "jiwon"은 같다고 해도 reference(데이터 공간)자체가 다르니깐 false
console.log(jiwon1 === jiwon2); // 데이터 공간(reference)이 다르기 때문에 false
console.log(jiwon1 === jiwon3); // 데이터 공간(reference)이 같고 안에 들어가 있는 value인 name: "jiwon"도 같기 때문에 true

//예제
console.log(0 == false);        // false 값이 같으니 true
console.log(0 === false);       // 타입 자체가 다르니 false
console.log('' == false);       // false 값이 같으니 true
console.log('' === false);      // 타입 자체가 다르니 false
console.log(null == undefined); // 안이 텅텅 비어있다 = 아직 정해지지 않았다 true
console.log(null === undefined);// 타입 자체가 다르니 false

// 8. Conditional operators - if연산자
// if, else if, else
// if = 만약에 이게 맞다면
// else if = 만약에 이게 아니고 이거라면
// else = 전부 아닌 그 외의 것들은
const myname = 'jiwon';
if (myname === 'jiwon') {
    console.log('welcome, jiwon!');
} else if (myname === 'coder'){
    console.log('you are great coder!');
} else {
    console.log('누구고?')
}

// 9. Ternary operator - ?연산자
// Equality연산자로 연산했을때 ?를 사용해
// true가 나오면 왼쪽의 string을 사용하고
// false가 나오면 오른쪽의 string을 사용한다.
// 간단하게 사용하는 용도
console.log(myname === 'jiwon' ? 'ㅇㅇ 맞다' : 'ㄴㄴ 아니다')

// 10. switch operators - if연산자와 비슷한 연산자
// case가 if와 else if를 둘 다 어우르는 연산자고
// default가 else를 어우르는 연산자임.
// 이 출력값은 아래로 순서대로 내려가다 연관되는 선택자가 있으면 그 지점 부터 맨 밑 까지
// 연관되는 선택자인지와 상관없이 입력한 값들이 출력된다.
// 선택자에 연관된 내용만 출력하고 싶다면 출력값 아래에 break;를 붙이면 그 지점에서 출력을 멈춘다.
// 서로 출력 내용이 같다면 아래의 Chrome과 Firefox처럼 같이 나열해도 된다.
const browser = 'Chrome';

switch (browser) {
    case 'IE':
        console.log('저리 가소');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('어서오고');
        break;
        default:
            console.log('누구세요?');
            break;
};

// 11. Loops - while연산자(반복문)
// while문을 사용하면 그 연산이 true라면 그 출력값을 무한으로 반복시킨다 = false가 나올때 까지 반복한다.
// 다음 예시처럼 사용하는데 만약에 i에 postdecrement를 안 집어넣고 실행한다?
// while: 3이 무한대로 출력되서 컴퓨터 맛 간다.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// 12. do-while Loop - do, while연산자(반복문)
// do-while문은 while문을 실행하기 전에 do문으로 먼저 한번 실행한 후에
// 그 값이 아직도 true가 나온다면 false가 나올때 까지 계속 반복하는 연산자다.
// while문과 다르게 false가 나온다 해도 먼저 한 번 값을 실행해야 할때 사용한다.
let t = 3;
do {
    console.log(`do while: ${t}`);
    t--;
} while (t > 0);

do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// 13. for loop - for연산자(반복문)
// for연산자는 (시작 변수 > 상태 > 연산)순으로 진행되는 연산식을 만들어
// 순서대로 진행되면서 상태가 false가 나올때 까지 계속 반복하는 연산자다.
for (let j = 3; j > 0; j--) {
    console.log(`for: ${j}`);
}

for (let j = 3; j > 0; j = j - 2) {
    console.log(`inline variable for: ${j}`);
}

// 14. nested loop - for연산자 활용(반복문)
// 첫번째 for 연산자(i)에 상태가 true가 나온다면 연산을 진행하기 전에
// 출력값에 들어가 있는 for연산자(j)가 false가 나올때 까지 출력값 for연산자를 반복시키고
// 안에 들어가있는 for 연산자(j)의 상태가 false가 나오면 첫번째 for연산자(i)의 연산을 진행시키는 형태다.
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// 15. break, continue
// break는 사용하면 출력을 도중에 멈추게 하고
// continue는 특정 값만 출력을 중단하고 계속 진행시키게 한다.

// 예제 1. 0 ~ 10의 숫자를 출력하는데 짝수 번호만 나오게 해라(continue를 사용해서)
for (let p = 0; p < 11; p++) {
    if(p % 2 !== 0) {
        continue;
    }
    console.log(`ex1: ${p}`);
}
// 사실 굳이 continue 넣을 필요 없이 원하는 조건에서만 출력하게 만들면 됨.
for (let p = 0; p < 11; p++) {
    if(p % 2 === 0) {
        console.log(`ex1-1: ${p}`);
    }
}

// 예제 2. 0 ~ 10의 숫자를 출력하는데 8까지만 출력해라
for (let p = 0; p < 11; p++) {
    if (p > 8) {
        break;
    }
    console.log(`ex2: ${p}`)
}

// 결론 if문은 정말 자주 쓰인다!