function obtenerTiempoFaltante(fechaLimite) {
    let ahora = new Date();
    let fechaLimiteObj = new Date(fechaLimite);


    let tiempoFaltante = Math.max((fechaLimiteObj - ahora + 1000) / 1000, 0);
    let segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    let minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    let horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 60)).slice(-2);
    let diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);


    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante
    }


}

// console.log(obtenerTiempoFaltante('Dec 25 2023'));

let papaNoel = "off";
let audioFondo = new Audio("./sounds/allWant.mp3");
let papaNoelPlay = document.getElementById("papaNoelPlay");
let papaNoelStop = document.getElementById("papaNoelStop");
let papaNoelOff = document.getElementById("papaNoelOff");

function cuentaRegresiva(tiempoFaltante, reloj, mensaje) {
    const e = document.getElementById(reloj);

    const tiempoActual = setInterval(() => {
        let t = obtenerTiempoFaltante(tiempoFaltante);

        const dia = document.querySelector(".dia");
        const hora = document.querySelector(".hora");
        const minutos = document.querySelector(".minutos");
        const segundos = document.querySelector(".segundos");

        dia.innerHTML = t.diasFaltantes;
        hora.innerHTML = t.horasFaltantes;
        minutos.innerHTML = t.minutosFaltantes;
        segundos.innerHTML = t.segundosFaltantes;

        mensaje = "Faltan para navidad!";
        e.innerHTML = mensaje;

        if (t.tiempoFaltante <= 0) {
            clearInterval(tiempoActual);
            mensaje = "Feliz navidad!";
            e.innerHTML = mensaje;

            papaNoelOff.classList.add("on");

            if (papaNoel === "off") {
                papaNoel = "on";
                papaNoelPlay.addEventListener('click', reproducirMusica);
                papaNoelStop.addEventListener('click', detenerMusica);
                papaNoelPlay.classList.add("on");
                papaNoelStop.classList.add("on");
                console.log(papaNoel);
            } else if (papaNoel === "on") {
                papaNoel = "off";
                papaNoelPlay.removeEventListener('click', reproducirMusica);
                papaNoelStop.removeEventListener('click', detenerMusica);
                papaNoelPlay.classList.remove("on");
                papaNoelStop.classList.remove("on");
                console.log(papaNoel);
            } else {
                console.log("No disponible");
            }
        }
    }, 1000);

    function reproducirMusica() {
        audioFondo.play();
    }

    function detenerMusica() {
        audioFondo.pause();
    }
}


let tiempoFaltante = 'Dec 25 2023 00:00:00 GMT-0500'
cuentaRegresiva(tiempoFaltante, 'msg', '¡Falta para navidad:!');
// bailar(tiempoFaltante);
