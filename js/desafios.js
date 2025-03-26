
/* const respuestasCorrectas = {
    q1: "Photoshop",
    q2: "Un dispositivo para dibujar digitalmente",
    q3: "PNG",
    q4: "Rojo, Verde, Azul",
    q5: "Diseño vectorial",
    q6: "Pincel",
    q7: "El número de píxeles por pulgada",
    q8: "Vectoriales",
    q9: "Combinar capas de diferentes formas",
    q10: "Una representación visual de un diseño"
}; */
/* function checkAnswers() {
    let correctas = 0;
    let incorrectas = 0;

    
    for (let i = 1; i <= 10; i++) {
        let pregunta = "q" + i;
        let seleccionada = document.querySelector(`input[name="${pregunta}"]:checked`);
        let resultadoSpan = document.getElementById(`resultado-${pregunta}`);

        if (seleccionada) {
            if (seleccionada.value === respuestasCorrectas[pregunta]) {
                correctas++;
                resultadoSpan.innerHTML = " ✅";
            } else {
                incorrectas++;
                resultadoSpan.innerHTML = " ❌";
            }
        } else {
            incorrectas++; 
            resultadoSpan.innerHTML = " ⁉️";
        }
    }

 
    let user = JSON.parse(localStorage.setItemItem("user"));

    if (correctas >= 8) {
        alert("🎉 ¡Ganaste! Has respondido correctamente " + correctas + " preguntas.");
        user.desafios += 1;
        localStorage.setItem("user", JSON.stringify(user));
    } else if (incorrectas >= 7) {
        alert("❌ Has perdido. Demasiados errores. ¡Inténtalo de nuevo!");
    }
    actualizarProgreso();
}

function actualizarProgreso(id, progreso) {
    let barra = document.getElementById(id);
    if (barra) {
        barra.style.width = progreso + "%";
        barra.setAttribute("aria-valuenow", progreso);
        barra.innerText = progreso + "%";
    } else {
        console.error("❌ Error: No se encontró el elemento #" + id);
    }
} */


let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const Formulario = document.querySelector("#quiz-form")

function capturarRespuestas(){
        
        const respuesta1 = document.querySelector('input[name="q1"]:checked')?.value;
        const respuesta2 = document.querySelector('input[name="q2"]:checked')?.value;
        const respuesta3 = document.querySelector('input[name="q3"]:checked')?.value;
        const respuesta4 = document.querySelector('input[name="q4"]:checked')?.value;
        const respuesta5 = document.querySelector('input[name="q5"]:checked')?.value;
        const respuesta6 = document.querySelector('input[name="q6"]:checked')?.value;
        const respuesta7 = document.querySelector('input[name="q7"]:checked')?.value;
        const respuesta8 = document.querySelector('input[name="q8"]:checked')?.value;
        const respuesta9 = document.querySelector('input[name="q9"]:checked')?.value;
        const respuesta10 = document.querySelector('input[name="q10"]:checked')?.value;
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
    p1:"Illustrator",
    p2:"Un dispositivo para dibujar digitalmente",
    p3:"PNG",
    p4:" Rojo, Verde, Azul",
    p5:"Diseño vectorial",
    p6: "Pincel",
    p7: "El número de píxeles por pulgada",
    p8: "Vectoriales",
    p9: "Combinar capas de diferentes formas",
    p10: "Una representación visual de un diseño",
}
let acumulado = 0;

const arrayRespuestasUser = Object.values(respuestasUser)
const arrayRespuestasCorrectas = Object.values(respuestasCorrectas)

//recorrer el array de respuestasUser y el de array respuestasCorrectas y las compara
for (let i = 0; i < arrayRespuestasUser.length; i++) {
    if(arrayRespuestasUser[i] == arrayRespuestasCorrectas[i]){
        acumulado++
    }
    
}

//verifico cuanto lleva el usuario de progreso previo

//condicional de si gane o perdí el examen
for (let i = 0; i < usuarios.length; i++) {
    if(acumulado >= 3){
       alert("ganaste el examen 😁");
    usuarios[i].progreso += 25
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    }else{
        alert("Debes repetir el examen 😒")
    }
    }console.log("tu acumulado es:", acumulado)


/* for (const key in respuestasCorrectas) {
    console.log(respuestasCorrectas[key])
    
} */

}
Formulario.addEventListener("submit", ValidarRespuestas)
