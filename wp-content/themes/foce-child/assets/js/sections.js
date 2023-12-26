/* Sections apparition on scroll */
const sections = document.querySelectorAll('section:not(.banner), .banner img');
const windowH = window.innerHeight;
sections.forEach(section => {
    let rect = section.getBoundingClientRect();
    if(rect.top < windowH) {
        if(section.localName === "img") {
            section.style.setProperty("animation", "800ms ease-out forwards");
            section.style.setProperty("animation-name", "section-fade, logo-translate");
        } else {
            section.style.setProperty("animation", "800ms ease-out forwards");
            section.style.setProperty("animation-name", "section-fade, section-translate");
        }
    }
    document.addEventListener("scroll", () => {
        rect = section.getBoundingClientRect();
        if(rect.top < windowH) {
            if(section.localName === "img") {
                section.style.setProperty("animation", "800ms ease-out forwards");
                section.style.setProperty("animation-name", "section-fade, logo-translate");
            } else {
                section.style.setProperty("animation", "800ms ease-out forwards");
                section.style.setProperty("animation-name", "section-fade, section-translate");
            }
        }
    })
});

/* Accelerate flowers rotation on scroll */
const maincontent = document.querySelector("#page");
document.addEventListener("scroll", () => {
    maincontent.style.setProperty('--flower-rotation-duration','1000ms');
})
document.addEventListener("scrollend", () => {
    maincontent.style.setProperty('--flower-rotation-duration','5000ms');
});