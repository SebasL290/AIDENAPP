let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

//nombre
const nombre = document.querySelector("#user-name")

function nombre1() {
    for (let i = 0; i < usuarios.length; i++) {
      if(usuarios[i].userlogged){
        nombre.textContent = `${usuarios[i].userName}`;
      }
      
    }
  }

  nombre1()

//barras
const BarraG = document.querySelector("#general");
const Barra1 = document.querySelector("#barra1");
const Barra2 = document.querySelector("#barra2");
const Barra3 = document.querySelector("#barra3");

function barras() {
  for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].userlogged){
    BarraG.style.width = `${usuarios[i].progreso}%`;
    BarraG.textContent = `${usuarios[i].progreso}%`;
    Barra1.style.width = `${usuarios[i].progreso1}%`;
    Barra1.textContent = `${usuarios[i].progreso1}%`;
    Barra2.style.width = `${usuarios[i].progreso2}%`;
    Barra2.textContent = `${usuarios[i].progreso2}%`;
    Barra3.style.width = `${usuarios[i].progreso3}%`;
    Barra3.textContent = `${usuarios[i].progreso3}%`;
    }
  }
}
barras()


//certificado
const certificado = document.querySelector('.btn2')
const enlace = document.querySelector('.enlace')

function activarDescarga() {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].userlogged && usuarios[i].progreso === 100) {
      certificado.style.background = "#FF0A6C";
      usuarios[i].certificado = true
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
      return
    }
  }

}

document.addEventListener("DOMContentLoaded", activarDescarga);



function activarDescarga1() {
  for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].userlogged && usuarios[i].progreso === 100) {
      window.location = "../vistas/precertificado.html"
      usuarios[i].certificado = true
      localStorage.setItem("usuarios", JSON.stringify(usuarios))
      return
    }
  }

}

document.addEventListener("click", activarDescarga1);



//cerrar sesion
const btncerrars = document.querySelector('#btn1')

function cerrarSesion (){

    for (let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].userlogged){
        usuarios[i].userlogged = false
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location = "../index.html"}
    }
    }
    
    btncerrars.addEventListener("click",cerrarSesion)

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
