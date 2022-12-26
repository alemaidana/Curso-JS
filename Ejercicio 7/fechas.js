// * Crea un archivo llamado fechas.js que contenga las siguientes líneas

//- La fecha de hoy
const fecha_hoy = new Date();

//- La fecha de tu nacimiento
const fecha_nacimiento = new Date("1988/05/15");

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const es_mas_tarde = fecha_hoy > fecha_nacimiento;

//- Una variable que contenga el día de tu nacimiento
const dia_nacimento = fecha_nacimiento.getDate();

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes_nacimento = fecha_nacimiento.getMonth();

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year_nacimento = fecha_nacimiento.getFullYear();
