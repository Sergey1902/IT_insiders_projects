var mySwiper = new Swiper('.swiper-container', {
    //Учимся читать по английски, здесь было написано direction: 'vertical', что значит - вертикальная прокрутка (сверху вниз)
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    cssMode: true,

    //If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },


    //Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})