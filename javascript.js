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
