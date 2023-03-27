"use strict";
// Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar. Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer puesto medalla de bronce. En caso que quede en otra posición se entrega certificado de participación.
exports.__esModule = true;
var rls = require("readline-sync");
var posicion = rls.questionInt("ingrese su posicion en la carrera : ");
var mensaje = "";
if (posicion <= 0) {
    mensaje = "Debe ser un entero positivo";
}
else {
    switch (posicion) {
        case 1:
            mensaje = "Medalla de oro";
            break;
        case 2:
            mensaje = "Medalla de plata";
            break;
        case 3:
            mensaje = "Medalla de bronce";
            break;
        default:
            mensaje = "Entrega certificado de participacion";
    }
}
console.log(mensaje);
/*
if (posicion < = 0){
    mensaje: "Debe ser un entero positivo"
} else if (posicion === 1) {
    mensaje= "Medalla de oro";

  
    } else if (posicion === 2 ) {
        mensaje= "Medalla de plata";
        
    } else if (posicion === 3) {
        mensaje= "Medalla de bronce";
    } else {
        mensaje =  " Entrega certificado de participacion";
    }
    console.log( mensaje);
/*
    /*
    Haremos lo mismo con un swith/case == evalua una sola vez y dependiendo de la respuesta ejecuta un bloque
    */
