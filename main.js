document.addEventListener("DOMContentLoaded", function () {
    const btnSubmit = document.querySelector("#btn_submit");
    const btnClose = document.querySelector("#close_tab");

    ToggleTab(btnSubmit, btnClose);

    btnSubmit.addEventListener("click", function (e) {
        e.preventDefault();

        const tbody = document.querySelector("#table-body");
        tbody.innerHTML = "";

        const montant = parseFloat(
            document.querySelector("#montant").value.replace(/\s/g, "")
        );
        console.log(montant);
        const taux = parseFloat(document.querySelector("#taux").value);
        const duree = parseInt(document.querySelector("#duree").value) * 12;

        const errorMSG = GestionErreur(tbody, montant, taux, duree);

        const errorElement = document.querySelector("#error");
        errorElement.innerHTML = "";
        errorElement.insertAdjacentHTML("beforeend", errorMSG);

        if (GestionErreur(tbody, montant, taux, duree) === "") {
            Calcul(tbody, montant, taux, duree);
        }
    });
});

function GestionErreur(tbody, montantValue, tauxValue, dureeValue) {
    let errorMSG = "";
    let tabError = {
        montant: "",
        taux: "",
        duree: "",
    };

    const montant = document.querySelector("#montant");
    const taux = document.querySelector("#taux");
    const duree = document.querySelector("#duree");
    montant.classList.remove("error");
    taux.classList.remove("error");
    duree.classList.remove("error");

    let hasError = false;
    if (montantValue === "" || isNaN(montantValue)) {
        tabError["montant"] = "du montant";
        hasError = true;
        montant.classList.add("error");
    }
    if (tauxValue === "" || isNaN(tauxValue)) {
        tabError["taux"] = "du taux";
        hasError = true;
        taux.classList.add("error");
    }
    if (dureeValue === "" || isNaN(dureeValue)) {
        tabError["duree"] = "de la durée";
        hasError = true;
        duree.classList.add("error");
    }

    if (hasError) {
        errorMSG = `Veuillez bien saisir les sections: ${Object.values(tabError)
            .filter((v) => v !== "")
            .join(", ")}`;
    }

    errorMSG = `<p id="errormsg">${errorMSG}</p>`;

    return errorMSG;
}

function ToggleTab(btnSubmit, btnClose) {
    const sectionTab = document.querySelector("#section_tableau");
    btnSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        sectionTab.classList.add("active");
    });
    btnClose.addEventListener("click", function (e) {
        e.preventDefault();
        sectionTab.classList.remove("active");
    });
}

function Calcul(tbody, montant, taux, duree) {
    let soldeInit = montant;
    const tauxInteretMensuel = taux / 12 / 100;
    const echeance =
        (montant * (tauxInteretMensuel * (1 + tauxInteretMensuel) ** duree)) /
        ((1 + tauxInteretMensuel) ** duree - 1);

    for (let i = 0; i < duree; i++) {
        const mois = i + 1;
        const interet = soldeInit * tauxInteretMensuel;
        const amortissement = echeance - interet;
        const soldeRest = soldeInit - amortissement;

        GetRow(
            tbody,
            mois,
            soldeInit.toFixed(2),
            echeance.toFixed(2),
            interet.toFixed(2),
            amortissement.toFixed(2),
            soldeRest.toFixed(2)
        );

        soldeInit = soldeRest;
    }
}

function GetRow(
    tbody,
    mois,
    soldeInit,
    echeance,
    interet,
    amortissement,
    soldeRest
) {
    const row = `                
    <tr>
        <td>${mois}</td>
        <td>${soldeInit} €</td>
        <td>${echeance} €</td>
        <td>${interet} €</td>
        <td>${amortissement} €</td>
        <td>${soldeRest} €</td>
    </tr>
    `;

    tbody.insertAdjacentHTML("beforeend", row);
}
