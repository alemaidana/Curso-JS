//trabajar con metodos mas avanzados
// map() filter() reduce()

//*METODO MAP() */

const barrios  = ["Palermo", "Colegiales", "Villa Urquiza", "Saavedra", "Nuñez"];

const orden_barrios = barrios.map( (valor, index) =>{
    return `${index + 1} - ${valor}`;
});

//console.log(orden_barrios);

//*METODO Filter() */

const listado_isft = [
    {nombre : "Juan" , edad: 33 },
    {nombre : "Carlos" , edad: 22 },
    {nombre : "Brian" , edad: 55 },
    {nombre : "Pedro" , edad: 23 },
    {nombre : "Gomez" , edad: 65},
];

const listado_mayores = listado_isft.filter( valor => {

    if (valor.edad > 30) {
        return true;
    }else{
        return false;
    }

});

console.log(listado_mayores);

const lista_sin_Brian = listado_isft.filter( persona => persona.nombre !== "Brian");

console.log(lista_sin_Brian);

/** METODO REDUCE **/

const numeros = [10, 20 ,3, 40, 55];

const suma = numeros.reduce( (acumulado, actual) => {

    return acumulado + actual;

});

console.log(suma);
