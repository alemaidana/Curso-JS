/*
6am-11am --> Buen dia
12am-18pm --> Buenas tardes
19pm-24pm --> Buenas noches
0am-6am --> Durmiendo
*/

let hora = 18.30;

if (hora >= 6 && hora <= 11){

	document.write("Buen dia");
	
}else if(hora > 11 && hora <= 18){

	document.write("Buenas tardes");

}else if(hora > 18 && hora <= 24){

	document.write("Buenas noches");

}else if(hora > 0 && hora < 6){

	document.write("durmiendo");

}
 	