// 팝업창 이미지 슬라이드
    const modalSlides = document.querySelector('.modal-slides'); 
    const slideImg = document.querySelectorAll('.modal-img');
    let modalCurrentIdx = 0; 
    const modalSlideCount = slideImg.length; 
    const modalPrev = document.querySelector('.modal-prev'); 
    const modalNext = document.querySelector('.modal-next'); 
    const modalSlideWidth = 700; 
    const modalSlideMargin = 0; 
    
    modalSlides.style.width = (modalSlideWidth + modalSlideMargin) * modalSlideCount + 'px'; 
    
    function modlaMoveSlide(num) { 
        modalSlides.style.left = -num * 700 + 'px'; 
        modalCurrentIdx = num;  
    } 
    
    modalPrev.addEventListener('click', function () { 
        if (modalCurrentIdx !== 0) modlaMoveSlide(modalCurrentIdx - 1); 
    }); 
    
    modalNext.addEventListener('click', function () {
        console.log(modalSlideCount);
        console.log(modalCurrentIdx);
        if (modalCurrentIdx !== modalSlideCount - 1) { modlaMoveSlide(modalCurrentIdx + 1); } 
    });

// 팝업창 내용 설정
    const buttons = document.querySelectorAll('.button'); 

    buttons.forEach( (button) => {
        button.addEventListener('click', popup)
    });
    
    function popup(e) {
        document.querySelector('.modal-slides').style.left = '0px';
        modalCurrentIdx = 0;
        document.querySelector(".protectionFilm").style.display = 'block';
        document.querySelector(".modal").style.display = 'block';
        document.querySelector("#img1").style.background = "url('img/slide/"+e.srcElement.id+"1.png') center center / cover";
        document.querySelector("#img2").style.background = "url('img/slide/"+e.srcElement.id+"2.PNG') center center / cover";
        document.querySelector("#img3").style.background = "url('img/slide/"+e.srcElement.id+"3.PNG') center center / cover";
        switch(e.srcElement.id){
            case 'portfolio':
                document.getElementById("modal-title").innerHTML="Portfolio Site";
                document.querySelector("#modal-portfolio").style.display = "block";
                break;
            case 'office':
                document.getElementById("modal-title").innerHTML="Back Office";
                document.querySelector("#modal-office").style.display = "block";
                break;
            case 'english':
                document.getElementById("modal-title").innerHTML="English Village";
                document.querySelector("#modal-english").style.display = "block";
                break;
            case 'detail':
                document.getElementById("modal-title").innerHTML="Goods Detail";
                document.querySelector("#modal-goods").style.display = "block";
                break;
            case 'store':
                document.getElementById("modal-title").innerHTML="Thirty Mall";
                document.querySelector("#modal-store").style.display = "block";
                break;
            case 'search':
                document.getElementById("modal-title").innerHTML="Search";
                document.querySelector("#modal-search").style.display = "block";
                break;
        };
    };

    document.querySelector(".protectionFilm").addEventListener('click', function () {
        document.querySelector(".protectionFilm").style.display = 'none';
        document.querySelector(".modal").style.display = 'none';
        const details = document.querySelectorAll(".modal-detail"); 
        details.forEach( (detail) => {
            detail.style.display = "none"
        });        
    });

    // contact 카드 3d 움직임 구현
    var card = document.querySelector(".moveCard");
    var timeDownUp = null;
    var startXpos = null;
    var startYpos = null;
    var endXpos = 0;
    var endYpos = 0;

    document.querySelector(".card").ondragstart = function() {
    return false;
    };

    card.addEventListener("mousedown", function(){
        timeDownUp = event.clientX + event.clientY;
        startXpos = event.clientX;
        startYpos = event.clientY;
    });

    card.addEventListener("mouseup", function(){
        timeDownUp = event.clientX + event.clientY;
        endXpos = event.clientX;
        endYpos = event.clientY;
    });

    card.addEventListener("mousemove", function() {
        var timeMove = event.clientX + event.clientY;
        timeDownUp += 10;
        
        if (timeMove !== timeDownUp) {
            if (event.which === 1) {
                var mouseXpos = event.clientX;
                var mouseYpos = event.clientY;
                var YrotateDeg = (startXpos - mouseXpos) * -0.257;
                var XrotateDeg = (startYpos - mouseYpos) * 0.6;

                document.getElementById("card").style.transform = "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)";
            }
        } else {
            timeDownUp = null;
        }
    });

    function front(){
        document.getElementById("card").style.transform = "rotateX(0deg) rotateY(0deg)";
    }

    function back(){
        document.getElementById("card").style.transform = "rotateX(0deg) rotateY(180deg)";
    }

    // skill 애니메이션 구현
    var animateHTML = function () {
    var elems,
    charts,
    shadow,
    windowHeight;

    var init = function () {
        elems = document.getElementsByClassName("windows");
        charts = document.getElementsByClassName("bounce-chart");
        shadow = document.getElementsByClassName("bounce-chart-shadow");
        windowHeight = window.innerHeight;
        _addEventHandlers();
    };

    var _addEventHandlers = function () {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("resize", init);
    };
    var _checkPosition = function () {
            if ((elems[0].getBoundingClientRect().top + 100) - windowHeight < 0) {
                for (var i = 1; i < 7; i++){
                    charts[i-1].classList.add("bounce-chart" + i);
                    shadow[i-1].classList.add("bounce-chart" + i);
                }
            }
    };

    return {
        init: init };

    };

    animateHTML().init();

    // career와 education 화면 슬라이드 구현
    const slides = document.querySelector('.slides'); 
    let currentIdx = 0; 
    const slideCount = 2; 
    const prev = document.querySelector('.prev'); 
    const next = document.querySelector('.next'); 
    const slideWidth = window.innerWidth; 
    const slideMargin = window.innerWidth; 
    
    slides.style.width = (slideWidth + slideMargin) * slideCount + 'px'; 
    
    function moveSlide(num) { 
        slides.style.left = -num * window.innerWidth + 'px'; 
        currentIdx = num;  
    } 
    
    prev.addEventListener('click', function () { 
        if (currentIdx !== 0) moveSlide(currentIdx - 1); 
        document.getElementById("change1").style.backgroundColor = "#FAEBEF";
        document.getElementById("change2").style.backgroundColor = "#FAEBEF";
        document.getElementById("change3").style.backgroundColor = "#FAEBEF";
        document.getElementById("prev").style.color = "#333D79";
        document.getElementById("next").style.color = "#333D79";
        document.getElementById("next").style.diplay = "none";
        document.getElementById("career").style.display = "block";
    }); 
    
    next.addEventListener('click', function () {
        if (currentIdx !== slideCount - 1) { moveSlide(currentIdx + 1); } 
        document.getElementById("change1").style.backgroundColor = "#333D79";
        document.getElementById("change2").style.backgroundColor = "#333D79";
        document.getElementById("change3").style.backgroundColor = "#333D79";
        document.getElementById("prev").style.color = "#FAEBEF";
        document.getElementById("next").style.color = "#FAEBEF";
        document.getElementById("prev").style.diplay = "none";
        document.getElementById("career").style.display = "none";
    });
