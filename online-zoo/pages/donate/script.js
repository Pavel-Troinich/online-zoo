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

// Amount

const dotsCollection = document.querySelectorAll('.pay__point');
const inputAmount = document.querySelector('.feed__input');
let currentDot;
inputAmount.value = 100;


const changeDotClass = () => {
  dotsCollection.forEach(dot => {
    dot.firstElementChild.addEventListener('click', event => {
      dotsCollection.forEach(dot => {
        if (dot.firstElementChild.classList.contains('active')) {
          dot.firstElementChild.classList.remove('active');
        }
      });
      let currentDot = event.currentTarget;
      currentDot.classList.add('active');
      inputAmount.value = +currentDot.nextElementSibling.innerHTML.slice(1);      
    });
  });
};

inputAmount.addEventListener('input', () => { 
  let currentActive = document.querySelector('.active');
  if (currentActive) {
      currentActive.classList.remove('active');
  } 
  dotsCollection.forEach(dot => {
    if(+inputAmount.value === +dot.lastElementChild.innerHTML.slice(1)) {      
      dot.firstElementChild.classList.add('active');
    } else {        
      console.log(inputAmount.value);
    }
  })
  if (+inputAmount.value > 9999) {
    inputAmount.value = inputAmount.value.slice(0, 4);
    alert('Exceeded amount!');
  }
});

changeDotClass();