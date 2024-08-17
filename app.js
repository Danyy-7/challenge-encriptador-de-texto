const textIntroducido = document.querySelector(".texto__introducido");
const textEncriptado = document.querySelector(".texto__encriptado");
const copiar = document.querySelector(".copiar");

let titulo = document.getElementById('titulo');
titulo.innerHTML = 'Encriptador De Texto';

let instrucciones = document.getElementById('instrucciones');
instrucciones.innerHTML = 'Solo letras minúsculas y sin acentos';

let pieDePagina = document.getElementById('pieDePagina');
pieDePagina.innerHTML = 'Hecho por: Daniel Vallecillo agosto 2024'

copiar.addEventListener("click", e =>{
    textEncriptado.select();
    document.execCommand("copy");
})


function soloLetras(input){
    input.value = input.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/g,'');
}

function botonEncriptar(){
    const texto = encriptar(textIntroducido.value)
    textEncriptado.value = texto
    textIntroducido.value ="";
    textEncriptado.style.backgroundImage = "none";
    copiar.style.display ='block'
    
}

function encriptar(stringEncriptado){
    let vocalesEncriptadas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < vocalesEncriptadas.length; i++){
        if(stringEncriptado.includes(vocalesEncriptadas[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(vocalesEncriptadas[i][0], vocalesEncriptadas[i][1])
        }
        
    }
    return stringEncriptado;
}

function botonDesencriptar(){
    const texto = desencriptar(textIntroducido.value)
    textEncriptado.value = texto
    textIntroducido.value ="";
}

function desencriptar(stringDesencriptado){
    let vocalesEncriptadas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < vocalesEncriptadas.length; i++){
        if(stringDesencriptado.includes(vocalesEncriptadas[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(vocalesEncriptadas[i][1], vocalesEncriptadas[i][0])
        }
        
    }
    return stringDesencriptado;
}
    