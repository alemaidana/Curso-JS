//declaramos un arreglo
const autos = ["Bmw","Mercedez Benz","Peugeot","Volvo"];

autos.push("Fiat");

for(i=0; i < autos.length; i++)
{
document.write(autos[i] + "<br>");	
}

//saber si trabajamos con un arreglo

document.write(autos instanceof Array);