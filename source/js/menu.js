let menu = document.querySelector(".main-nav__list");
let button_open = document.querySelector(".main-nav__toggle");
let button = document.querySelector("button");
let button_close = document.querySelector(".main-nav__cross");
const mediaQuery = window.matchMedia('(min-width: 768px)')

button.addEventListener("click", basket);

function basket() {
  button.classList.toggle("main-nav__toggle")
  button.classList.toggle("main-nav__cross")
  menu.classList.toggle("display_menu");
}

function handleTabletChange(e) {
  if (e.matches) {
    menu.classList.remove("display_menu");
    button.classList.remove("main-nav__cross")
    button.classList.add("main-nav__toggle")
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)
