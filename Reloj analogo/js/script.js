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

