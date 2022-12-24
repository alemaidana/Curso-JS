//ordenamientos de listas

//sort()

//ordenar array numerico
const numeros = [32,56,56,88,77,1,2,3,4,0,66,99];
//de menor a mayor
const ordenados_menor_mayor = numeros.sort((a,b) => a - b );
//console.log(ordenados_menor_mayor);
//de mayor a menor
const ordenados_mayor_menor = numeros.sort((a,b) => b - a );
//console.log(ordenados_mayor_menor);

const listado_isft = [
    {nombre : "Juan" , edad: 33 },
    {nombre : "Carlos" , edad: 22 },
    {nombre : "Brian" , edad: 55 },
    {nombre : "Pedro" , edad: 23 },
    {nombre : "Gomez" , edad: 65},
];

const listado_ordenado_edades = listado_isft.sort((a,b) => a.edad - b.edad);

console.log(listado_ordenado_edades);

const nombres = ["Kevin", "John", "Brian", "Andrew", "Klay"];


nombres.sort((a,b) => {
                
    if(a > b ){ //ordenar a-z
        return 1;
    }else if( a < b){ //ordenar z-a
        return -1;
    }else{
        return 0;
    }
});

console.log(nombres);
