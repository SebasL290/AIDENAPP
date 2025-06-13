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


const PopUp = document.querySelector(".popup");
const BtnPopUp = document.querySelector(".pop-btn");
const Sect1 = document.querySelector(".sect1");
const Equis = document.querySelector(".equis");
const TextoExa = document.querySelector(".pop-text");
const TextoSig = document.querySelector(".pop-next")
const iconF = document.querySelector(".icon-f");
const BtnExa = document.querySelector(".btn-examen");
const Formulario = document.querySelector("#formulario");
const Textoresp = document.querySelector(".pop-resp");
const ImgPop = document.querySelector(".img-pop");
const ImgPop2 = document.querySelector(".img-pop2");
const ImgPop3 = document.querySelector(".img-pop3");
const ImgPop4 = document.querySelector(".img-pop4");

function capturarRespuestas(){
        // Capturamos las respuestas seleccionadas
        const respuesta1 = document.querySelector('input[name="pregunta1"]:checked')?.value;
        const respuesta2 = document.querySelector('input[name="pregunta2"]:checked')?.value;
        const respuesta3 = document.querySelector('input[name="pregunta3"]:checked')?.value;
        const respuesta4 = document.querySelector('input[name="pregunta4"]:checked')?.value;
        const respuesta5 = document.querySelector('input[name="pregunta5"]:checked')?.value;
        const respuesta6 = document.querySelector('input[name="pregunta6"]:checked')?.value;
        const respuesta7 = document.querySelector('input[name="pregunta7"]:checked')?.value;
        const respuesta8 = document.querySelector('input[name="pregunta8"]:checked')?.value;
        const respuesta9 = document.querySelector('input[name="pregunta9"]:checked')?.value;
        const respuesta10 = document.querySelector('input[name="pregunta10"]:checked')?.value;
        return{
            p1: respuesta1,
            p2: respuesta2,
            p3: respuesta3,
            p4: respuesta4,
            p5: respuesta5,
            p6: respuesta6,
            p7: respuesta7,
            p8: respuesta8,
            p9: respuesta9,
            p10: respuesta10,
        }
}

function ValidarRespuestas(e){
    e.preventDefault()
const respuestasUser = capturarRespuestas()
const respuestasCorrectas = {
    p1:"Azul",
    p2:"Fútbol",
    p3:"Pizza",
    p4:"Pop",
    p5:"Gato",
    p6:"Invierno",
    p7:"Chocolate",
    p8:"Playa",
    p9:"Profundizaciónweb",
    p10:"Chocolate",
}
let acumulado = 0;

const arrayRespuestasUser = Object.values(respuestasUser)
const arrayRespuestasCorrectas = Object.values(respuestasCorrectas)

//recorrer el array de respuestasUser y el de array respuestasCorrectas y las compara
for (let i = 0; i < arrayRespuestasUser.length; i++) {
    if(arrayRespuestasUser[i] == arrayRespuestasCorrectas[i]){
        acumulado++
        Formulario.reset()
    }
    
}

//verifico cuanto lleva el usuario de progreso previo
/* let user = JSON.stringify (localStorage.getItem("user")) || {}; */

//condicional de si gane o perdí el examen
for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].userLogged && acumulado === 10) {
      PopUp.style.display = "flex";
      iconF.style.display = "flex";
      Sect1.style.filter = "blur(5px)";
      TextoExa.textContent = `Ganaste el examen`;
      Textoresp.textContent = `Tu puntaje es ${acumulado}`;
      ImgPop.style.display = "flex"
      ImgPop2.style.display = "none"
      ImgPop3.style.display = "none"
      ImgPop4.style.display = "none"
      TextoSig.style.display = "flex";
      BtnExa.style.cursor = "not-allowed";
      usuarios[i].progreso += 25;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }else if (usuarios[i].userLogged && acumulado === 7 || acumulado === 8 || acumulado === 9) {
      PopUp.style.display = "flex";
      iconF.style.display = "flex";
      Sect1.style.filter = "blur(5px)";
      TextoExa.textContent = `Ganaste el examen`;
      Textoresp.textContent = `Tu puntaje es ${acumulado}`;
      ImgPop.style.display = "none"
      ImgPop2.style.display = "flex"
      ImgPop3.style.display = "none"
      ImgPop4.style.display = "none"
      TextoSig.style.display = "flex";
      BtnExa.style.cursor = "not-allowed";
      usuarios[i].progreso += 25;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }else if (usuarios[i].userLogged && acumulado === 0) {
      PopUp.style.display = "flex";
      iconF.style.display = "none";
      Sect1.style.filter = "blur(5px)";
      TextoExa.textContent = `Debes repetir el examen`;
      Textoresp.textContent = `Tu puntaje es ${acumulado}`;
      ImgPop.style.display = "none"
      ImgPop2.style.display = "none"
      ImgPop3.style.display = "none"
      ImgPop4.style.display = "flex"
      TextoSig.style.display = "none";
      BtnExa.style.cursor = "not-allowed";
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else {
      PopUp.style.display = "flex";
      iconF.style.display = "none";
      Sect1.style.filter = "blur(5px)";
      TextoExa.textContent = `Debes repetir el examen`;
      Textoresp.textContent = `Tu puntaje es ${acumulado}`;
      ImgPop.style.display = "none"
      ImgPop2.style.display = "none"
      ImgPop3.style.display = "flex"
      ImgPop4.style.display = "none"
      TextoSig.style.display = "none";
      BtnExa.style.cursor = "not-allowed";
    }
  }
}



Formulario.addEventListener("submit", ValidarRespuestas)

function QuitarPopUp(){
/*     PopUp.style.display = 'none';
    Sect1.style.filter = 'none'; 
    BtnExa.style.cursor = 'Pointer'; */
     window.location = "../vistas/introduccion.html"

}

Equis.addEventListener('click', QuitarPopUp);

function siguienteMódulo(){
     window.location = "../vistas/certificado.html"
}

iconF.addEventListener('click', siguienteMódulo);

function InvalidarExamen(){
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].userLogged && usuarios[i].progreso >= 100 ){

            PopUp.style.display = 'flex';
            iconF.style.display = 'flex';
            Sect1.style.filter = 'blur(5px)';
            TextoExa.textContent = `Ya ganaste el examen`;
            TextoSig.style.display = 'flex';
            BtnExa.disabled = true;
            /* BtnExa.style.cursor = 'not-allowed'; */
            return
            }
        }
        PopUp.style.display = 'none';
        iconF.style.display = 'none';
        Sect1.style.filter = 'none';
        TextoSig.style.display = 'none';
       /*  BtnExa.style.cursor = 'pointer'; */
       BtnExa.disabled = false;
        
        }
    document.addEventListener('DOMContentLoaded',InvalidarExamen);
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
