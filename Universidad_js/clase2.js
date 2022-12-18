class Persona2
{

	static contador = 0;

	static get MAX_OBJ()
	{
		return 5;
	}

	constructor(nombre, apellido)
	{
		this._nombre = nombre;
		this._apellido = apellido;
		if (Persona2.contador < Persona2.MAX_OBJ) 
		{
			this._idpersona = ++Persona2.contador;
		}else{

			return "Mximo de personas alcanzado";
		} 
	}


	get idpersona()
	{
		return this._idpersona;
	}

	get nombre()
	{
		return this._nombre;
	}

	set nombre(nombre)
	{
		this._nombre = nombre;
	}

	get apellido()
	{
		return this._apellido;
	}

	set apellido(apellido)
	{
		this._apellido = apellido;
	}

	nombreCompleto()
	{
		return this._nombre + " " + this._apellido;
	}

	static saludar(persona)
	{
		return  persona._apellido + " Dice Hola Chamos";
	}

}


class Empleado extends Persona2
{

	constructor(nombre, apellido,departamento)
	{
		super(nombre, apellido);
		this._departamento = departamento;
	}

	get departamento()
	{
		return this._departamento;
	}

	set departamento(departamento)
	{
		this._departamento = departamento;
	}

	nombreCompleto()
	{
		return super.nombreCompleto() + " " + this._departamento;
	}

}






const empleado1 = new Empleado("Alec","Maidana","Repositor"); 
const empleado2 = new Empleado("Dan","Michaels","Cajero"); 

document.write(empleado1.nombreCompleto());

document.write("<br>");

document.write(empleado1.idpersona);

document.write("<br>");

document.write(empleado2.idpersona);
