function countdown(n) {
    
    if( n < 1 ){
        
        return [];
    }
    
    const arreglo = 
    countdown(n - 1);

    arreglo.push(n--);

    return arreglo;
  }
  console.log(countdown(5));