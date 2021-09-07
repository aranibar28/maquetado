const btnMenu = document.querySelector(".js_btn-menu");
const header = document.querySelector('header')
const body = document.querySelector('body')
btnMenu.onclick = function () {
  body.classList.toggle('is-menu-active')
};
