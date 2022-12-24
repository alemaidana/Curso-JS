let lista = [];

for (let i = 0; i < 10; i++) {
    lista.push(i);
}

//recorriendo con for OF
// for (const elemento of lista) {
    
//     console.log(elemento);
// }

//recorriendo con foreach
// lista.forEach(element => {
//     console.log(element);
// });

const persona = {
    nombre : "Alejandro",
    apellido : "Maidana",
    edad : 34,
    Desarrollador : true
};


for (const dato in persona) {
    if (Object.hasOwnProperty.call(persona, dato)) {
        const element = persona[dato];
        console.log(element);
    }
}