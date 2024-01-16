/* Accelerate flowers rotation on scroll */
const maincontent = document.querySelector("#page");
document.addEventListener("scroll", () => {
    maincontent.style.setProperty('--flower-rotation-duration','5s');
})
document.addEventListener("scrollend", () => {
    maincontent.style.setProperty('--flower-rotation-duration','15s');
});