$(document).ready(function(){
  $('.carousel__inner').slick({
    speed: 1500,
    // adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg" alt="left-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg" alt="right-arrow"></button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                dots: true,
                arrows: false
            }
        }
    ]
  });
});