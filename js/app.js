$(document).ready(function () {
  // BURGER
  const burger = $(".burger");
  const nav = $('.nav');
  const body = $('body');

  burger.click(function(){
    burger.toggleClass('active');
    nav.toggleClass('active');
    body.toggleClass('overflow')
  })
  $('.nav__item a').click(function(){
    burger.toggleClass('active');
    nav.toggleClass('active')
    body.toggleClass('overflow')
  })

  //WOW
  wow = new WOW().init();
})