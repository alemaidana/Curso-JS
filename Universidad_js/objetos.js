let persona = {
	nombre : "Alejandro",
	apellido: "Maidana",
	correo: "alfred@gmail.com",
	edad: 17,
	idioma: "esp",
	get lang(){
		return this.idioma.toUpperCase();
	},
	get nombre_completo() { 
	return this.nombre + " " + this.apellido}
};

document.write(persona.nombre_completo);
document.write("<br>");

 let persona2 = new Object();
 persona2.nombre = "Carlos";
 persona2.apellido = "Lovera";
 persona2.direccion = "Mercedes 215";
 persona2.telefono = "47718899";

document.write(persona["apellido"]);
document.write("<br>");

for(const elemento in persona2){

document.write(persona2[elemento] + "<br>");

}

document.write("<br>");


function Empleado(nombre, apellido, cargo, bono){
	this.nombre = nombre;
	this.apellido = apellido;
	this.cargo = cargo;
	this.bono = bono;
	this.sueldo = function(){
		return this.cargo + " cobra el bono de " + this.bono;
	}
}


const empleado1 = new Empleado("Carlos", "Villa", "Limpieza", 5000);
const empleado2 = new Empleado("Matias", "Rojas", "Computacion", 8000);
//const la_persona = JSON.stringify(persona);
//document.write(la_persona);

const la_persona = JSON.stringify(empleado1);
document.write(la_persona);

document.write(empleado1.sueldo());

document.write("<br>");

document.write(empleado2.sueldo());

const la_persona2 = JSON.stringify(empleado2);
document.write(la_persona2);