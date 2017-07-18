'use strict';

const menuItems = [
  {name: 'Home', link:'home.html'},
  {name: 'Info', link:'info.html'},
  {name: 'About', link:'about.html'},
  {name: 'Contact', link:'contact.html'}
];

const menuElement = document.querySelector(".menu");
let elements="";

for (const item of menuItems){
  elements += `
    <li>
      <a href="${item.link}"> ${item.name}</a>
    </li>`;
}

menuElement.innerHTML = elements;
