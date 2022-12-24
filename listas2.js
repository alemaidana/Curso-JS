//concatenar listas
const lista1 = [1,2,3];
const lista2 = ["Hola", "Buen dia", "Como estan"];

const lista3 = lista1.concat(lista2);
//console.log(lista3);

//concatenar con factor de propagacion
const lista4 = [...lista1, ...lista2];
console.log(lista4);