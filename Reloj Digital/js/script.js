// Funcion calcular tiempo

function calculateTime() {

    // Variable tiempo con Date
    let time = new Date();

    // Obtener valores de la fecha en variables
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // Reasignar variables
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Mostrar la hora
    let screenClock = hour + ":" + minutes + ":" + seconds;
    // Guardar el reloj
    let digitalClock = document.querySelector(".clock");
    // Insertar en el HTML
    digitalClock.innerHTML = screenClock;
}

setInterval(calculateTime, 1000);