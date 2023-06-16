// Swiper Function
let destination = new Swiper(".swiper-destination", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

let testimonial = new Swiper(".testimonial-swiper", {
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


