//Crea un archivo JS que contenga las siguientes líneas

//- Una función sin parámetros que devuelva siempre "true"
function always_true()
{
	return true;
}

console.log(always_true());

//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
function saludar_asincrono()
{
	
	return new Promise( (resolve) => {
		
		setTimeout( () => {
			
			resolve("Hola soy una promesa");
			
		}, 5000);
	
});

};

saludar_asincrono()
				   .then(response => console.log(response));	
				   		  
//- Una función generadora de índices pares automáticos
function* generadora_pares()
{
	let id = 0; 
		
	while(true){
				
		yield id +=2;
		
	}
	
}
						  
const generador = generadora_pares();

console.log(generador.next().value); //2
console.log(generador.next().value); //4
console.log(generador.next().value); //6
console.log(generador.next().value); //8
console.log(generador.next().value); //10
						  
				  
						  