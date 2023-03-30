"use strict";
/*Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
• Tenga en cuenta que la clave es la palabra “eureka”
• Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará un mensaje indicándonos que hemos agotado
todas las oportunidades
• Si acertamos la clave, saldremos directamente del programa
*/
exports.__esModule = true;
var rls = require("readline-sync");
var contador = 0;
var contraseña = rls.question(" Ingrese la clave: ");
contador = contador + 1;
var clave = "eureka";
while (contador < 3 && contraseña !== clave) {
    console.log("Ya a intendado: ", contador);
    contraseña = rls.question("Ingrese la clave: ");
    contador = contador + 1;
}
if (contraseña == clave) {
    console.log("Contraseña correcta");
}
else {
    console.log("Contraseña incorrecta.");
}
