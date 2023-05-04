import Background from './background.png';
import { menuLoad } from './menu-tab';
import { aboutLoad } from './about-tab';
let content = document.getElementById('content');

export const setBackGroundImage = () => {
  document.body.style.backgroundImage = `url(${Background})`;
};

export const createTopNav = () => {
  let element = document.createElement('div');
  element.classList.add('topNav');
  let home = document.createElement('div');
  let menu = document.createElement('div');
  let about = document.createElement('div');
  home.textContent = 'HOME';
  menu.textContent = 'MENU';
  about.textContent = 'ABOUT';
  element.appendChild(home);
  element.appendChild(menu);
  element.appendChild(about);
  content.appendChild(element);
  //Add Exported Menu function as eventlistener here to change page
  home.addEventListener('click', () => {
    document
      .getElementById('content')
      .removeChild(document.querySelector('.home'));
  });
  home.addEventListener('click', setHomeContent);
  menu.addEventListener('click', () => {
    document
      .getElementById('content')
      .removeChild(document.querySelector('.home'));
  });
  menu.addEventListener('click', menuLoad);
  about.addEventListener('click', () => {
    document
      .getElementById('content')
      .removeChild(document.querySelector('.home'));
  });
  about.addEventListener('click', aboutLoad);
};

export const setHomeContent = () => {
  let element = document.createElement('div');
  element.classList.add('home');
  let restaurantName = document.createElement('div');
  restaurantName.classList.add('restaurantName');
  let restaurantDescription = document.createElement('div');
  restaurantDescription.classList.add('restaurantDescription');
  let menu = document.createElement('div');
  menu.classList.add('homeMenuLink');
  restaurantName.textContent = 'BOMB RAMEN';
  restaurantDescription.textContent = 'Flavor explosion';
  menu.textContent = 'View Menu';
  menu.addEventListener('click', () => {
    document
      .getElementById('content')
      .removeChild(document.querySelector('.home'));
  });
  menu.addEventListener('click', menuLoad);
  element.appendChild(restaurantName);
  element.appendChild(restaurantDescription);
  element.appendChild(menu);
  content.appendChild(element);
};

export const setCredits = () => {
  let element = document.createElement('div');
  element.classList.add('credits');
  element.textContent = 'Developed with chopsticks by Noodle Lover';
  content.appendChild(element);
};

export const setHomePage = () => {
  createTopNav();
  setHomeContent();
  setCredits();
};
