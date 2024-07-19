// @ts-check
import {Encriptar} from "./models/Encriptar.js";
import {UI} from "./models/UI.js";

function main(){
    const ui = new UI();
    const encriptar = new Encriptar();

    ui.mostrarTextoInicial();

    ui.mostrarTextoConvertido("Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original.");

}

main();