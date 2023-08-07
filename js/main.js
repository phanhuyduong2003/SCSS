var RUN = {
    handleOpenNav: () => {
        function openNav() {
            document.getElementById('sidebar').style.transform = 'translateX(0)';
            // document.getElementById('sidebar').style.width = '375px';
            document.querySelector('body').classList.add('menu-open');
            // document.querySelector('.header').style.backgroundColor = 'transparent';
        }
        $('.menu-toggle').on('click', openNav);
    },
    handleCloseNav: () => {
        function closeNav() {
            document.getElementById('sidebar').style.transform = 'translateX(-375px)';
            document.querySelector('body').classList.remove('menu-open');
            // document.querySelector('.header').style.backgroundColor = 'white';
        }
        $('.closebtn').on('click', closeNav);

        function handleMousePos(event) {
            var mouseClickWidth = event.clientX;
            if (mouseClickWidth >= 375) {
                document.getElementById('sidebar').style.transform = 'translateX(-375px)';
                document.querySelector('body').classList.remove('menu-open');
                // document.querySelector('.header').style.backgroundColor = 'white';
            }
        }
        document.addEventListener('click', handleMousePos);
    },
    handleScrollMenuBar: () => {
        window.onscroll = function menuScroll() {
            if (window.scrollY > 1) {
                document.querySelector('.info-bar').style.opacity = '0';
                document.querySelector('.header').style.top = '0';
            } else {
                document.querySelector('.info-bar').style.opacity = '1';
                document.querySelector('.header').style.removeProperty('top');
            }
        };
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
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
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
        RUN.handleOpenNav();
        RUN.handleCloseNav();
        RUN.handleScrollMenuBar();
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
