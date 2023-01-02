const subSwiper = new Swiper(".photo1-sub", {
  cssMode: true,
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
const swiper = new Swiper(".photo1", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: subSwiper,
  },
  mousewheel: true,
  keyboard: true,
});
const subSwiper2 = new Swiper(".subSwiper2", {
  cssMode: true,
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
const swiper2 = new Swiper(".mainSwiper2", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: subSwiper2,
  },
  mousewheel: true,
  keyboard: true,
});
const subSwiper3 = new Swiper(".subSwiper3", {
  cssMode: true,
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
const swiper3 = new Swiper(".mainSwiper3", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: subSwiper3,
  },
  mousewheel: true,
  keyboard: true,
});
const subSwiper4 = new Swiper(".subSwiper4", {
  cssMode: true,
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
const swiper4 = new Swiper(".mainSwiper4", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  thumbs: {
    swiper: subSwiper4,
  },
  mousewheel: true,
  keyboard: true,
});

console.log("hello2023");
