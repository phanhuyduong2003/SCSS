var RUN = {
    openNav: () => {
        document.getElementById('sidebar').style.width = '375px';
        document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
    },
    closeNav: () => {
        document.getElementById('sidebar').style.width = '0';
        document.body.style.backgroundColor = 'white';
    },
    scrollDiscount: () => {
        $('.discount-slider').slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrrows: true,
            prevArrow:
                '<button class="slick-prev__discount-slider"><i class="fi fi-rr-angle-left icon_control"></i></button>',
            nextArrow:
                ' <button class="slick-next__discount-slider"><i class="fi fi-rr-angle-right icon_control"></i></button>',
        });
    },
    scrollBanner: () => {
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
    },
    scrollBestSeller: () => {
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
    },
    scrollFreshFood: () => {
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
    },
    scrollShopCategory: () => {
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
    },
    scrollShopLifeStyle: () => {
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
    },
    scrollProductType: () => {
        $('.image-preview').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            appendDots: $('.dots__quick-buy'),
            prevArrow: $('.button-prev__quick-buy'),
            nextArrow: $('.button-next__quick-buy'),
        });
    },
    scrollListServices: () => {
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
    },
    scrollListReviews: () => {
        $('.list-review').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
            appendDots: $('.dots__review'),
            prevArrow: $('.button-prev__review'),
            nextArrow: $('.button-next__review'),
        });
    },
    handleIncrement: () => {
        function incrementQuantity() {
            let quantity_new = $('.quantity').text();
            quantity_new++;
            $('.quantity').text(quantity_new);
        }
        $('.increment').on('click', incrementQuantity);
    },
    handleDecrement: () => {
        function decrementQuantity() {
            let quantity_new = $('.quantity').text();
            if (quantity_new > 1) {
                quantity_new--;
                $('.quantity').text(quantity_new);
            }
        }
        $('.decrement').on('click', decrementQuantity);
    },
    setAccordion: () => {
        $('.event').accordion({
            icons: false,
            collapsible: true,
            active: false,
            heightStyle: 'content',
        });
    },
    changeIcon: () => {
        $('.event-actions').on('click', function () {
            $(this).find('.button-toggle .icon-plus').toggleClass('fi-ss-plus fi-ss-minus');
        });
    },

    init: () => {
        RUN.openNav();
        RUN.closeNav();
        RUN.scrollDiscount();
        RUN.scrollBanner();
        RUN.scrollBestSeller();
        RUN.scrollFreshFood();
        RUN.scrollShopCategory();
        RUN.scrollShopLifeStyle();
        RUN.scrollProductType();
        RUN.scrollListServices();
        RUN.scrollListReviews();
        RUN.handleIncrement();
        RUN.handleDecrement();
        RUN.setAccordion();
        RUN.changeIcon();
    },
};
$(document).ready(() => {
    setTimeout(() => {
        RUN.init();
    }, 100);
});
