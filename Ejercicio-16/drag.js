const parrafo = document.querySelectorAll(".parrafo");
const seccion = document.querySelectorAll(".seccion");
const papelera_reciclaje = document.querySelectorAll(".papelera");
const boton = document.querySelector(".boton_reset");

parrafo.forEach( parrafo =>{
    
    parrafo.addEventListener("dragstart", event => {
        
        event.dataTransfer.setData("id", parrafo.id);

    });

    parrafo.addEventListener("dragend", event => {
        
    });


});

seccion.forEach( seccion =>{
    
    seccion.addEventListener("dragover", event => {
        
        event.preventDefault();

    });

    seccion.addEventListener("drop", event => {
        
        const dato = event.dataTransfer.getData("id");

        console.log(dato);

        const parrafo = document.getElementById(dato);

        seccion.appendChild(parrafo);

    });


})

papelera_reciclaje.forEach( papelera =>{
    
    papelera.addEventListener("dragover", event => {
        
        event.preventDefault();

    });

    papelera.addEventListener("drop", event => {
        
        const dato = event.dataTransfer.getData("id");

        const parrafo = document.getElementById(dato);

        parrafo.remove();

    });


})

boton.addEventListener("click", () => {

    document.location.reload();

});