//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre
let nombre = "Alejandro";

// - Otra cadena de texto con tu Apellido
let apellido = "Maidana";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();

// - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numero_letras_estudiante = estudiante.length;

//- Una variable que contenga la primera letra del Nombre
let nombre_primer_letra = nombre[0];

//- Otra variable que contenga la última letra del Apellido
let apellido_ultima_letra = apellido[apellido.length - 1];

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudiante_sin_espacios = estudiante.replace(/ /g, "");

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let buscar_nombre = estudiante.includes(nombre);






