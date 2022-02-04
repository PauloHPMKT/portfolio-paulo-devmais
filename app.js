//cache of selectors
const headerMenu = document.querySelectorAll('nav a[href^="#"]')
const btnWorks = document.querySelector('#to-works a[href^="#"]')
const btnContact = document.querySelector('#toContacts a[href^="#"]')
const target = document.querySelectorAll('[data-animation]')



//elements using functions
headerMenu.forEach(item => item.addEventListener('click', scrollToSection))
btnWorks.addEventListener('click', scrollToSection)
btnContact.addEventListener('click', scrollToSection)



function scrollToSection(e) {
  e.preventDefault()
  const element = e.target
  const id = element.getAttribute('href')
  const section = document.querySelector(id).offsetTop 
  
  scroll({
    // objetos com padrão de comportamento
    top: section,
    behavior: 'smooth'
  }) 
}
    

//=======================================================================================================================

//hamburguer menu function
//cache of selector
const hambMenu = document.querySelector('.hamb-menu')
const hambMenuJs = document.querySelector('.menu-hamb-js')

hambMenu.addEventListener('click', showRideMenuHamb)
let open = false

function showRideMenuHamb() {
  if(!open) {
    open = true
    hambMenuJs.classList.add('open')
  } else {
    open = false
    hambMenuJs.classList.remove('open')
  }
}



//=======================================================================================================================

//back to top bottom

const btnTop = document.querySelector('#btnTop')

window.addEventListener('scroll', scrollBtnTop)

function scrollBtnTop() {
  btnTop.classList.toggle('btnVisible', scrollY > 300)
}

//back to top function 
btnTop.addEventListener('click', function () {
  scroll({
    top: 0,
    behavior: 'smooth' 
  })
})


//=======================================================================================================================

//inserting dinamic animation

window.addEventListener('scroll', scrollAnimation)

function scrollAnimation() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4) //calculo para enquadrar a tela
  target.forEach(e => {
    if(windowTop > e.offsetTop) {
      e.classList.add('animate')
    } else {
      e.classList.remove('animate')
    }
  })
}






