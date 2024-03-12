// burger header

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let menuLinks = menu.querySelectorAll('.menu__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('header__burger--active')
  menu.classList.toggle('header__menu--active');
});

menuLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {
    menu.classList.remove('header__menu--active');
    burger.classList.remove('header__burger--active');
  });
});

// swiper docs
if( window.innerWidth <= 1024 ){
  new Swiper('.swiper-container', {
    grabCursor: true,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  })
}
