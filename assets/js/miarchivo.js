'use strict';

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

alert('Bienvenido: ' + nombre + ' ' + apellido + '!!' + ' Esta por realizar la compra / consulta sobre productos sobre diferentes Birritas'); */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1){
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}


const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
    }
}
    

    // navbar functional
    
const [navbar, navToggler, navbarLinks] = [
    document.querySelector("[data-navbar]"),
    document.querySelector("[data-nav-toggler]"),
    document.querySelectorAll("[data-nav-link]")
];

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
    document.body.classList.toggle("active");
}
    
navToggler.addEventListener("click", toggleNavbar);
    
    
const closeNavbar = function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
    document.body.classList.remove("active");
}
    
addEventOnElements(navbarLinks, "click", closeNavbar);
    
    
    
    // header activo
    
const header = document.querySelector("[data-header]");
    
const activeElemOnScroll = function () {
    if (window.scrollY >= 50) {
    header.classList.add("active");
    } else {
    header.classList.remove("active");
    }
}
    
window.addEventListener("scroll", activeElemOnScroll);
    

    
const revealElements = document.querySelectorAll("[data-reveal]");
    
const revealOnScroll = function () {
    for (let i = 0; i < revealElements.length; i++) {
    
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
        revealElements[i].classList.add("revealed");
    
    if (revealElements[i].classList.contains("btn")) {
    setTimeout(function () {
        revealElements[i].style.transition = "0.25s ease";
    }, 1000);
    }
    }
    
    }
}
    
window.addEventListener("scroll", revealOnScroll);
    
revealOnScroll();