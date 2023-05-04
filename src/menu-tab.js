export const menuLoad = () => {
  let content = document.getElementById('content');
  let element = document.createElement('div');
  element.classList.add('home');
  element.classList.add('menuBody');
  let menuBodyTitle = document.createElement('div');
  menuBodyTitle.classList.add('menuBodyTitle');
  menuBodyTitle.textContent = 'BOMB MENU';
  let menuDividerLine1 = document.createElement('hr');
  let menuDividerLine2 = document.createElement('hr');
  let menuDividerLine3 = document.createElement('hr');
  let menuItem1Name = document.createElement('div');
  menuItem1Name.textContent = 'BOMB RAMEN';
  let menuItem2Name = document.createElement('div');
  menuItem2Name.textContent = 'EXTRA BOMB RAMEN';
  let menuItem3Name = document.createElement('div');
  menuItem3Name.textContent = 'GIGA BOMB RAMEN';
  let menuItem1Description = document.createElement('div');
  menuItem1Description.textContent =
    'Noodles, pork broth, and bomb spices';
  let menuItem2Description = document.createElement('div');
  menuItem2Description.textContent =
    'Noodles, beef broth, and extra extra spices';
  let menuItem3Description = document.createElement('div');
  menuItem3Description.textContent =
    'You get the idea, but giga version';
  element.appendChild(menuBodyTitle);
  element.appendChild(menuDividerLine1);
  element.appendChild(menuItem1Name);
  element.appendChild(menuItem1Description);
  element.appendChild(menuDividerLine2);
  element.appendChild(menuItem2Name);
  element.appendChild(menuItem2Description);
  element.appendChild(menuDividerLine3);
  element.appendChild(menuItem3Name);
  element.appendChild(menuItem3Description);
  content.appendChild(element);
};
