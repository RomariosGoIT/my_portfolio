// Select DOM object item

const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuItem = document.querySelectorAll('.nav-item');

// Set initial state of menu

let showMenu = false;

btnMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    btnMenu.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    menuBranding.classList.toggle('show');
    menuItem.forEach(item => item.classList.toggle('show'));

    // Set menu sate

    showMenu = !true;
  }
}
