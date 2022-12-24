let i = 1;
let numero = 10;
let factorial = 1;

//bucle while 
while (true) {
    
    factorial *= i;

    i++;

    //bifurcacion if
    if(i > numero){
        //sentencia break
        break;
    }
}

console.log(factorial);