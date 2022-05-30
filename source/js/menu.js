let menu = document.querySelector("ul");
let button_open = document.querySelector(".main-nav__toggle");
let iframe = document.querySelector('iframe');
let map = document.querySelector('.interest-block__map');
let button = document.querySelector("button");
let button_close = document.querySelector(".main-nav__cross");

menu.classList.remove('main-nav__list--open');
menu.classList.remove("main-nav__list--none-js");
button.classList.remove("main-nav__toggle--none-js");

button.addEventListener("click", basket);

function basket() {
  menu.classList.toggle("main-nav__list--open");
  button.classList.toggle("main-nav__toggle--cross");
}

map.classList.add('interest-block__map-interect--none-js');
iframe.classList.remove('interest-block__map-interect--none-js');

