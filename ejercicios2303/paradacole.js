"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var llegoelcole = rls.question("¿esta viniendo el colectivo?");
// asumiendo que el usuario solo puede ingresar "S" para si o "N" para no.
while (llegoelcole == "N") {
    console.log("sigo esperando el colectivo");
}
llegoelcole = rls.question("¿ya vino el colectivo?");
if (llegoelcole == "S") {
    console.log("llego el colectivo");
}
else {
    console.log("ingrese una respuesta valida");
    llegoelcole = rls.question("¿cual es tu nueva respuesta?");
}
