function saludar()
{
	document.write("<h1>Que hongo chamos !</h1>");
}

function saludar_amigo(amigo)
{
	document.write("<h1>Que hongo " + amigo  + "!</h1>");
}

function sumar(a,b)
{
	return a + b;
}

//inline function o funcion del tipo expresion
const suma = function (a,b) {return a + b;};

//saludar_amigo("Juan Carlos");
//document.write(sumar(4,5));
//document.write(suma(41,5));

/*
(function(a,b)
{
	document.write("Ejecutandose funcion anonima, no reutilizable <br>");
	document.write("Ejecutandose en una anonima otra anonima " + suma(2,6) + "<br>");
	document.write(a + b);
})(8,7);
*/

//arrow functions
const flecha = (a,b) => a + b;

document.write(flecha(5,6));

document.write("<br>");

const duda = (a) => a < 10 ? "mas bajo" : "mas alto";

document.write(duda(11));

document.write("<br>");

const la_suma = suma_total(3, 5, 6, 6, 10);

function suma_total()
{
	
	let total = 0;

	for(i = 0; i < arguments.length ; i++){
		
		total += arguments[i];
	}
	
	return total;
}

document.write(la_suma);