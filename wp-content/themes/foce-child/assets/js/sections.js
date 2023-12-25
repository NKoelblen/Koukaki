/* Accelerate flowers rotation on scroll */

const maincontent = document.querySelector("#page");
console.log(maincontent);
document.addEventListener("scroll", () => {
    maincontent.style.setProperty('--flower-rotation-duration','1000ms');
})
document.addEventListener("scrollend", () => {
    maincontent.style.setProperty('--flower-rotation-duration','5000ms');
});