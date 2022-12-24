//Ver si algun valor de la lista cumple tal condicion

const lista = [2,3,6,9,8,4,10,22,-1,-23,66,12,5];

const negativos = lista.some(valor => valor < 0);

//console.log(negativos);

const el_10 = lista.some(valor => valor === 10);

//console.log(el_10);

const listado_isft = [
    {nombre : "Juan" , edad: 33 },
    {nombre : "Carlos" , edad: 22 },
    {nombre : "Brian" , edad: 55 },
    {nombre : "Pedro" , edad: 23 },
    {nombre : "Gomez" , edad: 65},
];

const existe_gomez = listado_isft.some( elemento => elemento.nombre === "Gomez");

console.log(existe_gomez);

//obtener una lista a partir de un objeto iterable

const string = "Hola soy Maidana";

const lista_string = Array.from(string);

console.log(lista_string);