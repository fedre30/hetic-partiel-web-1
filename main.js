// SCROLL

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

// END SCROLL



// NAVBAR

const header = document.querySelector('.row1');
const row3 = document.querySelector('.row3');
var lastScrollTop = 0;

header.classList.add('nav-animation');

window.addEventListener('scroll', function () {
  var scrollDirection = window.pageYOffset || document.documentElement.scrollTop;

  if(row3.getBoundingClientRect().top < header.offsetHeight){
    if(scrollDirection < lastScrollTop){
      header.classList.add('nav-animation');
    }
    else{
      header.classList.remove('nav-animation');
    }

    lastScrollTop = scrollDirection <= 0 ? 0 : scrollDirection

  }

});


// END NAVBAR