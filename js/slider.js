function windowSize() {
  var myWidth = 0, myHeight = 0;
  var result=1;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    if (window.innerWidth > 1200) {
      result=3;
    }
    else if (window.innerWidth > 400) {
      result =2;
    }
  }
  return result;
}

$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: windowSize(),
    spaceBetween: 20, 
    loop: true,

        // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })
});

