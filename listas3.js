//crear una lista a partir de otra lista
const lista1 = [1,2,3,4,5,6,7,8,9,10];

const lista2 = [lista1.slice(5)];

//console.log(lista2);

//--Iterar valores

const array = ["Carlos", "Juan", "Pedro", "Brian", "Emir"];

//forma ES6 foreach

const copia = [];

array.forEach(element => {
    
    copia.push(element);

});

//console.log(copia);

//encontrar el elemento "Brian" find()

const array2 = [
    {nombre : "Juan" , edad: 33 },
    {nombre : "Carlos" , edad: 22 },
    {nombre : "Brian" , edad: 55 },
    {nombre : "Pedro" , edad: 23 },
    {nombre : "Gomez" , edad: 65},
]


// const busqueda = array2.find( elemento => {

//     if(elemento.nombre === "Brian"){
//         return true;
//     }
// });

//simplificado
const busqueda = array2.find( elemento => elemento.nombre === "Brian");

console.log(busqueda);