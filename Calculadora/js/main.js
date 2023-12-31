const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".boton")

// Itera a través de cada elemento en la lista de botones y agrega un evento de click a cada uno.
botones.forEach(boton => {
    boton.addEventListener("click", ()=>{
        // Obtiene el texto del botón actual
        const botonOn = boton.textContent

        if ( boton.id === "borrar" ) {
            if ( pantalla.textContent.length === 1 ) {
                pantalla.textContent = "0";
            } else{
                pantalla.textContent = pantalla.textContent.slice(0,-1); 
            }
            return;
            
        }

        if ( boton.id === "igual" ) {
            try{
                pantalla.textContent = eval(pantalla.textContent)
                if ( pantalla.textContent === "" ) {  
                    pantalla.textContent = "¡Error!"
                }
            }catch{
                pantalla.textContent = "¡Error!"
            }
            return;
        }

        if ( boton.id === "limpiar" ) {
            pantalla.textContent = "0";
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "¡Error!") {
            pantalla.textContent = botonOn
        }else{
            pantalla.textContent += botonOn
        }        
    })
});