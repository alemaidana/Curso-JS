//Crea un archivo JS que contenga las siguientes líneas

//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const lista_compra = ["Yogurth", "Avena", "Pasta", "Frutas", "Tomates"];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"
lista_compra.push("Aceite de Girasol");

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
lista_compra.pop();

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const lista_peliculas = [ 
    {titulo: "La Red Social", director: "David Fincher", fecha: new Date('2010-10-21')},
    {titulo: "Jobs", director: "Michael Stern", fecha: new Date('2013-08-22')},
    {titulo: "Terminator", director: "James Cameron", fecha: new Date('1984-10-26')}
];

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const post_2010 = lista_peliculas.filter(elemento => elemento.fecha > new Date('2010-01-01'));

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = lista_peliculas.map(elemento => elemento.director);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = lista_peliculas.map(elemento => elemento.titulo);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const director_titulo = directores.concat(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const propagacion_director_titulo = [...directores, ...titulos];
