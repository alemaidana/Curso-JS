//trabajando con listas, arrays vectores, etc...

let var1 = { nombre : "Roberto"};

let lista = [1, true, var1, null, {nombre : "Carlos", apellido: "Alfonso"}, 11];

//---ver los elementos de la lista---
//console.log(lista[0]);

//---metodos para introducir nuevos valores push() unshift()---
lista.push("final"); //agrega al final
//console.log(lista);
lista.unshift("bienvenido"); //agrega al principio

//console.log(lista);
const lista2 = [1,2,3]
//---metodos para eliminar .pop() shift()---

lista2.pop(); //final

lista2.shift() //primero

//console.log(lista2); // output [2]

//---metodos para eliminar, modificar o añadir elementos a nuestra lista
//splice(posicion , eliminar , añadir ) 

//Eliminar
const lista3 = [1,2,3,4,5,6];
lista3.splice(2,1);
//console.log(lista3);

//Sustituir elegimos pos, borramos, y añadimos el 3
lista3.splice(2,1,3);
console.log(lista3);
