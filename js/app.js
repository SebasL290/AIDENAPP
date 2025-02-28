//abrir popup
const wrapper = document.querySelector('.wrapper');
const inicolink = document.querySelector('.inico-link');
const registrarselink = document.querySelector('.registrarse-link');
const btnpopup = document.querySelector('.btninicio-popup');
const iconclose = document.querySelector('.icon-close');
const logoutBtn = document.getElementById('btncerrars');
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
const  ingresar = document.querySelector('.inicio')
const username = document.querySelector('.usernamer')
const password = document.querySelector('.passwordr')
const email = document.querySelector('#correo')

function registrarUser(e) {
    e.preventDefault();
    let user = { 
        userName: username.value.toLowerCase(),
        userPass: password.value.toLowerCase(),
        userEmail: email.value.toLowerCase(),
    }
    localStorage.setItem('user', JSON.stringify(user))
    /* formulario.reset();  */
}
formulario.addEventListener('submit', registrarUser)
/* let robo =JSON.parse(localStorage.getItem("user")) */


//inicio de sesion 
function validarUsuario (e){
e.preventDefault()
let User = JSON.parse( localStorage.getItem('user'))
console.log(User.userName)
console.log(User.userPass)


    if(username.value === User.userName && password.value === User.userPass){
        console.log('felicidades puedes entrar ')
        window.location = './index.html' 
    }else{
        console.log('sigue intentando')
    }
   /*  formulario.reset()   */
}
ingresar.addEventListener('submit',validarUsuario)

 

//saludo
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const usuario = usuarioinput.value;
    const contraseña = contraseñainput.value;

    if (recordarmeCheckbox.checked) {
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('contraseña', contraseña)
    }

    saludo.innerHTML = `Hola, ${usuario}`;
    logoutBtn.style.display = 'inline';
    wrapper.classList.remove('active-popup');

});


btncerrars.addEventListener('click', () => {
    localStorage.removeItem('user');
    saludo.innerHTML = '';
    btncerrars.style.display = 'none';
});
