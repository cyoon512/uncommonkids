$(document).ready(function(){
  var swiper_1 = new Swiper(".swiper_1", {
    cssMode: true,
    loop: true,
    autoplay: {
      delay: 3500,
      // disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });

  var mo_swiper_1 = new Swiper(".mo_swiper_1", {
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3500,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
})

