const windowH = window.innerHeight;

/* Sections apparition on scroll */
const sections = document.querySelectorAll('section:not(.banner), .banner img');
sections.forEach(section => {
    let sectionRect = section.getBoundingClientRect();
    if(sectionRect.top < windowH) {
        section.style.setProperty("animation", "800ms ease-out forwards");
        if(section.localName === "img") {            
            section.style.setProperty("animation-name", "section-fade, logo-translate");
        } else {
            section.style.setProperty("animation-name", "section-fade, section-translate");
        }
    }
    document.addEventListener("scroll", () => {
        sectionRect = section.getBoundingClientRect();
        if(sectionRect.top < windowH - 32) {
            section.style.setProperty("animation", "800ms ease-out forwards");
            if(section.localName === "img") {            
                section.style.setProperty("animation-name", "section-fade, logo-translate");
            } else {
                section.style.setProperty("animation-name", "section-fade, section-translate");
            }
        }
    })
});

/* Titles apparition on scroll */
const titles = document.querySelectorAll("h2, h3");
titles.forEach(title => {
    let originalString = title.innerHTML.trim();
    let splitWords = originalString.split(" ");
    title.innerHTML = "<span class=\"first-word\">"+ splitWords.shift() + "</span> <span class=\"next-words\">" + splitWords.join(' ') + "</span>";
console.log(title.getBoundingClientRect());
})
document.addEventListener("scroll", () => {
    titles.forEach(title => {
        let titleRect = title.getBoundingClientRect();
        if(titleRect.bottom < windowH) {
            title.querySelector(".first-word").style.setProperty("animation", "first-word-translate 500ms ease-in forwards");
            title.querySelector(".next-words").style.setProperty("animation", "next-words-translate 500ms ease-in forwards");
        }
    })
})

/* Accelerate flowers rotation on scroll */
const maincontent = document.querySelector("#page");
document.addEventListener("scroll", () => {
    maincontent.style.setProperty('--flower-rotation-duration','2500ms');
})
document.addEventListener("scrollend", () => {
    maincontent.style.setProperty('--flower-rotation-duration','5000ms');
});