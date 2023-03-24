// uso de condiciones multiples
var tengomuchaplata = true;
var esfindesemana = false;
var mesobranunospesos = true;
var estalloviendo = false;
// condiciones para salir de joda:
// 1. tiene que ser fin de semana y me tienen que sobrar unos pesos y no tiene que estar lloviendo
// 2. salvo que me sobre mucha plata y no este lloviendo
if ((esfindesemana && mesobranunospesos && !estalloviendo) || tengomuchaplata && !estalloviendo) {
    console.log("hoy salgo de joda");
}
else {
    console.log("lamenteablemente hoy no salgo");
}
