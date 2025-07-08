//nav
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
            alert("Este correo ya está registrado. Usa otro o inicia sesión.");
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
      ocultarc.style.filter = "none"
      PopUp.style.display = 'none';
      return
    }}
    alert("Usuario o contraseña incorrecta")
    loginForm.reset()
    
}
loginForm.addEventListener('submit',validarUsuario)


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
    window.location = "../index.html"
}

btnInvitador.addEventListener("click",registrarInvitado)

//Modo invitado (inicio)
const btnInvitadoi = document.querySelector(".btn-invi");
function IniciarInvitado (e){
    e.preventDefault();
    //llamar la información de local storage
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].userName === "Invitado"){
    
        window.location = "../index.html"
        usuarios[i].userlogged = true
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        return
    }
  }
}

btnInvitadoi.addEventListener("click", IniciarInvitado)


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




//modulo1

const EXA1 = document.querySelector(".btn1")
const EXA2 = document.querySelector(".btn2")
const EXA3 = document.querySelector(".btn3")
const EXA4 = document.querySelector(".btn4")
const EXA5 = document.querySelector(".btn5")
const EXA9 = document.querySelector(".btn9")

/* 
EXA1.parentElement.offsetParent.style.filter = "grayscale(0) brightness(1)" 
EXA5.parentElement.offsetParent.style.filter = "grayscale(0) brightness(1)" 
EXA9.parentElement.offsetParent.style.filter = "grayscale(0) brightness(1)"  */




function Invalidardesafiosm1 (){
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userlogged && ( usuarios[i].progreso1 >= 25 && usuarios[i].progreso1 <50 ) ){
            EXA2.style.cursor = "pointer"
            EXA2.style.pointerEvents = "all"
         
                   
            return
            }else if(usuarios[i].userlogged && ( usuarios[i].progreso1 >= 50 && usuarios[i].progreso1 <75) ){
            EXA3.style.cursor = "pointer"
            EXA3.style.pointerEvents = "all"
            
               
            return
            }else if(usuarios[i].userlogged && ( usuarios[i].progreso1 >= 75 && usuarios[i].progreso1 <=100) ){
            EXA4.style.cursor = "pointer"
            EXA4.style.pointerEvents = "all"
               
                return
            }
        }
        }
        Invalidardesafiosm1()



 //modulo2


    const EXA6 = document.querySelector(".btn6")
    const EXA7 = document.querySelector(".btn7")
    const EXA8 = document.querySelector(".btn8")
   
   
    function Invalidardesafiosm2 (){
       for (let i = 0; i < usuarios.length; i++) {
           if(usuarios[i].userlogged && ( usuarios[i].progreso2 >= 25 && usuarios[i].progreso2 <50 ) ){
               EXA6.style.cursor = "pointer"
               EXA6.style.pointerEvents = "all"
               return
               }else if(usuarios[i].userlogged && ( usuarios[i].progreso2 >= 50 && usuarios[i].progreso2 <75) ){
               EXA7.style.cursor = "pointer"
               EXA7.style.pointerEvents = "all"
                   return
               }else if(usuarios[i].userlogged && ( usuarios[i].progreso2 >= 75 && usuarios[i].progreso2 <=100) ){
               EXA8.style.cursor = "pointer"
               EXA8.style.pointerEvents = "all"
                   return
               }
           }
           }

Invalidardesafiosm2()


 //modulo3

    
 const EXA10 = document.querySelector(".btn10")
 const EXA11 = document.querySelector(".btn11")
 const EXA12 = document.querySelector(".btn12")


 function Invalidardesafiosm3 (){
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userlogged && ( usuarios[i].progreso3 >= 25 && usuarios[i].progreso3 <50 ) ){
            EXA10.style.cursor = "pointer"
            EXA10.style.pointerEvents = "all"
            return
            }else if(usuarios[i].userlogged && ( usuarios[i].progreso3 >= 50 && usuarios[i].progreso3 <75) ){
            EXA11.style.cursor = "pointer"
            EXA11.style.pointerEvents = "all"
                return
            }else if(usuarios[i].userlogged && ( usuarios[i].progreso3 >= 75 && usuarios[i].progreso3 <=100) ){
            EXA12.style.cursor = "pointer"
            EXA12.style.pointerEvents = "all"
                return
            }
        }
        }
    Invalidardesafiosm3()
    




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





//ocultar contenido
const ocultarc = document.querySelector('.contenido')
const PopUp = document.querySelector(".popup");
const Sect1 = document.querySelector(".sect1");
const boton = document.querySelector(".boton");
const TextoExa = document.querySelector(".pop-text");
const TextoSig = document.querySelector(".pop-next")
const iconF = document.querySelector(".icon-f");
const BtnExa = document.querySelector(".buttone");

function ocultar (){
    for (let i = 0; i < usuarios.length; i++){
        let confirmarusuario = usuarios[i] ? usuarios[i].userlogged : false
        if(confirmarusuario){
        ocultarc.style.filter = "none"
        return
       }
    }
    ocultarc.style.filter = "blur(8px)"
    PopUp.style.display = 'flex';
  
}
ocultar()


//cerrar sesion 

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
 





