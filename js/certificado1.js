//Descargar certificado
/* 1.Capturar boton de certificado */
document.getElementById("descargarPDF").addEventListener("click" , () => {
    const certificado = document.querySelector(".certificate") 

    const options ={
        margin: 20,
        filename: "ejemplo.pdf",
        image: {type: "pdf", quality: 0.98},
        html2canvas: { scale: 2 },
        jsPDF: {
            unit:"px",
            format: [1000,900],
            orientation: "landscape"
        }
    }

    html2pdf().set(options).from(certificado).toPdf().get("pdf").then(
        function (pdf){
            const newWindow = window.open(pdf.output("bloburl", "_blank"))
        }
    );
})

