// Select DOM object item
document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.querySelector('.btn-menu');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');
  const menuBranding = document.querySelector('.menu-branding');
  const menuItem = document.querySelectorAll('.nav-item');
  const txtElement = document.querySelector('.sm-heading');

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

  // Text animation

  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  class TypeWriter {
    constructor(textEl, words, wait = 3000) {
      this.textEl = textEl;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleted = false;
    }
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;

      // Get full text of current word
      const fullText = this.words[current];

      // Check if deleting
      if (this.isDeleted) {
        //Remove char
        this.txt = fullText.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullText.substring(0, this.txt.length + 1);
      }

      // Insert txt into element
      this.textEl.innerHTML = `<span class="txt">${this.txt}</span>`;

      //Initial type Speed
      let typeSpeed = 200;

      this.isDeleted ? (typeSpeed /= 2) : null;

      // If word is complete
      if (!this.isDeleted && this.txt === fullText) {
        // Make pause at end
        typeSpeed = this.wait;
        this.isDeleted = true;
      } else if (this.isDeleted && this.txt === '') {
        this.isDeleted = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 500;
      }
      setTimeout(() => this.type(), typeSpeed);
    }
  }

  new TypeWriter(txtElement, words, wait);
});
