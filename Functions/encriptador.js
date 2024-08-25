
const botonEncriptar = document.querySelector(".Encriptar");
const texto_Encriptar = document.querySelector(".Texto_ingresado");
const aviso = document.querySelector(".Texto_aviso");
const texto_respuesta = document.querySelector(".Resultado");
const quitar = document.querySelector(".Caja_columna");
const botonCopiar = document.querySelector(".Copiar");
const botonDesencriptar = document.querySelector(".Desencriptar");

/* Boton Encriptar */

botonEncriptar.addEventListener("click", evento=>{
    evento.preventDefault();
    let texto = texto_Encriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1000);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto completo debe estar en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1000);
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        texto_respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        quitar.remove(); 
    }
});

/* Boton Desencriptar */

botonDesencriptar.addEventListener("click", evento=>{
    evento.preventDefault();
    let texto = texto_Encriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "No debe tener acentos y caracteres especiales";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1000);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "800";
        aviso.textContent = "El texto completo debe estar en minúscula";
        
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1000);
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        texto_respuesta.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        quitar.remove(); 
    }
});

/*Boton Copiar */

botonCopiar.addEventListener("click", evento=>{
    evento.preventDefault();
    let copiar = texto_respuesta;
    copiar.select();
    document.execCommand("copy"); 
});