
var wordPattern = function(pattern, s) {

	let set_pattern = new Set(pattern.split(""));
	let set_s = new Set(s.split(" "));

	let sin_repetidos_pattern = [...set_pattern];
	let sin_repetidos_s = [...set_s];

    var valoresAceptados = /^[0-9]+$/;

    let ir = 0;
    let i = 0;

    while(ir < sin_repetidos_pattern.length){		
       
        if(!pattern[i].match(valoresAceptados)){

            pattern = pattern.replaceAll(pattern[i], ir.toString());
            
            ir++;
        }
		 
        i++;
	}

	s = s.split(" ")

	s = s.join("");

	for( i = 0 ; i < sin_repetidos_s.length; i++){
		
		s = s.replaceAll(sin_repetidos_s[i], i.toString());	
		
	}

	return s === pattern;
	
}

// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
// console.log(wordPattern("aaaa", "dog cat cat dog"));
// console.log(wordPattern("abc", "b c a"));
// console.log(wordPattern("deadbeef", "all people seem all to need need link"));
// console.log(wordPattern("deadbeef", "d e a d b e e f"));

//console.log(wordPattern("syys", "a abc abc a"));


let arreglo = ["a", "abc", "abc", "a"];

var valoresAceptados = /^[0-9]+$/;

let ir = 0;
let i = 0;

    while(ir < arreglo.length){		
       
        if(!arreglo[i].match(valoresAceptados)){

            arreglo[i] = arreglo[i].replaceAll(arreglo[i], ir.toString());
            
            ir++;
        }
		 
        i++;
	}

	console.log(arreglo);