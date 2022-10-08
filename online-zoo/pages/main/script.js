// Burger

const body = document.querySelector('body');
const closeMenu = document.querySelector('.burger__close');
const burgerIcon = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger');
const shadow = document.querySelector('.burger_shadow');

burgerIcon.addEventListener('click', openBurger);
closeMenu.addEventListener('click', closeBurger);

function switchMenu() {
  shadow.classList.toggle('shadow');
  burgerMenu.classList.toggle('open');  
  body.classList.toggle('body_hidden');  
}

function openBurger() {
  switchMenu();
  shadow.addEventListener('click', closeBurger);
}

function closeBurger() {
  switchMenu();
  shadow.removeEventListener('click', closeBurger);
}


// Testimonials slider

const slider = document.querySelector('.testimonials__slider');
const testimonials = document.querySelector('.testimonials-content');
slider.value = 0;
slider.addEventListener('input', () => {
  if (document.documentElement.clientWidth > 1220) {
    testimonials.style.transform = 'translateX(-' + 297 * slider.value + 'px)';
  } else {
    testimonials.style.transform = 'translateX(-' + 323 * slider.value + 'px)';
  }  
});

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth < 1000) {
    slider.value = 0;
    testimonials.style.transform = 'translateX(0px)';
  }  
});



