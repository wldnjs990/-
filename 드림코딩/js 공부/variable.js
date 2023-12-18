// 1.use strict

// js는 매우 flexible(유연)함
// 그래서 굉장히 실수가 많음
// 'use strict';을 사용하면 ECMASctipt에 추가되어 콘솔에서 함수의 요류가 있는 코드를 찾아내 오류가 있다고 보여줌
'use strict';

// 2, Variable(변수) rw(read / write) - 읽고 쓰기 가능
// Variable(변수)는 변경될 수 있는 값으로 함수에서 키워드를 짤때 적용되는 문법이다. (let 변수 활용 추천)
// let 변수는 ES6(ECMA Script 6버전)에 추가된 변수임.(대부분의 현업 문법은 ES6 출신)
// {} 는 그 안에 존재하는 변수가 바깥에 영향을 끼치지 않게 만드는 역할을 한다.
// 바깥에 적는 함수는 글로벌 함수로 모든 영역에 적용이 됨과 동시에 데이터를 많이 잡아먹으므로 되도록 안 쓰는것이 좋다.

// var은 옛날 함수임 var을 사용하면 요류가 너무 많이 발생할 수 있음 왜냐하면 var 함수를 만들고
// var apple; <- 이처럼 변수의 설정값을 안 정하고 
// console.log(apple); 이렇게 함수를 쓰고 저장을 해도 DEV Tool의 콘솔에선 오류 표시가 안남 (undefined라고 표시 뜸)
// let 함수는 위의 var 처럼 함수를 사용하면 콘솔창에 오류가 명확히 표시된다.
// 그리고 bar은 block scope {}<-이거 를 무시한다. 즉, 위험 요소가 너무 많음.
let globalName = 'global name';
{
let apple = 'delicious';
console.log(apple);
apple = 'yummy';
console.log(apple);
console.log(globalName);
}
console.log(globalName);

// var을 사용하면 안되는 이유
// var hosting = 어디에 선언하든 상관없이 항상 제일 위로 선언을 끌어올리는 것
{
    var no;
    console.log(no);
}
console.log(no);


// 3. Constants r(read only) - 읽기만 가능
// Constants 함수는 한번 할당하면 값이 절대로 변하지 않는 함수이다.
// 보통 let등의 변수 함수는 메모리 어딘가의 할당된 박스에 가리키고 있어서 포인터를 이용해 값을 계속 바꿀수 있음.
// 하지만 Constants 함수는 가리키고 있는 포인터가 잠겨 값을 선언한 이후엔 절대로 값을 절대로 바꿀수 없음.
// 값을 바꿀수 있는 함수를 Mutable함수라고 부름
// const 함수는 IMMutable 함수임.
// 대부분의 개발자들은 파일을 만들때 Mutable 함수로 제작하다 완성이 되면 전부 IMMutable 함수로 바꾸라고 한다.
// 그 이유는
// 1. 보안상으로 해커들이 완성된 코드에 이상한 코드를 집어넣어 바꾸는 것을 예방 가능함.
// 2. 스레드라는 어플리케이션의 프로세스가 빠르게 동작할 수 있도록 도와주는 것이 존재하는데 다양한 스레드들이 동시에 함수값을 변경할 수 있는데 이게 위험하다고 함
// 3. 나중에 코드를 변경하거나 남이 변경할때 실수를 줄일 수 있다.

const lock = 'immutable';
console.log(lock);
// lock = 'muttable?';  이렇게 또 다시 변수를 만들어도
// console.log(lock);   let 처럼 입력값이 변하지 않고 immutable로 고정된다!!

// 4. Variable types (자바스크립트 데이터 타입)
// 자바스크립트 데이터 타입은 primative / object 타입으로 나뉜다.
// primative = 더이상 작은 단위로 나뉠수 없는 한가지 아이템(single item)을 뜻함 
// primative items = number, string, boolean, null, undefined, symbol
// object = primative items를 모아 한 단위/박스로 관리하는것
// * first-class function이란 해당하는 프로그램에선 function도 변수에 할당이 가능함. 그렇기 때문에 함수에 paramiter(인자)로도 전달이 됨
// 함수에서 return 타입으로도 function을 리턴하는 것이 가능함

