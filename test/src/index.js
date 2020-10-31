import { menuList, checkbox, body } from './js/variables';
import menuItemTpl from './templates/menu-item.hbs';
import menu from './menu.json';
import './styles.css';



const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};




menuList.innerHTML = menu.map(menuItemTpl).join('');
body.classList.add(`${Theme.LIGHT}`);

if (JSON.parse(localStorage.getItem('checked-dark-theme'))) {
     body.classList.remove(`${Theme.LIGHT}`);
     body.classList.add(`${Theme.DARK}`);
     checkbox.setAttribute('checked', true);
}


checkbox.addEventListener('change', onCheckboxChenge);

function onCheckboxChenge() {

      body.classList.toggle(`${Theme.LIGHT}`);
      body.classList.toggle(`${Theme.DARK}`);

    if (checkbox.getAttribute('checked') === 'true') {
        checkbox.removeAttribute('checked');
        checkbox.setAttribute('checked', false);

        localStorage.removeItem('checked-dark-theme');
        localStorage.setItem('checked-dark-theme', false);
    } else {
        checkbox.removeAttribute('checked');
        checkbox.setAttribute('checked', true);

        localStorage.removeItem('checked-dark-theme');
        localStorage.setItem('checked-dark-theme', true);
    }
}