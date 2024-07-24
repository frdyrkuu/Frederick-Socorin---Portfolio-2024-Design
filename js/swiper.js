var swiper = new Swiper(".mySwiper", {
  grabCursor: true,

  crossFade: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  loop: true,
  speed: 2000,
  freeMode: true,
 
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
     
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      
    },
  },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

// Prevent default action on image click
document.querySelectorAll(".swiper-slide img").forEach((img) => {
  img.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
