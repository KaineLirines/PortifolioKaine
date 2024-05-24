const buttonMenu = document.querySelector('.button_menu')
const menuMobile = document.querySelector('.menuMobile')
let isMenuOpen = false

buttonMenu.addEventListener('click', function () {
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')

    isMenuOpen ? buttonMenu.children[0].setAttribute('src', '../assets/menu.png') : buttonMenu.children[0].setAttribute('src', '../assets/close.png')
    
    isMenuOpen = !isMenuOpen
})