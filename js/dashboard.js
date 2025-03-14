// Función para actualizar las barras de progreso con sliders


// Función para cargar las barras progresivamente al entrar a la página


// Seleccionar todas las opciones del dropdown para cambiar avatar
document.querySelectorAll('.avatar-option').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        let avatarSrc = this.getAttribute('data-avatar'); // Obtiene la imagen seleccionada
        document.getElementById('avatar-img').src = avatarSrc; // Cambia el avatar
    });
}); 

// Cargar las barras al abrir la página



//avatar

document.querySelectorAll('.avatar-option').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        let avatarSrc = this.getAttribute('data-avatar'); // Obtiene la imagen seleccionada
        document.getElementById('avatar-img').src = avatarSrc; // Cambia el avatar
    });
});

//cerrar sesion
const btncerrars = document.querySelector('.btn1')

let user = JSON.parse( localStorage.getItem('user'))

function cerrarsesion (){
    user.userlogged = false
    localStorage.setItem("user", JSON.stringify(user))
    window.location.href = "../index.html"
}
btncerrars.addEventListener("click",cerrarsesion)
