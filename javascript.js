var animateHTML = function () {
  var elems,
  shdowelems,
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
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top;
      if (posFromTop - windowHeight <= 0) {
    	  for (var j = 1; j < 7; j++){
    		  charts[j-1].classList.add("bounce-chart" + j);
    	      shadow[j-1].classList.add("bounce-chart" + j);
    	  }
      }
    }
  };

  return {
    init: init };

};

animateHTML().init();
