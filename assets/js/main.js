const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("nav-toggle"),
    closeMenu = document.getElementById("nav-close")

toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show")
})
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show")
})

const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    navMenu.classList.remove("show")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute("id")

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
let spinnerWrapper = document.querySelector('.wrapper');
let body = document.querySelector(".body");
let navHeader = document.querySelector('.l-header');
window.addEventListener('load', () => {
    spinnerWrapper.style.display = 'none';
    navMenu.style.display = 'flex';
    navHeader.style.display = 'grid';

    if (window.innerWidth > 1024) {
        body.style.paddingLeft = "324px";
    }
    body.classList.add('fade-in');
});
const mediaQuery = window.matchMedia('(min-width: 1024)');
function handleScreenChange(e) {
    if (e.matches) {
        body.style.paddingLeft = "324px";
    }
}
mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);