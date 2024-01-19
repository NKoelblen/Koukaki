const windowH = window.innerHeight;

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