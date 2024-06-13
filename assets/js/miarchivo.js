/*let nombre = prompt('Ingrese nombre');
let apellido = prompt('Ingrese apellido');

let nacim = Number(prompt('Ingrese su año de nacimiento'));
while (nacim < 1 || !Number.isInteger(nacim)) {
    alert('Debe ingresar un año valido');
    nacim = Number(prompt('Ingrese su año de nacimiento'));
}

// función para validar la edad del usuario
let anioVigente = new Date().getFullYear();
let miEdad = anioVigente - nacim;
if (miEdad >= 18) {
    alert('Su edad es: ' + miEdad + ' años, Puede continuar con la compra');
} else {
    alert('Su edad es: ' + miEdad + ' años, No puede continuar con la compra, solo consultar valores');
}

alert('Bienvenido: ' + nombre + ' ' + apellido + '!!' + ' Esta por realizar la compra / consulta sobre productos para tu jardin');*/

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1){
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

/* navbar toggle */

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll ("[data-nav-link]");
const overlay = document.querySelector ("[data-overlay]");

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/* header fijo y boton lateral */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
    if (window.scrollY > 150) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
    if (lastScrolledPos >= window.scrollY){
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }

    lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);

/* desplazamiento */

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++){
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active");
        }
    }
}
scrollReveal ();

addEventOnElem(window, "scroll", scrollReveal);