var burger = document.querySelector('.burger')

burger.addEventListener('click', myFunction)

function myFunction() {
  var element = document.querySelector('.header__menu')
  var body = document.querySelector('body')
  body.classList.toggle('active')
  element.classList.toggle('active')
  burger.classList.toggle('active')
}

const navLinks = document.querySelectorAll('.header__menu-link');
for (let navLink of navLinks) {
    navLink.addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        var element2 = document.querySelector('.header__menu')
        var burger2 = document.querySelector('.burger')
        var body2 = document.querySelector('body')
        body2.classList.remove('active')
        element2.classList.remove('active')
        burger2.classList.remove('active')
        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('.header').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
        document.querySelector('body').classList.remove('menu-open')
    });
};

let tab = document.querySelectorAll('.tab-header'),
  tabContent = document.querySelectorAll('.tab-content')

tab.forEach(function (tab, i) {
  tab.addEventListener('click', function () {
    hideTab()
    this.classList.add('tab-header_show')
    tabContent[i].classList.add('tab-content_show')
  })
})

function hideTab() {
  tab.forEach(item => {
    item.classList.remove('tab-header_show')
  })
  tabContent.forEach(item => {
    item.classList.remove('tab-content_show')
  })
}

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show')
    }
  })
}
let options = { threshold: [0.5] }
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.element-animation')
for (let elm of elements) {
  observer.observe(elm)
}

const swiper = new Swiper('.partners__container', {
  slidesPerView: 1,
  spaceBetween: 23,
  loop: true,
  navigation: {
    nextEl: '.partners__right.swiper-button-next',
    prevEl: '.partners__left.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 1.2,
      loop: true,
    },

    706: {
      slidesPerView: 1.7,
      loop: false,
    },

    992: {
      loop: false,
      slidesPerView: 2.3,
      allowTouchMove: true,
    },

    1161: {
      slidesPerView: 3,
      loop: false,
      allowTouchMove: false,
    },
  },
})
