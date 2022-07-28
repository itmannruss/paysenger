var burger = document.querySelector('.burger')

burger.addEventListener('click', myFunction)

function myFunction() {
  var element = document.querySelector('.header__menu')
  var body = document.querySelector('body')
  body.classList.toggle('active')
  element.classList.toggle('active')
  burger.classList.toggle('active')
}

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    var element2 = document.querySelector('.header__menu')
    var burger2 = document.querySelector('.burger')
    var body2 = document.querySelector('body')
    body2.classList.remove('active')
    element2.classList.remove('active')
    burger2.classList.remove('active')
    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}

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
      slidesPerView: 2.4,
    },

    1161: {
      slidesPerView: 3,
      loop: false,
    },
  },
})
