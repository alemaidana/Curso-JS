//metodos mas utilizados por las cadenas

//obtener longitud length
let cadena1 = "Maidana";
console.log(cadena1.length);

//obtener un trozo
let trozo = cadena1.slice(0,5);
console.log(trozo);

//reemplazar
//replace solo lo hace en la primer instancia
let frase = "Hola soy el señor Maidana";
let nueva = frase.replace('Maidana', 'Pollas');
console.log(nueva);
//si queremos reemplazar en la totalidad
//debemos usar expresiones regulares /g -->global
let historia = "En un lugar hacia un frio tremendo tome un mate para calentarme del frio";
let h_nueva = historia.replace(/un/g, "muchos");
console.log(h_nueva);


