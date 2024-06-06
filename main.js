const btnSubmit = document.querySelector("#btn_submit");

btnSubmit.addEventListener("click", function (e) {
    const montant = document.querySelector("#montant").value;
    const taux = document.querySelector("#taux").value;
    const duree = document.querySelector("#duree").value;

    console.log(montant);
    console.log(taux);
    console.log(duree);
});
