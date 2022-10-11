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



// Pets 

const pets = [
  {
    name: 'Gorillas',
    native: 'Congo',
    img: 'Gorillas.png',
    food: 'banana-bamboo_icon.png'
  },
  {
    name: 'Giant Pandas',
    native: 'Southwest China',
    img: 'Giant_Pandas.png',
    food: 'banana-bamboo_icon.png'
  },
  {
    name: 'Eagles',
    native: 'South America',
    img: 'Eagles.png',
    food: 'meet-fish_icon.png'
  },
  {
    name: 'Two-toed Sloth',
    native: 'Mesoamerica',
    img: 'Two-toed_Sloth.png',
    food: 'banana-bamboo_icon.png'
  },
  {
    name: 'Cheetahs',
    native: 'Africa',
    img: 'cheetahs.png',
    food: 'meet-fish_icon.png'
  },
  {
    name: 'Penguins',
    native: 'Antarctica',
    img: 'Penguins.png',
    food: 'meet-fish_icon.png'
  },
  {
    name: 'Tiger',
    native: 'Southeast Asia',
    img: 'tiger.png',
    food: 'meet-fish_icon.png'
  },
  {
    name: 'Fox',
    native: 'Europe',
    img: 'fox.png',
    food: 'meet-fish_icon.png'
  },
  {
    name: 'Lynx',
    native: 'Siberia',
    img: 'lynx.png',
    food: 'meet-fish_icon.png'
  },
  {
    name: 'Elephant',
    native: 'Africa, India',
    img: 'elefant.png',
    food: 'banana-bamboo_icon.png'
  },
  {
    name: 'Rabbit',
    native: 'Everywhere',
    img: 'rabbit.png',
    food: 'banana-bamboo_icon.png'
  },
  {
    name: 'Zebra',
    native: 'Africa',
    img: 'zebra.png',
    food: 'banana-bamboo_icon.png'
  },
  {
    name: 'Polar bear',
    native: 'Arctica',
    img: 'polar_bear.png',
    food: 'meet-fish_icon.png'
  },
  {
    name: 'Deer',
    native: 'Europe',
    img: 'deer.png',
    food: 'banana-bamboo_icon.png'
  },
];

const petsContainer = document.querySelectorAll('.pets-slider');
const nextBtn = document.querySelector('.pets-next');
const prevBtn = document.querySelector('.pets-prev');
let currentItem = 0;
let isEnabled = true;

petsContainer.forEach( item => item.innerHTML = renderCards());

nextBtn.addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

prevBtn.addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

function changeCurrentItem(n) {
	currentItem = (n + petsContainer.length) % petsContainer.length;
};

function hideItem(direction) {
	isEnabled = false;
	petsContainer[currentItem].classList.add(direction);
	petsContainer[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);    
	});
};

function showItem(direction) {
	petsContainer[currentItem].classList.add('next', direction);
	petsContainer[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
    
	});
};

function nextItem(n) {
  hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
  petsContainer.forEach( item => {
    if(!item.classList.contains('active')) item.innerHTML = renderCards();
  }); 
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left'); 
  petsContainer.forEach( item => {
    if(!item.classList.contains('active')) item.innerHTML = renderCards();
  }); 
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

function renderCards() {
  let setCards = '';
  shuffle(pets);
  
  if (document.documentElement.clientWidth >= 1000) {
    for (i=0; i < 6; i++) {
      const cardHtml = `
      <div class="pet-cards__card">
        <img class="card__img" src="../../assets/images/${pets[i].img}" alt="Pet">
        <div class="card-description">
          <div>
            <p class="card-description__name">${pets[i].name}</p>
            <p class="card-description__native">Native to ${pets[i].native}</p>
          </div>
          <div class="card-description__food"><img src="../../assets/icons/${pets[i].food}" alt="food"></div>            
        </div>
      </div>
    `;
      setCards += cardHtml;
    }
  } else {
    for (i=0; i < 4; i++) {
      const cardHtml = `
      <div class="pet-cards__card">
        <img class="card__img" src="../../assets/images/${pets[i].img}" alt="Pet">
        <div class="card-description">
          <div>
            <p class="card-description__name">${pets[i].name}</p>
            <p class="card-description__native">Native to ${pets[i].native}</p>
          </div>
          <div class="card-description__food"><img src="../../assets/icons/${pets[i].food}" alt="food"></div>            
        </div>
      </div>
    `;
      setCards += cardHtml;
    }
  }

  return setCards;
}