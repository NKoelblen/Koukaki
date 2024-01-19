/* Characters Slider */
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