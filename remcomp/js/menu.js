const hamburger = document.querySelector(".hamburger");
const burgerMenu = document.querySelector(".menu__list");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
})