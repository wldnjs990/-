 
/**/
let list = 
`
<li class="product-list" id="list" draggable="true">
    <img src="pr1.JPG" alt="식기세척기">
    <p class="main-title"></p>
    <p class="sub-title"></p>
    <p class="price">
    <span class="fixed-text">가격 :</span>
    <span class="money"00000</span>
    </p>
    <span class="input">담기</span>
    <div class = "btn-box" style = "display : none">
        <button class = "minus-btn">-</button>
        <button class = "plus-btn">+</button>
        <button class = "erase-btn">삭제</button>
    </div>
</li>
`
let storagelist = '';
// 장바구니에 담긴 product-list들
/*1*/
let = products = document.querySelector('.products')

let listarr = ''; // 클릭 listarr
let storage = document.querySelector('.storage-list'); // 장바구니
$.get('/store.json')
.done(function(a){
     /*1.html형성*/
     listarr = a.products
     for(i = 0; i < listarr.length; i++){
         list = 
         `
         <li class="${listarr[i].id} product-list" id="list" draggable="true">
             <img src="${listarr[i].photo}" alt="식기세척기">
             <p class="main-title">${listarr[i].title}</p>
             <p class="sub-title">${listarr[i].brand}</p>
             <p class="price">
                <span class="fixed-text">가격 :</span>
                <span class="money">${listarr[i].price}</span>
             </p>
             <span class="input">담기</span>
             <div class = "btn-box" style = "display : none">
                <button class = "minus-btn">-</button>
                <button class = "plus-btn">+</button>
                <button class = "erase-btn">삭제</button>
            </div>
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
            for(i = 0; i < listarr.length; i++){
                document.querySelectorAll('.product-list')[i].style.display = 'block';
            }
        }

        function filterlist(){
            for(i = 0; i < listarr.length; i++){
                if(listarr[i].title.includes(text)){
                    document.querySelectorAll('.product-list')[i].style.display = 'block';
                } else {
                    document.querySelectorAll('.product-list')[i].style.display = 'none';
                }
            }
        }

    })
    /* 3.click / drag 추가 기능*/
    let btn = 
    `
    <div class = "btn-box">
        <button class = "minus-btn">-</button>
        <button class = "plus-btn">+</button>
        <button class = "erase-btn">삭제</button>
    </div>
    `;
    /* 장바구니에 담을때 생기는 버튼 꾸러미 변수 */

    for(i = 0; i < document.querySelectorAll('.product-list').length; i++){
        let pric = `${listarr[i].price}`;

        //(function(파라미터){}) 를 이용하면 for이나 each로 만든 순서를 파라미터에 저장해 계속 사용이 가능하다.
        (function(index){
            /* click */
            document.querySelectorAll('.input')[index].addEventListener('click', function(e){

                console.log('클릭은 된다구')

                listarr[index].count++
                // 불러온 store.json의 products object요소에서 해당 index의 count객체값을 ++해줌


                let clone = e.target.parentNode.cloneNode(true); // 노드 복사하기
                let element = document.createElement('div'); // 새 div 요소 생성하고 변수에 저장
                element.insertAdjacentHTML("beforeend", clone.outerHTML); 
                // 새 div 요소에 복사한 노드 붙여넣기 (.outherHTML은 해당 요소의 직렬화된 html파편을 가져오는 역할)
    
                let stortitle = Array.from(storage.getElementsByTagName('li')) // storage-list 안에 있는 li 요소들을 array 형태로 정렬
                let eletitle = Array.from(element.childNodes) // element(새로 형성한 div) 안에 있는 childNodes(안에 li만 있음)요소들을 array 형태로 정렬
            
                for(o = 0; o < stortitle.length; o++){
                    if(stortitle[o].classList.value == eletitle[0].classList.value){
                        stortitle[o].remove()
                        // storage.lastChild.remove()
                    }
                }
                clickadd();                    
                    

                function clickadd(){

                    if(document.querySelector('.storage-list-text')){
                        document.querySelector('.storage-list-text').remove()
                    } // 여기로 드레그 텍스트 문구 있을시 텍스트 지우기 & 

                    let plus = `<p>갯수 : <span class = "pro-count">${listarr[index].count}</span></p>`;
    
                    element.firstChild.removeChild(element.querySelector(".input")) 
                    // 장바구니에 추가하는 상품에 기존에 있던 담기 태그 삭제
                    element.firstChild.setAttribute("draggable", "false");
                    // 장바구니에 추가하는 상품에 드래그 기능 삭제
                    element.firstChild.insertAdjacentHTML('beforeend', plus);
                    // 장바구니에 추가하는 상품에 갯수 태그 추가
                    element.firstChild.querySelector('.btn-box').remove()
                    element.firstChild.insertAdjacentHTML('beforeend', btn);
                    // 장바구니에 추가하는 상품에 버튼 꾸러미 추가(기존에 있던 버튼박스는 쿼리설렉터가 오류인식을 하지 않게 일부러 만들어 둔 거)
                    element.querySelector('.product-list > p.price').innerHTML =
                     `
                    <span class="fixed-text">가격 :</span>
                    <span class="money">${pric * listarr[index].count}</span>`;
                    // 장바구니에 추가하는 상품 가격 변경
                    storage.insertAdjacentHTML('beforeend', element.firstChild.outerHTML);
                    
                    addprice();

                    function addprice(){
                        const storlist = storage.querySelectorAll('li');
                        let price = 0;
    
                        for(let p = 0; p < storlist.length; p++){
                            price = price + parseInt(storlist[p].querySelector('.money').innerText)
                        }
                        document.querySelector('.buy-products .price').innerHTML = `합계 : <span class = "add-price">${price}</span>`;
                    }
                    storagelist = storage.querySelectorAll('.product-list');
                    // 장바구니 안에 있는 product-list 갱신
                }
            })

            /* drag */
            let dragstart = ''; // 드래그 대상
            let dragtarget = ''; // product-list에서 drag 이벤트를 사용할때 지목된 대상
            let dragelement = document.createElement('div'); // product-list에서 drag 이벤트를 사용하여 복사한 clone을 저장하는 변수
            document.addEventListener('dragstart', function(e){
                dragstart = e.target
            })

            document.querySelectorAll('.product-list')[index].addEventListener('drag', function(event){

                let dragclone = event.target.cloneNode(true);
                dragelement.innerHTML = dragclone.outerHTML;
                dragtarget = event.target;

            })

            document.querySelector('.storage-list').addEventListener('dragover', function(event){
                event.preventDefault();
            })

            document.querySelector('.storage-list').addEventListener('drop', function(event){
                event.preventDefault();

                if(dragstart.outerHTML == dragtarget.outerHTML){

                    let eletitle = Array.from(dragelement.childNodes)
                    let stortitle = Array.from(storage.getElementsByTagName('li'))
            
                        
                    dragadd();
                
                    function dragadd(){
                        
                        if(dragtarget == document.querySelectorAll('.product-list')[index]){

                            listarr[index].count++

                            for(let o = 0; o < stortitle.length; o++){
                                if(stortitle[o].classList.value == eletitle[0].classList.value){
                                    stortitle[o].remove()
                                }
                            }

                            if(event.target.querySelector('.storage-list-text')){
                                event.target.removeChild(document.getElementsByClassName("storage-list-text")[0])                
                            }
                                    

                            let plus = `<p>갯수 : <span class = "pro-count">${listarr[index].count}</span></p>`;

                            dragelement.firstChild.removeChild(dragelement.querySelector(".input")) 
                            // 장바구니에 추가하는 상품에 기존에 있던 담기 태그 삭제
                            dragelement.firstChild.setAttribute("draggable", "false");
                            // 장바구니에 추가하는 상품에 드래그 기능 삭제
                            dragelement.firstChild.insertAdjacentHTML('beforeend', plus);
                            // 장바구니에 추가하는 상품에 갯수 태그 추가
                            dragelement.firstChild.querySelector('.btn-box').remove()
                            dragelement.firstChild.insertAdjacentHTML('beforeend', btn);
                            // 장바구니에 추가하는 상품에 버튼 꾸러미 추가(기존에 있던 버튼박스는 쿼리설렉터가 오류인식을 하지 않게 일부러 만들어 둔 거)
                            dragelement.querySelector('.product-list > p.price').innerHTML =
                                `
                                <span class="fixed-text">가격 :</span>
                                <span class="money">${pric * listarr[index].count}</span>`;
                            // 장바구니에 추가하는 상품 가격 변경
                            storage.insertAdjacentHTML('beforeend', dragelement.firstChild.outerHTML);
            
                            addprice();

                            function addprice(){
                                const storlist = storage.querySelectorAll('li');
                                let price = 0;
            
                                for(let p = 0; p < storlist.length; p++){
                                    price = price + parseInt(storlist[p].querySelector('.money').innerText)
                                }

                                document.querySelector('.buy-products .price').innerHTML = `합계 : <span class = "add-price">${price}</span>`;
                            }
                        }
                    }
                }    
            })
        })(i);

        
    }

    /* 장바구니 물건 추가 / 감소 / 삭제 */
    storage.addEventListener('mouseenter', function(){
        storagelist = storage.querySelectorAll('.product-list');
        // 장바구니 안에 있는 product-list 갱신
    })   
    storage.addEventListener('click', function(e){
        let text = `<p class="storage-list-text">여기로 드래그</p>`;
        if(e.target.classList.value == "plus-btn"){

            let number = e.target.parentNode.parentNode.classList[0];
            listarr[number].count++

            let productlist = e.target.parentNode.parentNode;
            let count = `${listarr[number].count}`;
            let price = `${listarr[number].count * listarr[number].price}`;

            productlist.querySelector('.pro-count').innerHTML = count;
            productlist.querySelector('.money').innerHTML = price;

            addprice();

            function addprice(){
                const storlist = storage.querySelectorAll('li');
                let price = 0;

                for(let p = 0; p < storlist.length; p++){
                    price = price + parseInt(storlist[p].querySelector('.money').innerText)
                }
                document.querySelector('.buy-products .price').innerHTML = `합계 : <span class = "add-price">${price}</span>`;
            }
            storagelist = storage.querySelectorAll('.product-list');
            // 장바구니 안에 있는 product-list 갱신
        }
        if(e.target.classList.value == "minus-btn"){

            let number = e.target.parentNode.parentNode.classList[0];
            listarr[number].count--

            let productlist = e.target.parentNode.parentNode;
            let count = `${listarr[number].count}`;
            let price = `${listarr[number].count * listarr[number].price}`;

            if(productlist.querySelector('.pro-count').innerHTML <= 1){
                listarr[number].count++
                
            } else {
                productlist.querySelector('.pro-count').innerHTML = count;
                productlist.querySelector('.money').innerHTML = price;
            }
            

            addprice();

            function addprice(){
                const storlist = storage.querySelectorAll('li');
                let price = 0;

                for(let p = 0; p < storlist.length; p++){
                    price = price + parseInt(storlist[p].querySelector('.money').innerText)
                }
                document.querySelector('.buy-products .price').innerHTML = `합계 : <span class = "add-price">${price}</span>`;
            }
            storagelist = storage.querySelectorAll('.product-list');
            // 장바구니 안에 있는 product-list 갱신
        }
        if(e.target.classList.value == "erase-btn"){

            let number = e.target.parentNode.parentNode.classList[0];
            listarr[number].count = 0;

            let productlist = e.target.parentNode.parentNode;
            let count = `${listarr[number].count}`;
            let price = `${listarr[number].count * listarr[number].price}`;

                productlist.querySelector('.pro-count').innerHTML = count;
                productlist.querySelector('.money').innerHTML = price;
            
                productlist.remove()
                if(storage.querySelector('.product-list') == null){
                    storage.innerHTML = text;
                }

            addprice();

            function addprice(){
                const storlist = storage.querySelectorAll('li');
                let price = 0;

                for(let p = 0; p < storlist.length; p++){
                    price = price + parseInt(storlist[p].querySelector('.money').innerText)
                }
                document.querySelector('.buy-products .price').innerHTML = `합계 : <span class = "add-price">${price}</span>`;
            }
            storagelist = storage.querySelectorAll('.product-list');
            // 장바구니 안에 있는 product-list 갱신
        }
    })
})

/* 구매하기 버튼 기능 (영수증)*/
document.querySelector('.buy').addEventListener('click', function(){

    document.querySelector('.bill-box').innerHTML = '';
    // 영수증 목록 비우기

    if(!storage.querySelector('.storage-list-text')){
        for(let i = 0; i < storagelist.length; i++){
            
            let billtitle = storagelist[i].querySelector('.main-title').innerText;
            let billcompany = storagelist[i].querySelector('.sub-title').innerText;
            let billcount = storagelist[i].querySelector('.pro-count').innerText;
            let billprice = storagelist[i].querySelector('.money').innerText;

            let bill = 
                `
                <div class="product-bill">
                    <p class="bill-product">${billtitle}</p>
                    <p class="bill-company">${billcompany}</p>
                    <p class="bill-count">수량 : ${billcount}</p>
                    <p class="bill-price">가격 : ${billprice}</p>
                </div>
                `
            document.querySelector('.bill-box').insertAdjacentHTML('beforeend', bill);
        } 
        // 장바구니 담긴 리스트 영수증으로 변환

        let finalprice = document.querySelector('.add-price').innerText;
        document.querySelector('.final-price').innerHTML = `최종가격 : ${finalprice}`;
        // 최종가격 변환

        document.querySelector('.bill-bg').style.display = 'block';
        // 영수증 보여주기
    } else {
        alert("장바구니에 물건이 담기지 않았습니다.")
    }
})

/* 영수증 닫기 버튼 기능 */
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bill-bg').style.display = 'none';
})

/**/

// 다음 할 일 : 장바구니에 담긴 물건 삭제, 갯수 빼기, 더하기 버튼 구현하기
// json 데이터 연결한 클로저 안에서 만들면 listarr[i].count의 정보가 저장되어 있으니 
// 더하기, 빼기 버튼 누르면 해당 listarr[i].count가 ++ 되거나 -- 되게 구현해서 장바구니 갯수(.pro-count)랑 가격(.money) innerHTML로 수정하기
// 삭제 버튼 누르면 해당 listarr[i].count를 0으로 초기화 하고 해당요소를 remove()한다.

// 해당 요소의 listarr 순번은 class에 넣어둔 0, 1, 2 class명을 .value로 가져와서 변수로 만든 다음 listarr[i]에 변수명을 집어넣어서 사용하면 되지 않을까?
// (json에 있는 id object를 ${}를 활용해 class에 넣었었음)

// 추가로 장바구니에 물건이 다 사라지면 여기로 드래그 텍스트 다시 생성하는 기능도 구현하자

// 화이또


/**/

