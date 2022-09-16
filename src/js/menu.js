const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu__item');
const button = document.querySelector('.button-open');

button.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
  } else {
    menu.classList.add('showMenu');
  }
}
