//Desarrolle un algoritmo que permita loguearse (registrarse) a un sistema, ingresando un nombre de usuario y la contraseña adecuada.
/*

Considerar que tanto el usuario como la contraseña están formados sólo por letras.
El sistema deberá validar que el usuario y la contraseña sean correctas, comparándolas con lo que es sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema tiene registrado el usuario: Juan y la clave claveJuan
*/

import * as rls from "readline-sync";
let usuario : string = rls.question("ingrese su usuario : ");
let contraseña: string =rls.question("ingrese su contraseña: ") ;

let usuariovalido: string = "Juan";
let contraseñavalido: string = "claveJuan";

if (contraseñavalido ==contraseña && usuariovalido== usuario ) {
    console.log("Ingresastes al sistema");
} else {
    console.log("Contraseña o usuario incorrecto");
}