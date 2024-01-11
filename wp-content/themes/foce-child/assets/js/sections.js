const windowH = window.innerHeight;

/* Burger Menu */
const menuToggle = document.querySelector("#navbar .menu-toggle");
const menuUL = document.querySelector('.main-navigation ul');
document.querySelectorAll('.main-navigation ul a').forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.style.backgroundImage = 'url(/koukaki/wp-content/themes/foce-child/assets/images/Burger.png)';
        menuUL.style.setProperty('display', 'none', 'important');
        document.querySelector('#site-navigation').classList.remove("toggled");
    })
})
menuToggle.addEventListener("click", () => {
    if (menuToggle.getAttribute( 'aria-expanded') === 'true' ) {
        menuToggle.style.backgroundImage = 'url(/koukaki/wp-content/themes/foce-child/assets/images/Burger_croix.png)';
        menuUL.style.setProperty("animation", "section-fade 500ms ease-out forwards");
        menuUL.style.setProperty('display', 'flex', 'important');
    } else {
        menuToggle.style.backgroundImage = 'url(/koukaki/wp-content/themes/foce-child/assets/images/Burger.png)';
        menuUL.style.setProperty('display', 'none', 'important');
    }
})

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

/* SwiperJS Coverflow */
const swiper = new Swiper(".swiper", {
    direction: 'horizontal',
    centeredSlides: true,
    slidesPerView: "auto",
    speed: 2000,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    effect: "coverflow",
    coverflowEffect: {
        slideShadows: false, // Ombre
        rotate: 70, // Rotation de la slide en degrés
        stretch: 0, // Espacement entre les slides
        depth: 50, // Translation sur l'axe Z
        modifier: 1, // Multiplicateur de l'effet
    },
});
swiper.slideNext();

/* Translate clouds on scroll */
const clouds = document.querySelector('#clouds');
window.addEventListener("scroll", function () {  
    const cloudsRect = clouds.getBoundingClientRect();
    const ratio = (windowH - cloudsRect.y) / windowH;
    const translate = 20.83 * ratio;
    if(ratio > 0 && ratio < 1) {
        clouds.style.setProperty('transform', 'translateX(' + translate + 'vw)'); //rect.y: position de l'élément par rapport au haut de la fenêtre
    }
});

/* Sections apparition on scroll */
function sectionApparition(element) {
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
    let test = elementRect.top + parseFloat(computedStyle.paddingTop);
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

/* Accelerate flowers rotation on scroll */
const maincontent = document.querySelector("#page");
document.addEventListener("scroll", () => {
    maincontent.style.setProperty('--flower-rotation-duration','5s');
})
document.addEventListener("scrollend", () => {
    maincontent.style.setProperty('--flower-rotation-duration','15s');
});

