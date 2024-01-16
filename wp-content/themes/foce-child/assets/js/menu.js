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