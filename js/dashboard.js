//cerrar sesion
const btncerrars = document.querySelector('#btn1')

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function cerrarSesion (){

    for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].userlogged){
        usuarios[i].userlogged = false
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location = "../index.html"}
    }
    }
    
    btncerrars.addEventListener("click",cerrarSesion)
