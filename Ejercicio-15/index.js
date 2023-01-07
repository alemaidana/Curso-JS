const nombre = "Alejandro";
const apellido = "Maidana";

const datos = {
    nombre : nombre,
    apellido : apellido
};

//localStorage.setItem("persona", JSON.stringify(datos));

//sessionStorage.setItem("usuario" , JSON.stringify(datos));

const ahora = new Date();

//document.cookie = `datos=${JSON.stringify(datos)};expires=${new Date(ahora.getTime() + 2 * 60000)}`