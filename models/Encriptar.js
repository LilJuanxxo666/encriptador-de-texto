// @ts-check

export class Encriptar {
    constructor(){
        this.llavesEncriptar = {
            "e": "enter",
            "i": "imes",
            "a": "ai",
            "o": "ober",
            "u": "ufat"
        };
        this.llavesDesencriptar = {
            "enter": "e",
            "imes": "i",
            "ai": "a",
            "ober": "o",
            "ufat": "u"
        };
    }

    //.split separa las palabras en letras y queda en un array
    // .map es como un for, que evalua cada letra, programación funcional.

    /**
     * 
     * @returns {String}
     */
    encriptarTexto(texto){
        if(texto == ""){
            return "";
        }else{
            return texto.split('').map(letra => {
                //Existe esa letra en el objeto?
                if (this.llavesEncriptar[letra]) {
                  return this.llavesEncriptar[letra];
                } else {
                  return letra;
                }
              }).join('');
        }
    }

    /**
     * 
     * @returns {String}
     */
    desencriptarTexto(texto){
        const claves = Object.keys(this.llavesDesencriptar);
        if(texto == ""){
            return "";
        }
        else if(texto.split(' ') == 1){
            for(let i = 0; i<claves.length ; i++){
                if(texto.split(claves[i]).length > 0){
                    texto = texto.replace(new RegExp(claves[i], 'g'), this.llavesDesencriptar[claves[i]]);
                }
            }
            return texto;
        }else{
            return texto.split(' ').map(palabra =>{
                for(let i = 0; i<claves.length ; i++){
                    if(palabra.split(claves[i]).length > 0){
                        //Se usa la expresión regular global new RegExp(), debido a que /i/g no funciona por las ""
                        palabra = palabra.replace(new RegExp(claves[i], 'g'), this.llavesDesencriptar[claves[i]]);
                    }
                }
                return palabra;
            }).join(' ');
        } 
    }
}