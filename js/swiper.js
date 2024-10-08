var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 2000,
  autoplay: {
    delay: 2000,
    // disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
