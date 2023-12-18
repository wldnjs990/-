 
/**/
let list = 
`
<li class="product-list" id="list" draggable="true" ondragstart="drag(event)">
    <img src="pr1.JPG" alt="식기세척기">
    <p class="main-title"></p>
    <p class="sub-title"></p>
    <p class="price">
        <span class="fixed-text">가격 :</span>
        <span>00000</span>
    </p>
    <span class="input">담기</span>
</li>
`
/*1*/
let = products = document.querySelector('.products')

let listarr = ''; // 클릭 listarr
let draglistarr = ''; // 드래그 listarr

let clickcount = 0; // 클릭 카운트 
let dragcount = 0; // 드래그 카운트
let savedcount = ''; // 클릭 + 드래그 카운트

let addpric = ''; // 클릭 저장 가격
let dragpric = ''; // 드래그 저장 가격
let savedprice = ''; // 클릭 + 드래그 저장 가격

$.get('/store.json')
.done(function(a){
     /*1.html형성*/
     listarr = a.products
     for(i = 0; i < listarr.length; i++){
         list = 
         `
         <li class="product-list ${listarr[i].id}" id="list" draggable="true" ondragstart="drag(event)">
             <img src="${listarr[i].photo}" alt="식기세척기">
             <p class="main-title">${listarr[i].title}</p>
             <p class="sub-title">${listarr[i].brand}</p>
             <p class="price">
                 <span class="fixed-text">가격 : ${listarr[i].price}</span>
             </p>
             <span class="input">담기</span>
         </li>
         `
         products.insertAdjacentHTML('beforeend', list)
     }

    /*2.search 기능*/
    let search = document.querySelector('.search');
    search.addEventListener('input', function(){
        let text = search.value.trim(); // trim은 문자의 시작과 끝 부분의 공백을 삭제시켜주는 역할을 한다. ex) '   안녕' = '안녕'
        if(text === ''){
            fulllist();
        } else {
            filterlist();
        }

        function fulllist(){
            products.innerHTML = '';
            for(i = 0; i < listarr.length; i++){
                makingcard(listarr[i]);
            }
        }

        function filterlist(){
            products.innerHTML = '';
            for(i = 0; i < listarr.length; i++){
                if(listarr[i].title.includes(text)){
                    makingcard(listarr[i]);
                }
            }
        }

        function makingcard(target){
            list = 
            `
            <li class="product-list ${target.id}" id="list" draggable="true" ondragstart="drag(event)">
                <img src="${target.photo}" alt="식기세척기">
                <p class="main-title">${target.title}</p>
                <p class="sub-title">${target.brand}</p>
                <p class="price">
                    <span class="fixed-text">가격 : ${target.price}</span>
                </p>
                <span class="input">담기</span>
            </li>
            `
            products.insertAdjacentHTML('beforeend', list)
        }
    })
    /* 3.click 기능*/
    for(i = 0; i < listarr.length; i++){
        let pric = `${listarr[i].price}`;

        (function(index){
            document.querySelectorAll('.input')[i].addEventListener('click', function(e){

                listarr[index].count++
                // 불러온 store.json의 products object요소에서 해당 index의 count객체값을 ++해줌

                let storage = document.querySelector('.storage-list');

                let clone = e.target.parentNode.cloneNode(true); // 노드 복사하기
                let element = document.createElement('div'); // 새 div 요소 생성하고 변수에 저장
                element.insertAdjacentHTML("beforeend", clone.outerHTML); 
                // 새 div 요소에 복사한 노드 붙여넣기 (.outherHTML은 해당 요소의 직렬화된 html파편을 가져오는 역할)
    
                let stortitle = Array.from(storage.getElementsByTagName('li'))
                let eletitle = Array.from(element.childNodes)
                        
                for(o = 0; o < stortitle.length; o++){
                    if(stortitle[o].classList.value == eletitle[0].classList.value){
                        stortitle[o].remove()
                        // storage.lastChild.remove()
                    }
                }
                clickadd();
    
                if(document.querySelector('.storage-list-text')){
                    document.querySelector('.storage-list-text').remove()
                } // 여기로 드레그 텍스트 문구 있을시 텍스트 지우기 & 
                    
                    

                function clickadd(){

                    clickcount = listarr[index].count;
                    addpric = pric * listarr[index].count;
                    savedprice = addpric + dragpric;
                    savedcount = clickcount + dragcount;
                    let plus = `<p>갯수 : ${savedcount}</p>`;
    
                    element.firstChild.removeChild(element.querySelector(".input")) 
                    // 장바구니에 추가하는 상품에 기존에 있던 담기 태그 삭제
                    element.firstChild.setAttribute("draggable", "false");
                    // 장바구니에 추가하는 상품에 드래그 기능 삭제
                    element.firstChild.insertAdjacentHTML('beforeend', plus);
                    // 장바구니에 추가하는 상품에 갯수 태그 추가
                    element.querySelector('.product-list > p.price').innerHTML =
                     `<span class="fixed-text">가격 : ${savedprice}</span>`;
                    // 장바구니에 추가하는 상품 가격 변경
                    storage.insertAdjacentHTML('beforeend', element.firstChild.outerHTML);
                    
                }

            })


        })(i);
        
    }

})

    /*drag/ drop 기능*/
    function allowdrop(event){
        event.preventDefault();
    }
    let idx = ''; // drop할때 index값
    function drag(event){
        $.get('/store.json')
        .done(function(a){
            listarr = a.products

            for(let i = 0; i < listarr.length; i++){
                document.querySelectorAll('.product-list')[i].addEventListener('drag', function(){
                    idx = i
                    //drag할때 선택했던 product-list의 index값을 idx변수에 저장
                })
            }
        })
        
        

        let data = event.target.cloneNode(true);
        if(data.classList.contains('product-list')){
            event.dataTransfer.setData("drag", data.outerHTML);
        }
    }
    $.get('/store.json')
        .done(function(a){
        document.querySelector('.storage-list').addEventListener('drop', function(event){
        event.preventDefault();

        let storage = document.querySelector('.storage-list')

        let data = event.dataTransfer.getData("drag");
        let element = document.createElement("div");
        element.innerHTML = data;

        let eletitle = Array.from(element.childNodes)

            
            draglistarr = a.products;
            
            let stortitle = Array.from(storage.getElementsByTagName('li'))

            for(let o = 0; o < stortitle.length; o++){
                if(stortitle[o].classList.value == eletitle[0].classList.value){
                    stortitle[o].remove()
                    console.log('앙')
                }
            }
            dragadd();


            function dragadd(){

                draglistarr[idx].count++

                if(event.target.querySelector('.storage-list-text')){
                    event.target.removeChild(document.getElementsByClassName("storage-list-text")[0])                
                }
                
                let pric = `${draglistarr[idx].price}`;

                dragcount = draglistarr[idx].count;
                dragpric = pric * draglistarr[idx].count;
                savedprice = addpric + dragpric;
                savedcount = clickcount + dragcount;
                let plus = `<p>갯수 : ${savedcount}</p>`;

                element.firstChild.removeChild(element.querySelector(".input")) 
                // 장바구니에 추가하는 상품에 기존에 있던 담기 태그 삭제
                element.firstChild.setAttribute("draggable", "false");
                // 장바구니에 추가하는 상품에 드래그 기능 삭제
                element.firstChild.insertAdjacentHTML('beforeend', plus);
                // 장바구니에 추가하는 상품에 갯수 태그 추가
                element.querySelector('.product-list > p.price').innerHTML =
                    `<span class="fixed-text">가격 : ${savedprice}</span>`;
                // 장바구니에 추가하는 상품 가격 변경
                storage.insertAdjacentHTML('beforeend', element.firstChild.outerHTML);

            }
    
        

        //다음 할 일 : 물건을 담았는데 그 물건이 중복된 물건이면 물건 리스트를 추가하지 말고 카운트를 늘려줘
        })
})


    


/**/

