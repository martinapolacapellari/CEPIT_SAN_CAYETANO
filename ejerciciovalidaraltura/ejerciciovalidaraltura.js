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


// Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar. Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer puesto medalla de bronce. En caso que quede en otra posición se entrega certificado de participación.

