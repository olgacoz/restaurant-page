import './styles.css';
import renderHome from './modules/home.js';
import renderMenu from './modules/menu.js'
import renderContact from './modules/contact.js';

const buttons = document.querySelectorAll('nav > button');

renderHome(); // Initial loading of homepage

buttons.forEach(button => {
  button.addEventListener('click', () => {
    switch(button.id) {
      case 'home-btn':
        renderHome();
        break;
      case 'menu-btn':
        renderMenu();
        break;
      case 'contact-btn':
        renderContact();
        break;
    }
  });
});