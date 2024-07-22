export class UI {
    constructor(){}

    mostrarTextoConvertido(texto = ""){
        const textoConvertidoHTML = `
            <button class="boton_copiar" id="boton_copiar">Copiar</button>
            <div class="cuerpo_seccion_salida_div" id="cuerpo_texto_copiar">
                <textarea class="cuerpo_texto_encriptado" id="texto_copiar">${texto}</textarea>
            </div>`;
        const element = document.getElementById("cuerpo_seccion_salida");
        element.innerHTML = textoConvertidoHTML;
        //Cambiar a espaciado
        element.style.justifyContent = 'space-between';

        //Funcionalidad del boton copiar
        const botonCopiar = document.getElementById('boton_copiar');
        botonCopiar.disabled = false;
        botonCopiar.addEventListener('click', () => this.copiar());

        //Cambiar tamaño del contenedor y del textarea.
        const textareaSalida = document.getElementById('texto_copiar')
        const contenedorSalida = textareaSalida.parentElement;
        contenedorSalida.value = texto;

        textareaSalida.style.height = 'auto';
        contenedorSalida.style.height = 'auto';

        textareaSalida.style.height = (textareaSalida.scrollHeight + 2) + 'px';

        //Ajustar la altura del contenedor al textarea
        contenedorSalida.style.height = textareaSalida.scrollHeight + 'px';

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
        element.style.justifyContent = 'center';

        document.getElementById('texto_ingresado').addEventListener('input', evento => {
            evento.target.value = evento.target.value.toLowerCase();
        });
    }

    copiar(){
        const textoCopiar = document.getElementById('texto_copiar');
        const botonCopiar = document.getElementById('boton_copiar');
        
        navigator.clipboard.writeText(textoCopiar.textContent);
        botonCopiar.textContent ='Copiado';
        botonCopiar.disabled = true;
    }
}