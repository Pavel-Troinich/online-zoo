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
