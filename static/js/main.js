
 
    /*=============== Typed animation ===============*/
      var typed = new Typed(".texto", {
        strings: [
            "Java Programmer",
            "Electronics Engieneer",
            "Full-Stack",
            "Data Scientist",
        ],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
    });

 
 /*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
 

 
  /*=============== SERVICES ===============*/
  let  mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const linkWork=document.querySelectorAll('.work__item')

function activeWork(){
  linkWork.forEach(l=>l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l=>l.addEventListener('click', activeWork))



/*==========Modals Service=====================*/
VanillaTilt.init(document.querySelector(".about__img"), {
  max: 25,
  speed: 400
});
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
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 70,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)