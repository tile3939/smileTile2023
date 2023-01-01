const subSwiper = new Swiper(".subSwiper", {
  cssMode: true,
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
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
const swiper = new Swiper(".mainSwiper", {
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

console.log("hello2023");
