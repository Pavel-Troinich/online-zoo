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
const testimonialsContainer = document.querySelector('.testimonials-content');
const testimonialCards = document.querySelectorAll('.testimonials-card');
const testimonials = document.querySelector('.testimonials');

slider.value = 0;
slider.addEventListener('input', () => {
  if (document.documentElement.clientWidth > 1220) {
    testimonialsContainer.style.transform = 'translateX(-' + 297 * slider.value + 'px)';
  } else {
    testimonialsContainer.style.transform = 'translateX(-' + 323 * slider.value + 'px)';
  }  
});

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth < 1000) {
    slider.value = 0;
    testimonialsContainer.style.transform = 'translate(0px, 0px)';
  }  
});

testimonialCards.forEach((item) => item.addEventListener('click', openModal));

function openModal(e) {
  if (document.documentElement.clientWidth < 1000) {
    let cardHtml = e.currentTarget.innerHTML
    let overlay = document.createElement('div');
    overlay.className = "overlay";
    overlay.innerHTML = `
      <div class="modal-card" onclick="event.stopPropagation()">
        <div class="card-close">
          <img class="modal-close" src="../../assets/icons/close_pop.png" alt="close">
        </div>
        ${cardHtml}
      </div>
    `;

    testimonials.prepend(overlay);
    body.classList.add('body_hidden');
    const closeIcon = document.querySelector('.modal-close');
    
    const closeModal = () => {
      body.classList.remove('body_hidden');
      overlay.remove();
    };  

    overlay.addEventListener('click', closeModal);
    closeIcon.addEventListener('click', closeModal);

    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth >= 1000) closeModal();
    });
  }
};

