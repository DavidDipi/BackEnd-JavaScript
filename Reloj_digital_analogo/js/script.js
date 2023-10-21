// Constantes
const deg = 6;
const constHour = document.querySelector('.hora');
const constMinutes = document.querySelector('.minuto');
const constSeconds = document.querySelector('.segundo');

// Función de intervalo
setInterval(()=>{
    // Captura de fecha
    let time = new Date();
    // Obtener valores de la fecha en variables
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    // Hora reloj analogo
    let hr = hour * 30;
    let min = minutes * deg;
    let sec = seconds * deg;
    // Rotar manecillas
    constHour.style.transform = `rotate(${( hr ) + ( min/12 )}deg)`;
    constMinutes.style.transform = `rotate(${min}deg)`;
    constSeconds.style.transform = `rotate(${sec}deg)`;

    // Reasignar variables

    if( hour >= 12 ){
        if( hour > 12 ){ // Si hora es mayor que 12, restar 12 y agregar 0
            hour -= 12;
            hour = hour < 10 ? "0" + hour : hour;
        }
        amPm = "P.M"; // Tarde
    }else{
        hour = hour < 10 ? "0" + hour : hour;
        amPm = "A.M"; // Mañana
    }
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // Mostrar la hora
    let screenClock = hour + ":" + minutes + ":" + seconds + " " + amPm;
    // Guardar el reloj
    let digitalClock = document.querySelector(".clock");
    // Insertar en el HTML
    digitalClock.innerHTML = screenClock;
})