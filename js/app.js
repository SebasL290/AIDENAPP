//abrir popup
const wrapper = document.querySelector('.wrapper');
const btn = document.querySelector('.btni')
const  ingresar = document.querySelector('.btnr')
const inicolink = document.querySelector('.inico-link');
const registrarselink = document.querySelector('.registrarse-link');
const btnpopup = document.querySelector('.btninicio-popup');
const iconclose = document.querySelector('.icon-close');
const saludo = document.getElementById('saludo')
const usuarioinput = document.getElementById('usuario')
const contraseñainput = document.getElementById('contraseña')
const recordarmeCheckbox = document.getElementById('recordarme')



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
    }
    localStorage.setItem('user', JSON.stringify(user))
    wrapper.classList.remove('active');
}
formulario.addEventListener('submit', registrarUser)


//inicio de sesion 
function validarUsuario (e){
e.preventDefault()
let user = JSON.parse( localStorage.getItem('user'))

    if(username.value === user.userName && password.value === user.userPass){
        console.log('felicidades puedes entrar ')
      wrapper.classList.remove('active-popup');
    }else{
        console.log('sigue intentando')
        alert("Usuario o contraseña incorrecta")
    }
    formulario.reset()
}
ingresar.addEventListener('submit',validarUsuario)

 

//saludo
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("user"));

    if (recordarmeCheckbox.checked) {
        localStorage.setItem('usuario', usuario);
    }
    saludo.innerHTML = `Hola, ${usuario.userName}`;
    wrapper.classList.remove('active-popup');
});
