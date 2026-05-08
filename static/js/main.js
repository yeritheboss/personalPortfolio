/*=============== Typed animation ===============*/
var typed = new Typed(".texto", {
  strings: [
    "Programador Java",
    "Ingeniero electronico de telecomunicaciones",
    "Full-stack developer",
    "Cientifico de datos",
  ],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true,
});

var typed2 = new Typed(".description", {
  strings: [
    "Ingeniero electronico de comunicaciones especializado en desarrollo Java, microservicios y soluciones full-stack. Me muevo comodo entre backend, frontend y datos, con experiencia en Spring Boot, React, Angular, TypeScript, SQL, DevOps y analitica. Me gusta convertir ideas complejas en productos claros, escalables y bien construidos.",
  ],
  typeSpeed: 45,
  backSpeed: 80,
  loop: false,
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('scroll-header')
                     : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader, { passive: true })

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalClose = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i)
  })
})

modalClose.forEach((mc) => {
  mc.addEventListener('click', () => {
    modalViews.forEach((mv) => {
      mv.classList.remove('active-modal')
    })
  })
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 70,
      sectionId = current.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=\'' + sectionId + '\']')

    if (sectionsClass) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link')
      } else {
        sectionsClass.classList.remove('active-link')
      }
    }
  })
}
window.addEventListener('scroll', scrollActive, { passive: true })

/*=============== WORK FILTER ===============*/
const workContainer = document.querySelector('.work__container')

if (workContainer && window.mixitup) {
  mixitup(workContainer, {
    selectors: {
      target: '.work__card'
    },
    animation: {
      duration: 300
    }
  });
}

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=====================SCROLL REVEAL ANIMATION======================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', { delay: 700 })
sr.reveal('.home__img', { delay: 700 })
sr.reveal('.home__social, .home__scroll', { delay: 900, origin: 'bottom' })
