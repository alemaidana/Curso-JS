const boton = document.querySelector(".boton");

boton.addEventListener("click", () => {
    alert("Click en el boton");
});


$( () => {
   
    $(".boton").click( () => {
        console.log("Hola, estoy utilizando jQuery");
    })
})


