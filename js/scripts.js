// Custom Scripts


// Custom scripts
document.querySelectorAll('a[data-scroll]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, 
        behavior: 'smooth', 
      });
    }
  });
});

// Custom scripts
// Модальное окно
function bindModal(triggerSelector, modalSelector, closeSelector) {
  const triggers = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const close = modal.querySelector(closeSelector);
  const body = document.body;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'flex';
      body.classList.add('locked');
    });
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    body.classList.remove('locked');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      body.classList.remove('locked');
    }
  });
}

// ПЕРВЫЙ аргумент - класс кнопок, при клике на которые будет открываться модальное окно.
// ВТОРОЙ аргумент - класс самого модального окна.
// ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
bindModal('.button', '.modal__wrapper', '.modal__close');

// Аккордеон
function accordion() {
  const items = document.querySelectorAll('.accordion__item-trigger');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentNode;
      if (parent.classList.contains('accordion__item-active')) {
        parent.classList.remove('accordion__item-active');
      } else {
        document
          .querySelectorAll('.accordion__item')
          .forEach(child => child.classList.remove('accordion__item-active'));
        parent.classList.add('accordion__item-active');
      }
    });
  });
}
accordion();

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.menu__item-link');

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      body.classList.add('locked');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    }
  });

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); 
      const targetId = link.getAttribute('href'); 
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    });
  });

  // Закрытие меню при изменении размера экрана
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    }
  });
}

burgerMenu();



// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)

const heroSwiper = new Swiper('.swiper__hero', {
  // Количество видимых слайдов
  slidesPerView: 1,
  // Расстояние между слайдами
  spaceBetween: 300,
  loop: true, effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Пагинация кликабельная
  },
  // Navigation arrows
  navigation: {
    prevEl: '.arrow-button-prev',
    nextEl: '.arrow-button-next',
  },

});
// Первый слайдер: движение влево
const firstSlider = new Swiper('.clients__slider:not(.clients__slider--2)', {
  slidesPerView: 4.5,
  allowTouchMove: false,
  spaceBetween: 30,
  loop: true,
  speed: 3000, // Скорость
  autoplay: {
    enabled: true,
    delay: 0, // Без пауз
    disableOnInteraction: false,
  },
  direction: 'horizontal',
  breakpoints: {
    320: {
      slidesPerView: 2.3, // На маленьких экранах
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.5, // На планшетах
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4.5, // На больших экранах
      spaceBetween: 30,
    },
  },
});

// Второй слайдер: движение вправо
const secondSlider = new Swiper('.clients__slider--2', {
  slidesPerView: 4.5,
  allowTouchMove: false,
  spaceBetween: 30,
  loop: true,
  speed: 3000, // Скорость
  autoplay: {
    delay: 0, // Без пауз
    disableOnInteraction: false,
    reverseDirection: true
  },
  on: {
    init: function () {
      this.autoplay.running = true; // Запуск автоплей в обратную сторону
      this.autoplay.reverseDirection = true;
    },
  },
  direction: 'horizontal',
  breakpoints: {
    320: {
      slidesPerView: 2.3, // На маленьких экранах
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.5, // На планшетах
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4.5, // На больших экранах
      spaceBetween: 30,
    },
  },
});


const reviewsSwiper = new Swiper('.reviews__swiper', {
  // Количество видимых слайдов
  slidesPerView: 3,
  // Расстояние между слайдами
  spaceBetween: 30,
  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Пагинация кликабельная
  },
  // Адаптивные настройки
  breakpoints: {
    // Ширина >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // Ширина >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // Ширина >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});








