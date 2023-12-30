const windowH = window.innerHeight;

/* Sections apparition on scroll */
function apparition(element) {
    let elementRect = element.getBoundingClientRect();
    if(elementRect.top < windowH - 32) {
        element.style.setProperty("animation", "800ms ease-out forwards");
        if(element.id === "logo") {            
            element.style.setProperty("animation-name", "section-fade, logo-translate");
        } else if (element.id === "background-video" || element.id === "background-image") {
            element.style.setProperty("animation-name", "section-fade, banner-translate");
        } else {
            element.style.setProperty("animation-name", "section-fade, section-translate");
        }
    }
}
document.querySelectorAll('section:not(.banner), #logo, #background-video, #background-image').forEach(section => {
    console.log(document.querySelectorAll('section:not(.banner), #logo, #background-video, #background-image'));
    apparition(section);
    document.addEventListener("scroll", () => {
        apparition(section);
    })
});

/* Titles apparition on scroll */
const titles = document.querySelectorAll("h2, h3");
titles.forEach(title => {
    let originalString = title.innerHTML.trim();
    let splitWords = originalString.split(" ");
    title.innerHTML = "<span class=\"first-word\">"+ splitWords.shift() + "</span> <span class=\"next-words\">" + splitWords.join(' ') + "</span>";
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
    maincontent.style.setProperty('--flower-rotation-duration','5s');
})
document.addEventListener("scrollend", () => {
    maincontent.style.setProperty('--flower-rotation-duration','15s');
});

/* Logo Parallax effect */
const logo = document.querySelector("#logo");
const logoRect = logo.getBoundingClientRect();
document.addEventListener("scroll", () => {
    const bannerRect = document.querySelector(".banner").getBoundingClientRect();
    if(bannerRect.bottom <= logoRect.bottom - 80) {
        logo.classList.add("absolute-position");
    } else {
        logo.classList.remove("absolute-position");
    }
})