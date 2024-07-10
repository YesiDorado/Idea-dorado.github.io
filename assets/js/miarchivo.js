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

var swiper = new Swiper (".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination : {
        el:".swiper-page",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950:{
            slidesPerView: 3
        },
    }
})

//Carrito

const carrito = document.getElementById('carrito');
const elementos = document.getElementById('lista');
const elementos2 = document.getElementById('lista-2');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners() {
    elementos.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);

    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    document.addEventListener('DOMContentLoaded', leelLocalStorage);
}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen : elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>

        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
        `;
    lista.appendChild(row);
    guardarELementoLocalStorage(elemento);
}

function eliminarElemento(e) {

    e.preventDefault();

    let elemento,
        elementoId;

    if (e.target.classList.contains('borrar')) {

        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');

    }

    eliminarElementoLocalStorage(elementoId)

}

function vaciarCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    vaciarLocalStorage();
    return false;

}

function guardarELementoLocalStorage(elemento) {

    let elementos;

    elementos = obtenerelementosLocalStorage();

    elementos.push(elemento);

    localStorage.setItem('elementos', JSON.stringify(elementos));
}

function obtenerelementosLocalStorage() {
    let elementosLS;

    if(localStorage.getItem('elementos') === null) {
        elementosLS = [];
    } else {
        elementosLS = JSON.parse(localStorage.getItem('elementos'));
    }
    return elementosLS;
}

function leelLocalStorage() {

    let elementosLS;

    elementosLS = obtenerelementosLocalStorage();

    elementosLS.forEach(function(elemento){

        const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100>
        </td>

        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a>
        </td>
        `;
    lista.appendChild(row);

    });
}

function eliminarElementoLocalStorage(elemento) {
    let elementosLS;
}