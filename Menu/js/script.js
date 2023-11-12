const navegacion = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    navegacion.classList.add("visible");
})

cerrrar.addEventListener("click", () => {
    navegacion.classList.remove("visible");
})