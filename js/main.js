document.addEventListener("DOMContentLoaded", function () {
    FormManager();
    pdfManager();
});

function FormManager() {
    const btnSubmit = document.querySelector("#btn_submit");
    const btnClose = document.querySelector("#close_tab");

    ToggleTab(btnSubmit, btnClose);

    btnSubmit.addEventListener("click", function (e) {
        e.preventDefault();

        const tbody = document.querySelector("#table-body");
        tbody.innerHTML = "";

        const montant = document.querySelector("#montant").value;
        const taux = document.querySelector("#taux").value;
        const duree = document.querySelector("#duree").value;

        const errorMSG = GestionErreur(tbody, montant, taux, duree);

        console.log("avant");
        console.log(errorMSG);
        console.log("apres");

        if (errorMSG === "") {
            Calcul(tbody, montant, taux, duree);
        }

        const errorMSGcolor = `<p id="errormsg">${errorMSG}</p>`;

        const errorElement = document.querySelector("#error");
        errorElement.innerHTML = "";
        errorElement.insertAdjacentHTML("beforeend", errorMSGcolor);
    });

    function GestionErreur(tbody, montantValue, tauxValue, dureeValue) {
        let errorMSG = "";
        let tabError = {
            montant: "",
            taux: "",
            duree: "",
        };
        let hasError = false;

        const montant = document.querySelector("#montant");
        const taux = document.querySelector("#taux");
        const duree = document.querySelector("#duree");

        montant.classList.remove("error");
        taux.classList.remove("error");
        duree.classList.remove("error");

        function isNotEmpty(value) {
            return value != "";
        }

        function isNumber(value) {
            return !isNaN(value) && isFinite(value);
        }

        function hasMaxOneDecimal(value) {
            const pattern = /^\d+(\.\d{1})?$/;
            return pattern.test(value.toString());
        }

        function isInt(value) {
            const pattern = /^\d+(\.\d{0})?$/;
            return pattern.test(value.toString());
        }

        function isMontantOK() {
            return isNotEmpty(montantValue) && isNumber(montantValue);
        }

        function isTauxOK() {
            return (
                isNotEmpty(tauxValue) &&
                isNumber(tauxValue) &&
                hasMaxOneDecimal(tauxValue)
            );
        }

        function isDureeOK() {
            return isNotEmpty(dureeValue) && isNumber(dureeValue);
        }

        if (!isMontantOK()) {
            hasError = true;
            tabError["montant"] = "montant";
            console.log("erreur montant");
        }
        if (!isTauxOK()) {
            hasError = true;
            tabError["taux"] = "taux";
            console.log("erreur taux");
        }
        if (!isDureeOK()) {
            hasError = true;
            tabError["duree"] = "duree";
            console.log("erreur duree");
        }

        if (hasError) {
            errorMSG = `Veuillez bien saisir les sections: ${Object.values(
                tabError
            )
                .filter((v) => v !== "")
                .join(", ")}`;
        }

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
            (montant *
                (tauxInteretMensuel * (1 + tauxInteretMensuel) ** duree)) /
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
}

function pdfManager() {}
