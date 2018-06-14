const chevron = document.querySelector('.chevron');
const sectionTop = document.querySelector('#top');


// SCROLL FUNCTION

function scrollTo(element, destination, duration ){
  var start = element.scrollTop,
    change = destination - start,
    currentTime = 0,
    increment = 20;

  var animateScroll = function(){
    currentTime += increment;
    var value = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = value;
    if(currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

// SMOOTH FUNCTION

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

// EVENT AND FUNCTION CALL

chevron.addEventListener('click', function () {
  scrollTo(document.body, 0, 1250);
});