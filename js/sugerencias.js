//abrir popup
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btni');
const  ingresar = document.querySelector('.btnr')
const inicolink = document.querySelector('.inico-link');
const registrarselink = document.querySelector('.registrarse-link');
const btnpopup = document.querySelector('.btninicio-popup');
const iconclose = document.querySelector('.icon-close');
const saludo = document.getElementById('saludo')
const usuarioinput = document.getElementById('usuario')
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
          return
        }}
        alert("Usuario o contraseña incorrecta")
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

