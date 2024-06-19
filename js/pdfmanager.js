const pdfButton = document.querySelector("#pdfbutton");

pdfButton.addEventListener("click", function (e) {
    e.preventDefault();
    MakePDF();
});

function MakePDF() {
    const element = document.querySelector("#pdfcontent");

    // Options pour la génération du PDF
    const options = {
        margin: [0.1, 1.3],
        filename: "calcul_immo.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    };

    // Générer et télécharger le PDF
    html2pdf().from(element).set(options).save();
}
