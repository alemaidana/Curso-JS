document.write("<h1>Ejercicios Javascript</h1>");

document.write("<h3>Numero Par o impar</h3>");

let numero_uno = 1;
let numero_dos = 2;
let numero_tres = 3;
let numero_cuatro = 4;

document.write(numero_uno + " ");
document.write(numero_uno % 2 == 0 ? "Es Par":"Es Impar");
document.write("<br>");
document.write(numero_dos + " ");
document.write(numero_dos % 2 == 0 ? "Es Par":"Es Impar");
document.write("<br>");
document.write(numero_tres + " ");
document.write(numero_tres % 2 == 0 ? "Es Par":"Es Impar");
document.write("<br>");
document.write(numero_cuatro + " ");
document.write(numero_cuatro % 2 == 0 ? "Es Par":"Es Impar");

document.write("<h3>¿Es mayor de edad?</h3>");

let edad_alumno = 17;
let edad_profesor = 40;
let edad_abuelo = 85;

document.write("¿Es mayor de edad el alumno?: ");
document.write(edad_alumno >= 18 ? "Es Mayor" : "Es Menor")
document.write("<br>");
document.write("¿Es mayor de edad el profesor?: ");
document.write(edad_profesor >= 18 ? "Es Mayor" : "Es Menor")
document.write("<br>");
document.write("¿Es mayor de edad el abuelo?: ");
document.write(edad_abuelo >= 18 ? "Es Mayor" : "Es Menor")

document.write("<h3>¿Puede votar?</h3>");

let edad_votante = 17;
let votacion = edad_votante >= 18 ? "Puede Votar" : "No puede votar";
document.write("Puede votar ???? " + votacion);