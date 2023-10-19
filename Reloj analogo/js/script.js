// Constantes
const deg = 6;
const hour = document.querySelector('.hora');
const minutes = document.querySelector('.minuto');
const seconds = document.querySelector('.segundo');

// Función de intervalo
setInterval(()=>{
    // Captura de fecha
    let time = new Date();
    // Extraer datos de la hora
    let hr = time.getHours() * 30;
    let min = time.getMinutes() * deg;
    let sec = time.getSeconds() * deg;

    // Rotar manecillas
    hour.style.transform = `rotate(${( hr ) + ( min/12 )}deg)`;
    minutes.style.transform = `rotate(${min}deg)`;
    seconds.style.transform = `rotate(${sec}deg)`;
})

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

setInterval(calculateTime, 500);

