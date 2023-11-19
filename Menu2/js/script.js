document.querySelector('.menuBarra').addEventListener('click', animationMenu);

let barra1 = document.querySelector('.fila1');
let barra2 = document.querySelector('.fila2');
let barra3 = document.querySelector('.fila3');

function animationMenu() {
    barra1.classList.toggle('fila1Animacion');
    barra3.classList.toggle('fila3Animacion');
    barra2.classList.toggle('fila2Animacion');
}