const PopUp = document.querySelector(".popup");
const Sect1 = document.querySelector(".sect1");
const Equis = document.querySelector(".equis");
const TextoExa = document.querySelector(".pop-text");
const TextoSig = document.querySelector(".pop-next");
const iconF = document.querySelector(".icon-f");
const BtnExa = document.querySelector(".buttone");
const Formulario = document.querySelector("#quiz-form");
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

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
