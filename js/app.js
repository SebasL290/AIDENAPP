//abrir popup
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btni');
const  ingresar = document.querySelector('.btnr')
const inicolink = document.querySelector('.inico-link');
const registrarselink = document.querySelector('.registrarse-link');
const btnpopup = document.querySelector('.btninicio-popup');
const iconclose = document.querySelector('.icon-close');
const saludo = document.getElementById('saludo')
const usuarioinput = document.querySelector('#usuarioi')
const contraseñainput = document.getElementById('contraseña')
const recordarmeCheckbox = document.getElementById('recordarme')
const loginForm = document.querySelector('#loginForm')


// movimientos con scroll

let stars = document.getElementById('stars');
let avion = document.getElementById('avion');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');


    window.addEventListener('scroll', function (){
        let value = window.scrollY;
        stars.style.top = value * 0.25 + 'px' ;
        avion.style.left = value * 0.45 + 'px' ;
        moon.style.top = value * 0.50 + 'px' ;
        mountains_behind.style.top = value * 0.7 + 'px' ;
        mountains_front.style.left = value * 0 + 'px' ;
    })



//activar y desactivar pop-up

registrarselink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

inicolink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
 
iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


//registro
const formulario = document.querySelector('.registro')
const username = document.querySelector('.usernamer')
const password = document.querySelector('.passwordr')
const email = document.querySelector('.correo')

function registrarUser(e) {
    e.preventDefault();
    let user = { 
        userName: username.value.toLowerCase(),
        userPass: password.value.toLowerCase(),
        userEmail: email.value.toLowerCase(),
        userNombre: ".",
        userlogged: false,
        avatar: "avatar1.png",
        certificado: false,
        progreso: 0,
        progreso1: 0,
        progreso2: 0,
        progreso3: 0
    }
    //enviar información a local storage

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].userEmail === correo.value) {
            
            formulario.reset();
            return;
        }
    }
    usuarios.push(user)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));     
    wrapper.classList.remove('active');
}
formulario.addEventListener('submit', registrarUser)


let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const error = document.getElementById("errorBox")
//inicio de sesion 
function validarUsuario (e){
e.preventDefault()
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
//llamar la información de local storage
for (let i = 0; i < usuarios.length; i++) {

    if(usuarioinput.value === usuarios[i].userName && contraseñainput.value === usuarios[i].userPass){
        usuarios[i].userlogged = true
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
      wrapper.classList.remove('active-popup');
      saludo.textContent = `Hola, ${usuarios[i].userName}`;
      wrapper.classList.remove('active-popup');
      btnusuario.style.display = "flex"
      btnregistro.style.display = "none"
      return
    }}

    
    loginForm.reset()
    
}
loginForm.addEventListener('submit',validarUsuario)


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




//Modo invitado (registro)
const btnInvitador = document.querySelector(".btn-invr");

function registrarInvitado(e){
    e.preventDefault();
    let user = {
        userName: "Invitado",
        userPass:  "none",
        userEmail:  "none",
        userNombre: ".",
        userlogged: true,
        certificado: false,
        progreso: 0,
        progreso1: 0,
        progreso2: 0,
        progreso3: 0
    }
    //enviar información a local storage

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];
    usuarios.push(user)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));   
    window.location = "index.html"
}

btnInvitador.addEventListener("click",registrarInvitado)

//Modo invitado (inicio)
const btnInvitadoi = document.querySelector(".btn-invi");
function IniciarInvitado (e){
    e.preventDefault();
    //llamar la información de local storage
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].userName === "Invitado"){
    
        window.location = "index.html"
        usuarios[i].userlogged = true
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        return
    }
  }
}

btnInvitadoi.addEventListener("click", IniciarInvitado)




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






