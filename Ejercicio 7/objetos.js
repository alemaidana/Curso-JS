//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos_personales = {
    nombre: "Alfred",
    apellido : "OnTheCode",
    edad : 34,
    altura : 1.81,
    eresDesarrollador : true
};

//- Una variable que obtenga tu edad a partir del objeto anterior
const edad = datos_personales.edad;

//Una lista que contenga el objeto con tus datos personales
// y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datos_personales_amigo1 = {
    nombre: "Jim",
    apellido : "Halpert",
    edad : 32,
    altura : 1.83,
    eresDesarrollador : false
};

const datos_personales_amigo2 = {
    nombre: "Michael",
    apellido : "Scott",
    edad : 50,
    altura : 1.72,
    eresDesarrollador : false
};

const datos = [datos_personales, datos_personales_amigo1, datos_personales_amigo2];

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const datos_orden_edad = datos.sort( (a,b) => b.edad - a.edad );
