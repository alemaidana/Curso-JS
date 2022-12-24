//declaracion de numeros
let a = 2.2; //int

let b = 0.2; //float

function redondear(a, b)
{
    return Math.round((a + b) * 100) /100;
}

let c = redondear(a,b);

//console.log(b * c);

//pequeño truco para obtener valores reales
//console.log(Math.round((b * c) * 100) /100);

/* numeros con cadenas */

let cadena = `la suma de ${a} + ${b} es igual a ${c}`;

console.log(cadena);

//limitar decimales a por ej 2
let peso_gramos = 542.12336664;
console.log(peso_gramos.toFixed(2));

//limitar a cifras significativas 6 => 542.123
console.log(peso_gramos.toPrecision(6));