# Cifrado César - README

**Asignatura:** Programación I  
**Estudiante:** Enzo Bustamante

## Introducción

Bienvenido al repositorio del cifrado César implementado en JavaScript. Este proyecto tiene como objetivo presentar una implementación de uno de los algoritmos de cifrado más icónicos de la historia de la criptografía: el Cifrado César. En este README, te proporcionaremos una visión general de cómo funciona nuestra implementación, cómo puedes utilizarla y explorar sus aplicaciones.

## El Cifrado César

El cifrado César es un método de cifrado por sustitución que ha perdurado a lo largo de los siglos. Debe su nombre a Julio César, quien se cree que lo utilizó para proteger la confidencialidad de sus mensajes. La idea detrás de este cifrado es bastante simple: cada letra en el texto original se desplaza un número fijo de posiciones en el alfabeto. Este proceso de desplazamiento crea un mensaje cifrado que oculta el mensaje original.

## Cómo Funciona

En este repositorio, hemos implementado dos funciones clave:

- **Función `cifradoCesar(texto, clave)`:** Esta función toma dos parámetros, el `texto` que se desea cifrar y la `clave` que representa el desplazamiento en el cifrado. El algoritmo recorre cada carácter en el texto, verifica si es una letra del alfabeto y, en caso afirmativo, realiza el desplazamiento necesario para cifrar el mensaje. Además, se encarga de mantener el caso original de las letras.

- **Función `descifradoCesar(textoCifrado, clave)`:** Esta función permite descifrar un mensaje cifrado utilizando la misma `clave`. Para hacerlo, llama a la función de cifrado con la clave negativa para obtener el mensaje original.

## Ejemplo de Uso

¡Vamos a ver cómo puedes utilizar estas funciones! Aquí tienes un ejemplo:

```javascript
const mensajeOriginal = 'Hola, Mundo!';
const clave = 1;
const mensajeCifrado = cifradoCesar(mensajeOriginal, clave);
const mensajeDescifrado = descifradoCesar(mensajeCifrado, clave);

console.log('Mensaje Original:', mensajeOriginal); // Hola, Mundo!
console.log('Mensaje Cifrado:', mensajeCifrado); // Ipmb, Nvoep!
console.log('Mensaje Descifrado:', mensajeDescifrado); //Hola, Mundo!
```
Este código demuestra cómo cifrar y descifrar un mensaje utilizando el cifrado César con una clave de 1. Los resultados se muestran en la consola.

## Conclusiones
La implementación del cifrado César en JavaScript es un ejemplo interesante de cómo se pueden aplicar conceptos de programación para comprender y utilizar un algoritmo histórico en el campo de la criptografía. Aunque el cifrado César no se considera seguro para aplicaciones modernas, es un excelente punto de partida para comprender los fundamentos de la seguridad y la criptografía en programación.

Te animamos a explorar, experimentar y personalizar esta implementación para comprender mejor cómo funciona y cómo se puede adaptar para diferentes necesidades.

## Agradecimientos
Agradecemos la oportunidad de trabajar en este proyecto y por la enseñanza en la asignatura de Programación I. Esperamos que esta implementación del cifrado César sea de utilidad y que disfrutes explorando los conceptos de seguridad y criptografía en la programación.

Atentamente,
Enzo Bustamante

Fecha de Entrega: 1/11/23

¡Gracias por visitar mi repositorio! Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto. ¡Diviértete explorando el cifrado César!
