// slider function
$(function(){
    $('.bxslider').bxSlider({
        auto: true,
      captions: true,
      mode:"fade",
      slideWidth: 600,
      speed:500
    });
    $('.slider4').bxSlider({
        auto:true,
        slideWidth: 300,
        minSlides: 2,
        maxSlides: 4,
        moveSlides: 1,
        slideMargin: 10
      });
  });

  // mobile menu

  const menu =document.querySelector(".fa-bars");
  const close =document.querySelector(".fa-xmark");
  const menu_card =document.querySelector("#menu_card");
  menu.addEventListener("click",()=>{
    menu_card.style.right="50%";
  })
  // for clsose the menu
  close.addEventListener("click",()=>{
    menu_card.style.right="100%"
  })