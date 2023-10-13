function transformarTexto(texto, clave, operacion) {
    let resultado = "";

    for (let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i);

        if (char.match(/[a-zA-Z]/)) {
            let isUpperCase = char === char.toUpperCase();
            char = char.toLowerCase();
            const codigoAsciiA = "a".charCodeAt(0);
            let desplazamiento =
                (char.charCodeAt(0) - codigoAsciiA + clave) % 26;

            if (operacion === "descifrar") {
                desplazamiento = (char.charCodeAt(0) - codigoAsciiA - clave) % 26;
                if (desplazamiento < 0) {
                    desplazamiento += 26;
                }
            }

            let nuevoChar = String.fromCharCode(codigoAsciiA + desplazamiento);

            if (isUpperCase) {
                nuevoChar = nuevoChar.toUpperCase();
            }

            resultado += nuevoChar;
        } else {
            resultado += char;
        }
    }

    return resultado;
}

function cifrarTexto() {
    const textoParaCifrar = document.getElementById("textoParaCifrar").value;
    const clave = parseInt(document.getElementById("clave").value);
    const mensajeError = document.getElementById("mensajeError");

    if (isNaN(clave)) {
        mensajeError.textContent = "Ingresa una clave primero.";
        mensajeError.style.display = "block"; // Mostrar el mensaje de error
        setTimeout(() => {
            mensajeError.style.display = "none"; // Ocultar el mensaje de error después de 1 segundo
        }, 1000); // 1000 ms = 1 segundo
        return;
    }

    mensajeError.textContent = ""; // Limpiar mensaje de error
    mensajeError.style.display = "none"; // Asegurarse de que el mensaje de error esté oculto
    const textoCifrado = transformarTexto(textoParaCifrar, clave, "cifrar");
    document.getElementById("textoCifrado").value = textoCifrado;
}


function descifrarTexto() {
    const textoCifrado = document.getElementById("textoCifrado").value;
    const clave = parseInt(document.getElementById("clave").value);
    const mensajeError = document.getElementById("mensajeError");

    if (isNaN(clave)) {
        mensajeError.textContent = "Ingresa una clave primero.";
        mensajeError.style.display = "block"; // Mostrar el mensaje de error
        setTimeout(() => {
            mensajeError.style.display = "none"; // Ocultar el mensaje de error después de 1 segundo
        }, 1000); // 1000 ms = 1 segundo
        return;
    }

    mensajeError.textContent = ""; // Limpiar mensaje de error
    mensajeError.style.display = "none"; // Asegurarse de que el mensaje de error esté oculto
    const textoDescifrado = transformarTexto(textoCifrado, clave, "descifrar");
    document.getElementById("textoParaCifrar").value = textoDescifrado;
}
