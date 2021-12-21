var card = document.querySelector(".moveCard");
var timeDownUp = null;
var startXpos = null;
var startYpos = null;

card.addEventListener("mousedown", function(){
    timeDownUp = event.clientX + event.clientY;
    startXpos = event.clientX;
    startYpos = event.clientY;
});

card.addEventListener("mouseup", function(){
    timeDownUp = event.clientX + event.clientY;
});

card.addEventListener("mousemove", function() {
    var timeMove = event.clientX + event.clientY;
    timeDownUp += 10;
    
    if (timeMove !== timeDownUp) {
        if (event.which === 1) {
            var mouseXpos = event.clientX;
            var mouseYpos = event.clientY;
            var YrotateDeg = (startXpos - mouseXpos) * -0.3;
            var XrotateDeg = (startYpos - mouseYpos) * 0.3;

            document.getElementById("card").style.transform = "rotateX(" + XrotateDeg + "deg) rotateY(" + YrotateDeg + "deg)";
        }
    } else {
        timeDownUp = null;
    }
});

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
