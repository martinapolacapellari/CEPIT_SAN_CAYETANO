"use strict";
// Desarrolle un algoritmo que, de acuerdo a la altura de una persona decida si puede entrar a un juego en un parque de diversiones
exports.__esModule = true;
// Para poder subirse a la montaña rusa la persona debe medir 1.30 mts. o más.
var rls = require("readline-sync");
var alturadpersona = rls.questionFloat("ingrese su altura : ");
var alturaminima = 1.30;
if (alturaminima <= alturadpersona) {
    console.log("puede subir a la atraccion");
}
else {
    console.log("lamentablemente no puede subir a la atraccion");
}
