export class UI {
    constructor(){}

    mostrarTextoConvertido(texto = ""){
        const textoConvertidoHTML = `
            <button class="boton_copiar" id="boton_copiar">Copiar</button>
            <div class="cuerpo_seccion_salida_div">
                <textarea class="cuerpo_texto_encriptado" id="texto_copiar" disabled>${texto}</textarea>
            </div>`;
        const element = document.getElementById("cuerpo_seccion_salida");
        element.innerHTML = textoConvertidoHTML;

        const botonCopiar = document.getElementById('boton_copiar');
        botonCopiar.disabled = false;
        botonCopiar.addEventListener('click', () => this.copiar());
    }

    mostrarTextoInicial(){
        const textoInicialHTML = `
            <div class="cuerpo_seccion_salida_div">
                <h1>Ningún mensaje fue encontrado</h1>
                <p>El texto que desees encriptar o desencriptar.</p>
            </div>
            <img src="./assets/Muñeco.png" class="cuerpo_imagen_muneco" alt="Persona con lupa observando diamante">`;
        const element = document.getElementById("cuerpo_seccion_salida");
        element.innerHTML = textoInicialHTML;
    }

    copiar(){
        const textoCopiar = document.getElementById('texto_copiar');
        const botonCopiar = document.getElementById('boton_copiar');
        
        navigator.clipboard.writeText(textoCopiar.textContent);
        botonCopiar.textContent ='Copiado';
        botonCopiar.disabled = true;
    }
}