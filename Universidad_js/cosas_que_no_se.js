/*
Prototype


function Persona(nombre, apellido, email){
	this.nombre = nombre;
	this.apellido = apellido;
	this.email = email;
}

Persona.prototype.telefono = "5444333";

let padre = new Persona("Emilio", "Jones", "Emilio@correo.com");

let madre = new Persona("Adriana", "Martinez", "Adriana@correo.com");

console.log(padre);
document.write(padre.telefono);
document.write("<br>");
document.write("<br>");
console.log(madre);
*/

//Uso de call

let persona1 = {
	nombre: "Juan",
	apellido: "Perez",
	nombreCompleto : function(titulo, tel){
		return titulo + ": " + this.nombre + " " + this.apellido + " " + tel; 
	}
}

let persona2 = {
		nombre: "Martin",
		apellido: "Gallo",

}

//document.write(persona1.nombreCompleto("Arquitecto", "4666333"));
//document.write("<br>");
//document.write(persona1.nombreCompleto.call(persona2, "Ingeniero", "5999888"));

//APPLY
document.write(persona1.nombreCompleto("Arquitecto", "4666333"));
document.write("<br>");
let arreglo = ["Ingeniero", "5999888"];
document.write(persona1.nombreCompleto.apply(persona2, arreglo));
