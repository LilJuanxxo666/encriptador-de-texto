// @ts-check
import {Encriptar} from "./models/Encriptar.js";
import {UI} from "./models/UI.js";

const ui = new UI();
const encriptarDesencriptar = new Encriptar();

function desencriptar(){
    // @ts-ignore
    let element = document.getElementById('texto_ingresado').value;
    if(element == undefined || element == ""){
        ui.mostrarTextoInicial();   
    }else{
        ui.mostrarTextoConvertido(encriptarDesencriptar.desencriptarTexto(element));
    }
}

function encriptar(){
    // @ts-ignore
    let element = document.getElementById('texto_ingresado').value;
    if(element == undefined || element == ""){
        ui.mostrarTextoInicial();   
    }else{
        ui.mostrarTextoConvertido(encriptarDesencriptar.encriptarTexto(element));
    }
}

function botones(){
    const botonEncriptar = document.getElementById('btn_encriptar');
    const botonDesencriptar = document.getElementById('btn_desencriptar');
    botonEncriptar?.addEventListener('click', () => encriptar());
    botonDesencriptar?.addEventListener('click', () => desencriptar());
}

function main(){
    ui.mostrarTextoInicial();
    botones();
}

main();