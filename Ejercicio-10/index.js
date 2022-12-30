//- En el entrypoint index.js, importa el módulo controller.js
//- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
import chalk from 'chalk';
import { suma, multiplica} from "./controller.js";

// El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
const resultado = multiplica( suma(1,2), suma(4,5) );

//- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.green(resultado));

