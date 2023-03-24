// Desarrolle un algoritmo que, de acuerdo a la altura de una persona decida si puede entrar a un juego en un parque de diversiones

// Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más.


import * as rls from "readline-sync";

let alturadpersona : number = rls.questionFloat("ingrese su altura : ");
let alturaminima: number = 1.30;

if (alturaminima <= alturadpersona){
console.log("puede subir a la atraccion");
} else {
console.log("lamentablemente no puede subir a la atraccion") ;   
}


