const questions = [
    { question: "¿Cuál es la capital de Francia?", options: ["Madrid", "París", "Berlín", "Lisboa"], correct: "París" },
    { question: "¿Cuánto es 2 + 2?", options: ["3", "4", "5", "6"], correct: "4" },
    { question: "¿Cuál es el océano más grande?", options: ["Atlántico", "Pacífico", "Índico", "Ártico"], correct: "Pacífico" },
    { question: "¿Quién pintó la Mona Lisa?", options: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"], correct: "Da Vinci" },
    { question: "¿Cuál es el planeta más grande del sistema solar?", options: ["Marte", "Júpiter", "Saturno", "Tierra"], correct: "Júpiter" },
    { question: "¿En qué año llegó el hombre a la luna?", options: ["1969", "1975", "1980", "1955"], correct: "1969" },
    { question: "¿Cuál es el metal más abundante en la corteza terrestre?", options: ["Oro", "Plata", "Aluminio", "Hierro"], correct: "Aluminio" },
    { question: "¿Quién escribió Don Quijote de la Mancha?", options: ["Cervantes", "Lope de Vega", "Góngora", "Quevedo"], correct: "Cervantes" },
    { question: "¿Cuál es el país con más habitantes?", options: ["EE.UU.", "China", "India", "Rusia"], correct: "China" },
    { question: "¿Cuál es la molécula del agua?", options: ["CO2", "O2", "H2O", "CH4"], correct: "H2O" }
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("quiz-form").addEventListener("submit", function (event) {
          event.preventDefault();
          checkAnswers();
      });
  });
  
  function checkAnswers() {
      let score = 0;
      let feedback = "<h3>Resultados:</h3>";
      
      questions.forEach((q, index) => {
          let selected = document.querySelector(`input[name='q${index + 1}']:checked`);
          if (selected) {
              if (selected.value === q.correct) {
                  score++;
                  feedback += `<p>${q.question}: <span style='color:green;'>Correcto ✅ (${selected.value})</span></p>`;
              } else {
                  feedback += `<p>${q.question}: <span style='color:red;'>Incorrecto ❌ (${selected.value})</span> - Respuesta correcta: <strong>${q.correct}</strong></p>`;
              }
          } else {
              feedback += `<p>${q.question}: <span style='color:orange;'>No respondido ⚠️</span> - Respuesta correcta: <strong>${q.correct}</strong></p>`;
          }
      });
      
      document.getElementById("result").innerHTML = `Obtuviste ${score} de ${questions.length} respuestas correctas.<br>${feedback}`;
  }
  