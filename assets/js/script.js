// MENU MOBILE SCRIPTS

const menuMobile = document.querySelector('.header__nav-mobile');
const menuIcon = document.querySelector('.header__icon img');

function activeMenu() {
  menuMobile.classList.toggle('hidden');
  menuIcon.setAttribute('src', './assets/img/menu-icon-open.svg');

  if(menuMobile.classList.contains('hidden')) {
    menuIcon.setAttribute('src', './assets/img/menu-icon-close.svg');
  }
}

menuIcon.addEventListener('click', activeMenu);

// FAQ SECTION SCRIPTS

const faqQuestions = document.querySelectorAll('.faq__questions li');
const faqAnswers = document.querySelectorAll('.faq__answers li');

function activeQuestion(event) {
  for (let item of faqQuestions) {
    item.classList.remove('question-item--active');
  }

  for (let item of faqAnswers) {
    item.classList.remove('answer-item--active');
  }

  event.target.classList.add('question-item--active');

  for (var i = 0; i < faqQuestions.length; i++) {
    if (faqQuestions[i].classList.contains('question-item--active')) {
      faqAnswers[i].classList.add('answer-item--active');
    }
  }
}

for (let item of faqQuestions) {
  item.addEventListener('click', activeQuestion);
}