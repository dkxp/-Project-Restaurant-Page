export const aboutLoad = () => {
  let content = document.getElementById('content');
  let element = document.createElement('div');
  element.classList.add('home');
  element.classList.add('aboutBody');
  let aboutTitle = document.createElement('div');
  let aboutDividerLine = document.createElement('hr');
  let aboutMainContent = document.createElement('div');
  aboutTitle.textContent = 'BOMB RAMEN';
  aboutMainContent.classList.add('aboutMainContent');
  aboutMainContent.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod';
  element.appendChild(aboutTitle);
  element.appendChild(aboutDividerLine);
  element.appendChild(aboutMainContent);
  content.appendChild(element);
};
