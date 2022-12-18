class Persona{

	constructor(nombre, apellido)
	{
		this._nombre = nombre;
		this._apellido = apellido;
	}

 	get nombre()
 	{
 		return this._nombre;
 	}

	get apellido()
 	{
 		return this._apellido;
 	}

 	set nombre(nuevo_nombre)
 	{
 		this._nombre = nuevo_nombre;
 	}

}


let persona1 = new Persona("Alejandro","Maidana");
document.write(persona1.nombre);

document.write("<br>");

let persona2 = new Persona("Ariel", "Valcarce");
document.write(persona2.apellido);

persona2.nombre = "Juan Carlos";

document.write(persona2.nombre);
