const boton = document.querySelector(".boton");
const boton2 = document.querySelector(".boton2");

const titulo = document.querySelector(".titulo");

const lista = document.querySelector("ul");


boton.addEventListener("click", () => {

    const elemento = document.createElement("li");

    elemento.innerText = "X-Men";

    elemento.classList.add("list-group-item");

    lista.append(elemento);


    // titulo.innerText = "Hola Chamos";
    // titulo.style.color = "red";
})


boton2.addEventListener( "click", () => {

    lista.removeChild(lista.lastElementChild);

})

//console.log(lista.childNodes);

//lista.childNodes[5].style.backgroundColor = "red";