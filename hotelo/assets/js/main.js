// /*=============== SHOW MENU ===============*/
// const navMenu = document.getElementById("nav__menu"),
//   navToggle = document.getElementById("nav-toggle"),
//   navClose = document.getElementById("nav-close");

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// navToggle.addEventListener("click", () => {
//   navMenu.classList.add("show-menu");
// });

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */

// navClose.addEventListener("click", () => {
//   navMenu.classList.remove("show-menu");
// });

// /*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll(".nav__link");

// function linkAction() {
//   const navMenu = document.getElementById("nav__menu");
//   // When we click on each nav__link, we remove the show-menu class
//   navMenu.classList.remove("show-menu");
// }
// navLink.forEach((n) => n.addEventListener("click", linkAction));

// /*=============== CHANGE BACKGROUND HEADER ===============*/
// function scrollHeader() {
//   const header = document.getElementById("header");
//   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
//   if (this.scrollY >= 50) header.classList.add("scroll-header");
//   else header.classList.remove("scroll-header");
// }
// window.addEventListener("scroll", scrollHeader);

// /*=============== SHOW SCROLL UP ===============*/
// function scrollUp() {
//   const scrollUp = document.getElementById("scroll-up");
//   // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
//   if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
//   else scrollUp.classList.remove("show-scroll");
// }
// window.addEventListener("scroll", scrollUp);

// const sr = ScrollReveal({
//   distance: "60px",
//   duration: 2500,
//   delay: 400,
//   // reset: true
// });
// sr.reveal(`.home__header, .section__title`, { delay: 600 });
// sr.reveal(`.home__footer`, { delay: 700 });
// sr.reveal(`.home__img`, { delay: 900, origin: "top" });

// sr.reveal(
//   `.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,
//   { origin: "top", interval: 100 }
// );
// sr.reveal(`.specs__data, .discount__animate`, {
//   origin: "left",
//   interval: 100,
// });
// sr.reveal(`.specs__img, .discount__img`, { origin: "right" });
// sr.reveal(`.case__img`, { origin: "top" });
// sr.reveal(`.case__data`);

const feedbacs = document.querySelector(".feedbacks");
const feedbacItem = feedbacs.querySelectorAll(".feedvack__item").length;
const feedbacItems = feedbacs.querySelectorAll(".feedvack__item");
const nextbtn = document.querySelector(".next--btn");
const prevbtn = document.querySelector(".prev--btn");

let currentItem = 0;

function changeSlide(direction) {
  if (direction === "next") {
    ++currentItem;
    if (currentItem === feedbacItem) {
      currentItem = 0;
    }
  }
  if (direction === "prev") {
    --currentItem;
    if (currentItem < 0) {
      currentItem = feedbacItem - 1;
    }
  }
  console.log(currentItem)
}
nextbtn.addEventListener("click", () => changeSlide("next"));
prevbtn.addEventListener("click", () => changeSlide("prev"));


feedbacItems[`${currentItem}`].classList.add("main");
