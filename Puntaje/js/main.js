// Definir constantes
const marcoPuntaje = document.querySelector('.puntaje');
const gracias = document.querySelector('.thanks');
let puntActual = 0;
const PuntLimite = 5;

// Items estrellas (Arreglo)
const hmtl = Array.from(Array(PuntLimite)).map((item, i) => {
    return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

marcoPuntaje.innerHTML = hmtl.join('');

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", e =>{
        // console.log("Funciona");
        const posicion = item.getAttribute('data-pos');

        if (puntActual === parseInt(posicion) + 1) {
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris =>{
            if (cuadraditoGris.classList.contains("selec")) {
                cuadraditoGris.classList.remove("selec");
            }
        });

        for (let i = 0; i <= posicion; i++){
            const cuadradito = document.querySelector(`.item-${i}`);
            if (!cuadradito.classList.contains("selec")) {
                cuadradito.classList.add("selec");
            }
        }

        puntActual + parseInt(posicion) + 1;
    });

    item.addEventListener("click", (e) =>{
        const posicion = item.getAttribute('data-pos');
        puntActual = parseInt(posicion) + 1;
        console.log(puntActual);
        gracias.innerHTML = `<h2>Gracias por tu valoración de ${puntActual} estrellas</h2>`
    });
});