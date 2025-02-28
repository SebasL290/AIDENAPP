// Función para actualizar las barras de progreso con sliders
function actualizarProgreso(id, valor) {
    let barra = document.getElementById(id);
    barra.style.width = valor + "%";
    barra.setAttribute("aria-valuenow", valor);
    barra.innerText = valor + "%";
}

// Función para cargar las barras progresivamente al entrar a la página
function cargarBarras() {
    setTimeout(() => actualizarProgreso('progress-aprendizaje', 80), 500);
    setTimeout(() => actualizarProgreso('progress-creatividad', 65), 800);
    setTimeout(() => actualizarProgreso('progress-productividad', 50), 1100);
}

// Seleccionar todas las opciones del dropdown para cambiar avatar
document.querySelectorAll('.avatar-option').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        let avatarSrc = this.getAttribute('data-avatar'); // Obtiene la imagen seleccionada
        document.getElementById('avatar-img').src = avatarSrc; // Cambia el avatar
    });
}); 

// Cargar las barras al abrir la página
window.onload = cargarBarras;


//avatar

document.querySelectorAll('.avatar-option').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace recargue la página
        let avatarSrc = this.getAttribute('data-avatar'); // Obtiene la imagen seleccionada
        document.getElementById('avatar-img').src = avatarSrc; // Cambia el avatar
    });
});