let btn = document.querySelectorAll('.container .tab-button');
let content = document.querySelectorAll('.container .tab-content');
for(i = 0; i < btn.length; i++){
    let idx = i
    btn[i].addEventListener('click', function(){
        for(j = 0; j < btn.length; j++){
            btn[j].classList.remove('orange')
        }
        for(e = 0; e < content.length; e++){
            content[e].classList.remove('show')
        }
        btn[idx].classList.add('orange')
        content[idx].classList.add('show')
    })
}

document.querySelector('.car').innerHTML = car[0];
document.querySelector('.price').innerHTML = car2.price[2];

/**/
let option = '<option></option>'
let pants = [28, 30, 32, 34, 36]
let shirt = [95, 100, 105, 110, 115]
let size = document.querySelector('.mt-2');
let list = document.querySelector('.hide');
size.addEventListener('input', function () {
    let check = document.querySelector('.mt-2 option:checked');
    if(check.classList.contains('open')){
        list.classList.add('on');
        list.classList.remove('off');
    } else {
        list.classList.add('off');
        list.classList.remove('on');
    }
    /*사이즈 설정*/
    if(check.classList.contains('pants')){
        document.querySelector('.size').innerHTML = '';
        for(let i = 0; i < pants.length; i++){
            document.querySelector('.size').insertAdjacentHTML('beforeend', `<option>${pants[i]}</option>`);
        }
        pants.forEach(function(){
            console.log('앙')
        }); 
    } 
    else if(check.classList.contains('shirt')){
        document.querySelector('.size').innerHTML = '';
        shirt.forEach(function(e){
            document.querySelector('.size').insertAdjacentHTML('beforeend', `<option>${e}</option>`) // e == Array 함수 나열된거
        })
        // forEach == array의 갯수만큼 반복시키는 반복문 ex) [1, 2, 3] == 3개 "forEach(function(){})" 에 function()콜백 함수를 입력하면(e) .forEach라는 Array반복문 안에 보여주는 변수들을 차례대로 나열해준다.
        // forEach에는 2개의 파라미터 생성 가능(첫 째는 array안의 데이터 / 둘 째는 0부터 1씩 증가하는 정수(for 기본문 처럼 순서를 표현할 수 있음.))
    }

});
let obj = {name : '안지원', age : 25}
    for (let key in obj) {
        console.log('앙지원')
    }                                                                                       
    for (let key in obj) {
        console.log(key)
    }
    for (let key in obj) {
        console.log(obj[key])
    }
    // object함수도 for문 사용 가능 (for문에서 변수 저장한 내용은 object함수의 내용임, 다음과 같이 for문을 만들면 closer에 적은 함수를 object함수의 갯수만큼 반복함.)

    //반복문의 용도 == 1. 코드를 반복할때 / 2. array, object에서 데이터를 전부 꺼낼 때
        

    let 출석부 = ['흥민', '철수', '철수', '영희', '재석'];
    function 이름찾기(i){
        for(let n = 0; n < 출석부.length; n++){
            if(i == 출석부[n]){
                console.log('있어요');
                return
            }
        }
    }
    이름찾기('철수')

    let 구구단 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for(let i = 0; i < 9; i++){
        구구단.forEach(function(e, f){
            console.log(구구단[f] * 구구단[i])
        })
    }

    function 평균점수(e, f){
        let result = e;
        let average = 0;
        for(let i = 0; i < e.length; i++){
            average = average + result[i]
        }
        let score = average / e.length;
        let plus = (score - f).toFixed(1);
        let minus = (f - score).toFixed(1);
        if(score > f){
            console.log(`오 점수가 ${plus}점 이나 높아요!`)
        } else {
            console.log(`ㅋㅋ ${minus}점 만큼 놀았노 ㅋㅋ`)
        }
    } 
    평균점수([50, 75, 90], 100)