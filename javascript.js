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
        document.getElementById("career").style.display = "block";
    }); 
    
    next.addEventListener('click', function () {
        if (currentIdx !== slideCount - 1) { moveSlide(currentIdx + 1); } 
        document.getElementById("change1").style.backgroundColor = "#333D79";
        document.getElementById("change2").style.backgroundColor = "#333D79";
        document.getElementById("change3").style.backgroundColor = "#333D79";
        document.getElementById("prev").style.color = "#FAEBEF";
        document.getElementById("next").style.color = "#FAEBEF";
        document.getElementById("career").style.display = "none";
    });
