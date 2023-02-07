//слайдер
const slider = document.querySelectorAll(".slider");

slider.forEach(function(item) {
	const sliderItems = Array.from(item.children);
	sliderItems.forEach(function (slide, index) {
		// Скрываем все слайды, кроме первого
		if (index !== 0) slide.classList.add('slider-display_none');
	// добавляем индекс
		slide.dataset.index = index;
		sliderItems[0].setAttribute('data-active', '')
	});
	console.log(sliderItems);
	const btnForward = document.querySelectorAll(".slider-button_direction_forward");
    const btnBack = document.querySelectorAll(".slider-button_direction_back");
// кнопка вперед
btnForward.forEach(function(buttons) {
	buttons.onclick = function () {
	showNextSlide('next');
	console.log('next');
	}
});

// кнопка назад
btnBack.forEach(function (buttons) {
  buttons.onclick = function () {
    showNextSlide("prev");
  };
});

// функция рассчета следующего слайда
function showNextSlide(direction) {
	// Скрываем текущий слайд
	const currentSlide = document.querySelectorAll('[data-active]');

	currentSlide.forEach(function(item) {
		const currentSlideIndex = +item.dataset.index;
	item.classList.add('slider-display_none');
	item.removeAttribute('data-active');
	console.log(currentSlideIndex);

	let nextSlideIndex = 0;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}
	console.log(nextSlideIndex);
	const nextSlide = document.querySelectorAll(`[data-index="${nextSlideIndex}"]`);
	console.log(nextSlide);
	nextSlide.forEach(function(item) {
		item.classList.remove('slider-display_none');
	item.setAttribute('data-active', '');
	});
    });
};
});


//Переключатель
const btnSwitch = document.querySelector(".switch__container");
const switcher = document.querySelector(".switch__slider");
const bodyDark = document.querySelector(".body");
const pageDark = document.querySelector(".page");
const linkDark = document.querySelectorAll(".header__link");
const subtitleDark = document.querySelectorAll(".subtitle");
const buttonDark = document.querySelectorAll(".slider-button_theme_higway");
const applicationDark = document.querySelectorAll(".train__application");
const footerDark = document.querySelector(".footer");
const switchDark = document.querySelector(".switch__container");
const menuDark = document.querySelector(".menu");
const burgerDark = document.querySelector(".burger");
const lineDark = document.querySelectorAll(".burger__line");

btnSwitch.addEventListener('click', function() {
  switcher.classList.toggle("switch__slider_theme_dark");
  bodyDark.classList.toggle("body_dark");
  pageDark.classList.toggle("page_dark");
  linkDark.forEach(function(item) {
    item.classList.toggle("header__link_dark");
  });
  subtitleDark.forEach(function(item) {
    item.classList.toggle("subtitle_dark");
  });
  buttonDark.forEach(function(item) {
    item.classList.toggle("slider-button_theme_dark");
  });
  applicationDark.forEach(function(item) {
    item.classList.toggle("train__application_dark");
  });
  footerDark.classList.toggle("footer_dark");
  switchDark.classList.toggle("switch__container_dark");
  menuDark.classList.toggle("menu_dark");
  burgerDark.classList.toggle("burger_dark");
  lineDark.forEach(function(item) {
    item.classList.toggle("burger__line_dark");
  });

});


//выбор категории велосипеда
const btnKind = document.querySelectorAll(".bike__kind");
const card = document.querySelectorAll(".bike__container-cards");

function choiceKind(btn, kind) {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
      for (let j = 0; j < kind.length; j++) {
        kind[j].classList.remove('bike__container-cards_opened');
        btn[j].classList.remove('bike_active');
      }
      btn[i].classList.add('bike_active');
      kind[i].classList.add('bike__container-cards_opened');
    });
  }
}

choiceKind(btnKind, card);


//открытие меню
const btnBurger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

btnBurger.addEventListener('click', function (){
  menu.classList.toggle("menu_active");
  btnBurger.classList.toggle("burger_active");
})
