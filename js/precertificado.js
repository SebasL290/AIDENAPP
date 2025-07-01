//inicio de sesion
const Nombre = document.querySelector(".Nombre");
const Formulario = document.querySelector(".Formulario");

let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];

//verificar usuario
function AgregarNombre (e){
for (let i = 0; i < usuarios.length; i++) {
    e.preventDefault();
    if(usuarios[i].userlogged){
    window.location = "./certificado.html"
    usuarios[i].userNombre = Nombre.value,
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    Formulario.reset()
    return
    }
    }
}

Formulario.addEventListener("submit",AgregarNombre)


//popup
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btni');
const ingresar = document.querySelector('.btnr')
const inicolink = document.querySelector('.inico-link');
const registrarselink = document.querySelector('.registrarse-link');
const btnpopup = document.querySelector('.btninicio-popup');
const iconclose = document.querySelector('.icon-close');
const saludo = document.getElementById('saludo')
const usuarioinput = document.querySelector('#usuarioi')
const contraseñainput = document.getElementById('contraseña')
const recordarmeCheckbox = document.getElementById('recordarme')
const loginForm = document.querySelector('#loginForm')


//saludo
const btnusuario  = document.querySelector(".Dash")
const btnregistro  = document.querySelector(".btnpopup")

function saludousuario(e){
   e.preventDefault();
   
   for (let i = 0; i < usuarios.length; i++){
    let confirmarusuario = usuarios[i] ? usuarios[i].userlogged : false
    if(confirmarusuario){
       saludo.textContent = `Hola, ${usuarios[i].userName}`;
       wrapper.classList.remove('active-popup');
       btnusuario.style.display = "flex"
       btnregistro.style.display = "none"
       return
   }
}
saludo.textContent = ''; 
btnusuario.style.display = "none"
btnregistro.style.display = "flex"
}

document.addEventListener("DOMContentLoaded",saludousuario)

//cerrar sesion menu
const btncerrarmenu = document.querySelector('.cerrar')

function cerrarSesion (){

    for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].userlogged){
        usuarios[i].userlogged = false
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location = "../index.html"}
    }
    }
    
    btncerrarmenu.addEventListener("click",cerrarSesion)


//ocultar

const osesion = document.querySelector(".cerrar")

function sesion(){
   
    for (let i = 0; i < usuarios.length; i++){
     let confirmarusuario = usuarios[i] ? usuarios[i].userlogged : false
     if(confirmarusuario){
      osesion.style.display = "flex"
        return
    }
 }
 osesion.style.display = "none"
 }
 
 document.addEventListener("DOMContentLoaded", sesion)




