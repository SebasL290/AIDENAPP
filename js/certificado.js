
//nombre del usuario
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const nombre = document.querySelector("#user-name")
const nombre2 = document.querySelector("#user-name2")

function nombre1() {
    for (let i = 0; i < usuarios.length; i++) {
      if(usuarios[i].userlogged){
        nombre.textContent = `¡Felicidades ${usuarios[i].userNombre}!`;
        nombre2.textContent = `Este certificado acredita que ${usuarios[i].userNombre} ha concluido satisfactoriamente el curso:`;
      }
      
    }
  }

  nombre1() 


document.getElementById("descargar").addEventListener("click", () => {
  const certificado = document.querySelector(".certificate");

  const option = {
    margin: 10,
    filename: "certificado.pdf",
    image:  {type: "pdf", quality: 0.98},
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "px",
      format: [555, 750],
      orientation: "landscape"
    }
  };

  html2pdf().set(option).from(certificado).toPdf().get("pdf").then(
        function (pdf){
            const newWindow = window.open(pdf.output("bloburl", "_blank"))
        }
    );
});



