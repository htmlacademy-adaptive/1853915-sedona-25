let menu = document.querySelector(".main-nav__list");
let button_open = document.querySelector(".main-nav__toggle");
let button_close = document.querySelector(".main-nav__cross");
const mediaQuery = window.matchMedia('(min-width: 768px)')

button_open.addEventListener("click", basket);

function basket() {
  menu.classList.add("display_menu");
}
button_close.addEventListener("click", close_basket_catalog);

function close_basket_catalog() {
  menu.classList.remove("display_menu");
}

function handleTabletChange(e) {
  if (e.matches) {
    menu.classList.remove("display_menu");
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)
