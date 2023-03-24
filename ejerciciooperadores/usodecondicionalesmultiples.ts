// uso de condiciones multiples

let tengomuchaplata : boolean = true;
let esfindesemana: boolean = false;
let mesobranunospesos: boolean = true;
let estalloviendo: boolean = true; 

// condiciones para salir de joda:
// 1. tiene que ser fin de semana y me tienen que sobrar unos pesos y no tiene que estar lloviendo
// 2. salvo que me sobre mucha plata y no este lloviendo

if ((esfindesemana && mesobranunospesos && !estalloviendo)||(tengomuchaplata && !estalloviendo)){
    console.log( "hoy salgo de joda")
} else {
    console.log("lamenteablemente hoy no salgo")
}
