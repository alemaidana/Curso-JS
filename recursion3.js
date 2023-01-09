function countdown(n) {
    
    if( n < 1 ){
        
        return [];
    }

    let arreglo = countdown(n-1);

    arreglo.unshift(n);

    return arreglo;

  }

  
console.log(countdown(5));
console.log(countdown(-1));