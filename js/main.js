function openNav() {
    document.getElementById('sidebar').style.width = '375px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}
function closeNav() {
    document.getElementById('sidebar').style.width = '0';
    document.body.style.backgroundColor = 'white';
}

$(document).ready(function () {
    $('.discount-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrrows: true,
        prevArrow: '<button class="slick-prev__discount-slider"><i class="fi fi-rr-angle-left"></i></button>',
        nextArrow: ' <button class="slick-next__discount-slider"><i class="fi fi-rr-angle-right"></i></button>',
    });
    $('.slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1200,
        autoplaySpeed: 2000,
        dots: true,
        appendDots: $('.dots__slider'),
        prevArrow: $('.slick-prev__slider'),
        nextArrow: $('.slick-next__slider'),
    });
    $('.list-card').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        appendDots: $('.dots__list-card'),
        prevArrow: $('.button-prev__list-card'),
        nextArrow: $('.button-next__list-card'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                },
            },
        ],
    });
    $('.card-slide').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        appendDots: $('.dots__card-slide'),
        prevArrow: $('.button-prev__card-slide'),
        nextArrow: $('.button-next__card-slide'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
    $('.categories-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        // mobileFirst: true,
        infinite: false,
        dots: true,
        appendDots: $('.dots__categories-slider'),
        prevArrow: $('.button-prev__categories-slider'),
        nextArrow: $('.button-next__categories-slider'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
    $('.lifestyle-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        appendDots: $('.dots__lifestyle-slider'),
        prevArrow: $('.button-prev__lifestyle-slider'),
        nextArrow: $('.button-next__lifestyle-slider'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
    $('.image-preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        appendDots: $('.dots__quick-buy'),
        prevArrow: $('.button-prev__quick-buy'),
        nextArrow: $('.button-next__quick-buy'),
    });
    $('.list-services').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        dots: true,
        appendDots: $('.dots__list-services'),
        prevArrow: $('.button-prev__list-services'),
        nextArrow: $('.button-next__list-services'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    });
    $('.list-review').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        appendDots: $('.dots__review'),
        prevArrow: $('.button-prev__review'),
        nextArrow: $('.button-next__review'),
    });
    $('.text-running').slick({
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    });
    $('.btn-1 .fi-ss-plus').on('click', function () {
        $(this).toggleClass('fi-ss-plus fi-ss-minus');
    });
    $('.btn-2 .fi-ss-plus').on('click', function () {
        $(this).toggleClass('fi-ss-plus fi-ss-minus');
    });
    $('.btn-3 .fi-ss-plus').on('click', function () {
        $(this).toggleClass('fi-ss-plus fi-ss-minus');
    });
    $('.content-1').hide();
    $('.content-2').hide();
    $('.content-3').hide();
    $('.btn-1').click(function () {
        $('.content-1').toggle(function () {
            $('.content-1').animate({
                height: 'fit-content',
                width: '100%',
            });
        });
        $('.content-toggle').addClass('show-content');
    });
    $('.btn-2').click(function () {
        $('.content-2').toggle(function () {
            $('.content-2').animate({
                height: 'fit-content',
                width: '100%',
            });
        });
        $('.content-toggle').addClass('show-content');
    });
    $('.btn-3').click(function () {
        $('.content-3').toggle(function () {
            $('.content-3').animate({
                height: 'fit-content',
                width: '100%',
            });
        });
    });

    const quantity = document.querySelector('.quantity');
    const decrementButton = document.querySelector('.decrement');
    const incrementButton = document.querySelector('.increment');
    function incrementQuantity() {
        let quantity_new = parseInt(quantity.textContent);
        quantity_new++;
        quantity.textContent = quantity_new;
    }
    function decrementQuantity() {
        let quantity_new = parseInt(quantity.textContent);
        if (quantity_new > 1) {
            quantity_new--;
            quantity.textContent = quantity_new;
        }
    }
    decrementButton.addEventListener('click', decrementQuantity);
    incrementButton.addEventListener('click', incrementQuantity);
});
