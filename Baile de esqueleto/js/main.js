let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoQuieto");
let btnSonido = new Audio ("./src/sounds/btnBailar.mp3");
let audioFondo = new Audio ("./src/sounds/audioBailar.mp3");

function bailar() {
    if (esqueleto == "off"){
        esqueleto = "on";
        esqueletoStop.classList.add("on");
        esqueletoStop.addEventListener('click',()=>{
            btnSonido.play();
        })
        esqueletoStop.addEventListener('click',()=>{
            audioFondo.play();
        })
        console.log("On");
    }else{
        esqueleto = "off";
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click',()=>{
            audioFondo.pause();
        })
        console.log("Off");
    }
}