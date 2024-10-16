$(document).ready(function(){
  var swiper_3 = new Swiper(".swiper_3", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('.menu_3').each(function(index){
    $(this).attr('data-index',index);
  });

  $('.menu_3').click(function(){
    var choice = $(this).attr('data-index');
    $('.menu_3').removeClass('menu_3_act');
    $('.menu_3').eq(choice).addClass('menu_3_act');
  });
})

  
