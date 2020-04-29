function windowSize() {
  var slidesPerView = 1;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    if (window.innerWidth > 1200) {
      slidesPerView=3;
    }
    else if (window.innerWidth > 420) {
      slidesPerView=2;
    }
  }
  return slidesPerView;
}

function swiperInit() {
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
  });
}

$(window).on('resize', function () {
    swiperInit();
});


$(document).ready(function () {
    //initialize swiper when document ready
    swiperInit();
});

