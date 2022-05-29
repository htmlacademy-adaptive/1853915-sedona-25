let menu = document.querySelector("ul");
let button_open = document.querySelector(".main-nav__toggle");
let button = document.querySelector("button");
let button_close = document.querySelector(".main-nav__cross");
const mediaQuery = window.matchMedia('(min-width: 768px)')

menu.classList.remove("main-nav--open");
menu.classList.add("main-nav--close");
button_open.style.display = "block";
button_close.style.display = "block";


button_open.addEventListener("click", basket);

function basket() {
  button.classList.add("main-nav__cross");
}

function handleTabletChange(e) {
  if (e.matches) {
    // menu.classList.remove("display-menu");
    // button.classList.remove("main-nav__cross")
    // button.classList.add("main-nav__toggle")
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)
