/* Sections apparition on scroll */
function sectionApparition(element) {
    let elementRect = element.getBoundingClientRect();
    if(elementRect.top < windowH - 32) {
        element.style.setProperty("animation", "800ms ease-out both");
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
    sectionApparition(section);
    document.addEventListener("scroll", () => {
        sectionApparition(section);
    })
});

/* Titles apparition on scroll */
function titleApparition(element) {
    let computedStyle = getComputedStyle(element);
    let elementRect = element.getBoundingClientRect();
    if(elementRect.bottom - parseFloat(computedStyle.paddingBottom) < windowH && elementRect.top + parseFloat(computedStyle.paddingTop) > 0) {
        element.querySelector(".first-word").style.setProperty("animation", "first-word-translate 500ms ease-in forwards");
        element.querySelector(".next-words").style.setProperty("animation", "next-words-translate 500ms ease-in forwards");
    }
}
const titles = document.querySelectorAll("h2, h3");
titles.forEach(title => {
    let originalString = title.innerHTML.trim();
    let splitWords = originalString.split(" ");
    title.innerHTML = "<span class=\"first-word\">"+ splitWords.shift() + "</span> <span class=\"next-words\">" + splitWords.join(' ') + "</span>";
})
titles.forEach(title => {
    titleApparition(title);
    document.addEventListener("scroll", () => {
        titleApparition(title);
    })
})