// Obtener datos del localStorage o establecer valores predeterminados
/* let user = JSON.parse(localStorage.getItem("user")) */

document.addEventListener("DOMContentLoaded", function () {
    // Mostrar nombre y avatar
    document.getElementById("avatar-img").src = user.avatar;
   
    
    // Cargar barras de progreso
    actualizarBarra("barra1", "mision0");
    actualizarBarra("barra2", "mision1");
    actualizarBarra("barra3", "mision2");

    // Evento para cambiar el avatar
    document.querySelectorAll(".avatar-option").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            let avatarSrc = this.getAttribute("data-avatar");
            document.getElementById("avatar-img").src = avatarSrc;
            user.avatar = avatarSrc;
            guardarDatos();
        });
    });
});

// Función para actualizar localStorage
function guardarDatos() {
    localStorage.setItem("user", JSON.stringify(user));
}

// Función para actualizar barras de progreso
function actualizarProgreso(id, categoria) {
    let barra = document.getElementById(id);
    user.desafiosCompletados[categoria]++;
    
    if (user.desafiosCompletados[categoria] === 3) {
        user.progresoActual[categoria] += 10;
        if (user.progresoActual[categoria] > 100) user.progresoActual[categoria] = 100;
        barra.style.width = user.progresoActual[categoria] + "%";
        barra.setAttribute("aria-valuenow", user.progresoActual[categoria]);
        barra.innerText = user.progresoActual[categoria] + "%";
        user.desafiosCompletados[categoria] = 0;
    }
    guardarDatos();
}

// Función para inicializar barras con datos guardados
function actualizarBarra(id, categoria) {
    let barra = document.getElementById(id);
    barra.style.width = user.progresoActual[categoria] + "%";
    barra.setAttribute("aria-valuenow", user.progresoActual[categoria]);
    barra.innerText = user.progresoActual[categoria] + "%";
}


//cerrar sesion
const btncerrars = document.querySelector('#btn1')

let user = JSON.parse( localStorage.getItem('user'))

function cerrarsesion (){
    user.userlogged = false
    localStorage.setItem("user", JSON.stringify(user))
    window.location.href = "../index.html"
}
btncerrars.addEventListener("click",cerrarsesion)
