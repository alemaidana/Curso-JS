//Comparar listas
//every()

const numeros = [10,32,44,6,4,77,88,2,3,-1,-52];

const mayores_cero = numeros.every( num => num > 0);

//console.log(mayores_cero);

const lista1 = [1,2,3,4,5];
const lista2 = [1,2,3,4,5];


function comparar_arreglos(arreglo1, arreglo2) {
    
    if (arreglo1.length !== arreglo2.length) return false;

    const resultado = arreglo1.every( (valor, indice) => {

        if(valor === arreglo2[indice]) return true
        return false
    });

    return resultado;
}

const igualdad = comparar_arreglos(lista1,lista2);

console.log(igualdad);