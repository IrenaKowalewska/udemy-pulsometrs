$(document).ready(function () {
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
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleDescription(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    
    toggleDescription('.catalog-item__link');
    toggleDescription('.catalog-item__back');
 
});