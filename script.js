let open = document.getElementById("abrir")
let navegacion = document.getElementById("nav");
let closed = document.getElementById("cerrar");

open.addEventListener("click", ()=>{
    navegacion.classList.add("visible");
})

closed.addEventListener("click", ()=>{
    navegacion.classList.remove("visible")
})