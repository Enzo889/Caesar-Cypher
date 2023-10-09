function cifradoCesar(texto, clave) {
    let resultado = ''; //Esta variable se usará para almacenar el mensaje cifrado.

    for (let i = 0; i < texto.length; i++) {
        let char = texto.charAt(i); // char nos permitira al algoritmo trabajar con cada carácter individual del texto de entrada a medida que se recorre la cadena

        // Verificar si el carácter es una letra del alfabeto, utilizando una expresión regular
        if (char.match(/[a-zA-Z]/)) {

            let isUpperCase = char === char.toUpperCase();  //Se verifica si el carácter char es mayúscula y se almacena el resultado en la variable isUpperCase. Esto se usará más adelante para mantener el caso original de la letra.


            char = char.toLowerCase(); // Convertir a minúscula para simplificar el cifrado

            const codigoAsciiA = 'a'.charCodeAt(0); //Se obtiene el valor ASCII del carácter 'a' y se       almacena. Esto se utiliza para calcular el desplazamiento en el cifrado César.


            const desplazamiento = (char.charCodeAt(0) - codigoAsciiA + clave) % 26; //Se calcula el desplazamiento para el carácter actual restando el valor ASCII del carácter 'a' al valor ASCII de char, sumando la clave y tomando el módulo 26. Esto asegura que el desplazamiento esté dentro del rango de letras del alfabeto.


            let nuevoChar = String.fromCharCode(codigoAsciiA + desplazamiento); //Se calcula el nuevo carácter cifrado sumando el desplazamiento al valor ASCII de 'a' y luego convirtiéndolo de nuevo en un carácter utilizando String.fromCharCode().

            if (isUpperCase) {
                nuevoChar = nuevoChar.toUpperCase(); // Mantener el caso original
            }

            resultado += nuevoChar; //Se agrega el nuevoChar al resultado cifrado.
        } else {
            // Mantener caracteres que no son letras sin modificar
            resultado += char;
        }
    }

    return resultado;
}


// Función para descifrar un mensaje cifrado con el cifrado César
function descifradoCesar(textoCifrado, clave) {
    return cifradoCesar(textoCifrado, -clave); // Llamamos a la función de cifrado con clave negativa para descifrar
}

// Ejemplo de uso
const mensajeOriginal = 'Hola, Mundo!';
const clave = 1;
const mensajeCifrado = cifradoCesar(mensajeOriginal, clave);
const mensajeDescifrado = descifradoCesar(mensajeCifrado, clave);

console.log('Mensaje Original:', mensajeOriginal);
console.log('Mensaje Cifrado:', mensajeCifrado);
console.log('Mensaje Descifrado:', mensajeDescifrado);