// 4-1. data types of number
// java나 C언어 등에서 숫자 함수를 지정할때는 숫자의 타이핑에 따라서 변수를 다르게 사용해야 하는데(C언어에서 2글자는 short, 4글자는 int, 8글자는 long ....)
// 그렇게 되면 함수를 적절한걸 사용하지 않으면 용량을 낭비하게 된다.
// 그러나 java Script는 그딴거 없다.
// java Script에선 number 함수만 사용한다
// 심지어 number 변수를 적을 필요도 없다.
let a = 12;
let b = 1.2;
let C = 123123;
// 이렇게 변수로 지정해도 쌉가능
// 대신 Type Script에서는 let a: number = 12; 이렇게 입력값에 number을 붙여야 한다.
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);
// `("~"표 있는 키보드 키 = back tic? 빽 틱) 이거 써야지 위에 처럼 입력된다.

// *infinity, -infinity, nAn
// 나중에 DOM 요소를 js를 이용해 포지션을 바꾸는 등 다양한 계산을 할 때가 있음
// 이때 나눌 값이 0인지 아닌지, 숫자인지 아닌지 확인 안하고 계산하면 다음과 같은 에러가 발생하는데
// 연산하기 전에 다음과 같이 계산해서 valid한 값이 나오는지 확인해야함.
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//최근 추가된 bigInt는 chrome, firefox에서만 지원되는 프로그램인데 js에서 한정된 숫자 범위가 있는데 그 이상을 사용할 수 있게 한다.
let bigInt = 31674517645176451765476n;
console.log(`value: ${bigInt} type: ${typeof bigInt}`);


// 4-2. string(끈, 줄)
// string은 문자열(문자의 나열)의 생성자임
// 다음과 같이 문자를 연결시켜 변수를 만들수도 있다.
const char = "c";
const jiwon = "jiwon";
const greeting = "hello" + jiwon;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
console.log(`value: ${jiwon}, type: ${typeof jiwon}`);
const helloBob = `hi ${jiwon}!`;
console.log(`value: ${helloBob} type: ${typeof helloBob}`);

// 4-3boolean
// 참과 거짓을 뜻하는 문법
// false(거짓) = 0, null, nudefined, NaN, ''
// true(참) = any other value (그 외 다른 value 전부)
const canRead = true;
const test = 3<1;
console.log(`value: ${canRead}, type: ${typeof canRead}`); //true
console.log(`value: ${test}, type: ${typeof test}`) //false

// 4-4null
// 텅 비어있는 empty값을 말함 = 아무것도 아닌 함수 (object 상태)
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting}`)

// 4-5undefined
// 아직 아무것도 정해지지 않은 상태
let x;
console.log(`value: ${x}, type: ${typeof x}`)

// 4-6symbol
// 넵(?)이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을때 사용되는 식별자
// 고유한 식별자이기 때문에 동일한 string를 작성해도 다른 symbol로 작성된다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
// 만약 string이 똑같은 symbol을 만들고 싶다면 Symbol 앞에 .for을 붙이면 된다.
const asymbol = Symbol.for('id');
const bsymbol = Symbol.for('id');
console.log(asymbol === bsymbol) //true

// 4-7object
// object는 const처럼 값이 할당된 함수 안에 추가로 다른값이 할당 가능한 함수명을 만들수 있는 것을 뜻한다.
const ellie = {name: 'ellie', age: '20'}
ellie.age = '21';
console.log(`value: ${ellie.age}, type: ${typeof ellie.age}`); //ellie.age는 21로 표기됨.

// 4-8function
//다음시간에

// 5.Dynamic typing
// javaScript는 dynamically typed language이다
// 선언할때 어떤 타입인지 선언하지 않고 프로그램이 동작할때 할당된 값에 따라서 타입이 변경될 수 있다는 것을 뜻한다.
// 빠르게 제작 해야 하는 상황에선 유용하지만 대규모 프로젝트 등에선 문제가 많이 발생한다고 한다.
// TypeScript에선 이를 해결하는 방법이 있음 -> 자바스크립트 충분히 배운 후에 타입스크립트 배우기 타입스크립트는 배우는데 오래 안걸린다네
let text = 'hello'; 
console.log(text.charAt(0)); //string의 0번째 글자인 h 출력
console.log(`value: ${text}, type: ${typeof text}`); //string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); //string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); //number
//console.log(text.charAt(0)); //지금은 '8' / '2'인 number 함수이므로 오류 발생


// 2번 Variable 중, block scope의 효과
// console.log(apple); 이렇게 {} 밖에 있는 변수를 사용하면 오류가 발생함.

