const parrafo = document.querySelectorAll(".parrafo");
const seccion = document.querySelectorAll(".seccion");

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