const container = document.querySelector('.desafios-container');


desafios.forEach(desafio => {
    const card = document.createElement('div');
    card.classList.add(desafio.id);  
    card.innerHTML = `
        <h1>${desafio.titulo}</h1>
        <h2>${desafio.descripcion}</h2>
        <button>
            <a href="${desafio.enlace}">Comenzar</a>
        </button>
    `;
    
   
    container.appendChild(card);
});











