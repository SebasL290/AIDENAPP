let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//Ruta protegida por inicio de sesión

//Verificar existencia de sesión
const verificar = usuarios.every((item) => item.userLogged === false);

verificar ? window.location = "../index.html" : null

const btnIniciarSesion = document.querySelector(".nav-link4");
const btnRegistroSesion = document.querySelector(".nav-link5");
const SaludoUsuario = document.querySelector(".nav-link6");
const btnUsuario = document.querySelector(".nav-link7");
const btnlist = document.querySelector(".nav-list");
const BarrraNav = document.querySelector("#navbarNav");
const btnCerrarSesion = document.querySelector(".nav-link8");


//verifica si el usuario esta registrado
function verificarSesion(){
   /*  let currentUser = JSON.parse(localStorage.getItem('user')); */
   for (let i = 0; i < usuarios.length; i++) {
    let confirmarSesion = usuarios[i] ? usuarios[i].userLogged : false

    if (confirmarSesion){
        //si hay un usuario logueado, mostrarsu nombre y ocultar botones
        SaludoUsuario.textContent = `Hola, ${usuarios[i].userNU}`;
        btnIniciarSesion.style.display = 'none';
        btnRegistroSesion.style.display = 'none';
        btnUsuario.style.display = 'flex';
        btnCerrarSesion.style.display = "flex"  
        return
    }
}
SaludoUsuario.textContent = '';
btnIniciarSesion.style.display = 'flex';
btnRegistroSesion.style.display = 'flex';
btnlist.classList.add('d-none');
btnlist.classList.remove('d-flex');
BarrraNav.style.justifyContent = "right"
btnCerrarSesion.style.display = "none" 

}

document.addEventListener('DOMContentLoaded', verificarSesion);

function cerrarSesion (){

    for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].userLogged){
        usuarios[i].userLogged = false
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location = "../index.html"
    }
    }
    }
    
btnCerrarSesion.addEventListener("click",cerrarSesion)
const PopUp = document.querySelector(".popup");
const Sect1 = document.querySelector(".sect1");
const Equis = document.querySelector(".equis");
const TextoExa = document.querySelector(".pop-text");
const TextoSig = document.querySelector(".pop-next");
const iconF = document.querySelector(".icon-f");
const BtnExa = document.querySelector(".buttone");
const Formulario = document.querySelector("#quiz-form");

Formulario.addEventListener("submit", ValidarRespuestas);

function capturarRespuestas() {
  const resp = {};
  for (let i = 1; i <= 10; i++) {
    resp['p'+i] = document.querySelector(`input[name="q${i}"]:checked`)?.value;
  }
  return resp;
}

function ValidarRespuestas(e) {
  e.preventDefault();
  const respuestasUser = capturarRespuestas();
  const respuestasCorrectas = {
    p1:"Illustrator",
    p2:"Un dispositivo para dibujar digitalmente",
    p3:"PNG",
    p4:"Rojo, Verde, Azul",
    p5:"Diseño vectorial",
    p6:"Pincel",
    p7:"El número de píxeles por pulgada",
    p8:"Vectoriales",
    p9:"Combinar capas de diferentes formas",
    p10:"Una representación visual de un diseño"
  };
  let acumulado = 0;
  for (let key in respuestasCorrectas) {
    if (respuestasUser[key] === respuestasCorrectas[key]) acumulado++;
  }

  const user = usuarios.find(u => u.userlogged);
  if (user && acumulado >= 3) {
    PopUp.style.display = 'flex';
    iconF.style.display = 'block';
    TextoExa.textContent = "¡Ganaste el examen!";
    TextoSig.style.display = 'inline-block';
    user.progreso += 7;
    user.progreso1 += 25;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    PopUp.style.display = 'flex';
    iconF.style.display = 'none';
    TextoExa.textContent = "Debes repetir el examen";
    TextoSig.style.display = 'none';
  }
  Sect1.classList.add('blur');
  BtnExa.style.cursor = 'not-allowed';
}

function QuitarPopUp() {
  PopUp.style.display = 'none';
  Sect1.classList.remove('blur');
  BtnExa.style.cursor = 'pointer';
  window.location = "../vistas/modulo1.html";
}

function siguienteMódulo() {
  window.location = "../vistas/modulo1-2.html";
}

Equis.addEventListener('click', QuitarPopUp);
TextoSig.addEventListener('click', siguienteMódulo);
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