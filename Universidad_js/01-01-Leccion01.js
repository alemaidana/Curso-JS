//strings
var nombre = 'Alejandro';
var apellido = 'Maidana';
//numeros
var num1 = 10;
var num2 = 20;
var resultado = num1 + num2;
//objetos
var objeto = {
	nombre : "Alejandro",
	apellido : "Maidana",
	telefono : "44445555"
};
//arreglos en Js con objetos
var autos = ["Fiat", "VW", "Volvo"];
//booleanas
var bandera = true;
//function
function mi_funcion() {}
//simbolo
var simbolo = Symbol("*");
//clase
class Clase{

}
//indefinido
var j;
//null
var nula = null;
//empty
var dragon = " ";

document.write("<h1>Tipos de Datos</h1><br><h3>Cadenas</h3>");
document.write("Tu nombre es: <b>" + nombre + "</b> y tu apellido es: <b>" + apellido + "</b>");
document.write("<h3>Numeros</h3>");
document.write("El primer numero es: <b>" + num1 + "</b> el segundo numero es: <b>" + num2 + "</b> la suma de ambos es : <b>" + resultado + "</b>");
document.write("<h3>Objetos</h3>");
document.write("Tu nombre es: <b>" + objeto['nombre'] + "</b> y tu apellido es: <b>" + objeto['apellido'] + "</b> y tu telefono es: <b>" + objeto['telefono'] + "</b>");
document.write("<br>");
document.write("<h3>Variable objeto--> tipo</h3>");
document.write(typeof objeto);
document.write("<h3>Arreglo autos--> tipo</h3>");
document.write(typeof autos);
document.write("<h3>Variable resultado--> tipo</h3>");
document.write(typeof resultado);
document.write("<h3>Variable cadena--> tipo</h3>");
document.write(typeof nombre);
document.write("<h3>Variable bandera--> tipo</h3>");
document.write(typeof bandera);
document.write("<h3>Funcion mi_funcion--> tipo</h3>");
document.write(typeof mi_funcion);
document.write("<h3>Variable simbolo--> tipo</h3>");
document.write(typeof simbolo);
document.write("<h3>Clase--> tipo</h3>");
document.write(typeof Clase);
document.write("<h3>Variable j--> tipo</h3>");
document.write(typeof j);
document.write("<h3>Variable nula--> tipo</h3>");
document.write(typeof nula);
document.write("<h3>Variable dragon--> tipo</h3>");
document.write(typeof dragon);