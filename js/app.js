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
        userlogged: false
    }
    localStorage.setItem('user', JSON.stringify(user))
    wrapper.classList.remove('active');
}
formulario.addEventListener('submit', registrarUser)


//inicio de sesion 
function validarUsuario (e){
e.preventDefault()
let user = JSON.parse( localStorage.getItem('user'))
    if(usuarioinput.value === user.userName && contraseñainput.value === user.userPass){
      user.userlogged = true
      localStorage.setItem("user", JSON.stringify(user))
      wrapper.classList.remove('active-popup');
      saludo.textContent = `Hola, ${user.userName}`;
      wrapper.classList.remove('active-popup');
      btnusuario.style.display = "flex"
      btnregistro.style.display = "none"
    }else{
        alert("Usuario o contraseña incorrecta")
    }
}
loginForm.addEventListener('submit',validarUsuario)

 const btnusuario  = document.querySelector(".Dash")
 const btnregistro  = document.querySelector(".btnpopup")

//saludo
let user = JSON.parse( localStorage.getItem('user'))


//se veran los moduloscon tranparencia pop up de registro 






