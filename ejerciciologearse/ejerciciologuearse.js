"use strict";
//Desarrolle un algoritmo que permita loguearse (registrarse) a un sistema, ingresando un nombre de usuario y la contraseña adecuada.
/*

Considerar que tanto el usuario como la contraseña están formados sólo por letras.
El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave claveJuan
*/
exports.__esModule = true;
var rls = require("readline-sync");
var usuario = rls.question("ingrese su usuario : ");
var contraseña = rls.question("ingrese su contraseña: ");
var usuariovalido = "Juan";
var contraseñavalido = "claveJuan";
if (contraseñavalido == contraseña && usuariovalido == usuario) {
    console.log("Ingresastes al sistema");
}
else {
    console.log("Contraseña o usuario incorrecto");
}
