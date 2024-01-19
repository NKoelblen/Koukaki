/* Logo Parallax effect */
const logo = document.querySelector("#logo");
const logoRect = logo.getBoundingClientRect();
let bannerRect = document.querySelector(".banner").getBoundingClientRect();
if(bannerRect.bottom <= 0) {
    logo.classList.add("absolute-position");
}
document.addEventListener("scroll", () => {
    bannerRect = document.querySelector(".banner").getBoundingClientRect();
    if(bannerRect.bottom <= logoRect.bottom) {
        logo.classList.add("absolute-position");
    } else {
        logo.classList.remove("absolute-position");
    }
})