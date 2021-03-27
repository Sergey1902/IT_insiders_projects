var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    cssMode: true,

    breakpoints: {
        1025: {
            slidesPerView: 3,
        },

        769: {
            slidesPerView: 2,
        },

        350: {
            slidesPerView: 1,
        },
    },

    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})