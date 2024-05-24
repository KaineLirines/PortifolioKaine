const buttonMenu = document.querySelector('.button_menu')
const menuMobile = document.querySelector('.menuMobile')
let isMenuOpen = false

buttonMenu.addEventListener('click', function () {
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible')

    isMenuOpen ? buttonMenu.children[0].setAttribute('src', '../assets/menu.png') : buttonMenu.children[0].setAttribute('src', '../assets/close.png')
    
    isMenuOpen = !isMenuOpen
})


function escreverTexto(texto, atraso, elemento, delayInicial = 0) {
    let contadorDeLetras = 0;
  
    function escrever() {
      if (contadorDeLetras < texto.length) {
        elemento.textContent += texto.charAt(contadorDeLetras);
        contadorDeLetras++;
        setTimeout(escrever, atraso);
      }
    }
  
    setTimeout(escrever, delayInicial);
  }

escreverTexto();

const texto1 = "Kaine Lirines";
const elemento1 = document.querySelector(".sec_titulo_autor");

const texto2 = "Minhas Habilidades";
const elemento2 = document.querySelector(".sec_titulo_habilidades");

const texto3 = "Meus Projetos";
const elemento3 = document.querySelector(".sec_titulo");


escreverTexto(texto1, 150, elemento1);
escreverTexto(texto2, 150, elemento2, 1800);
escreverTexto(texto3, 150, elemento3);