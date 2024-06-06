document.addEventListener("DOMContentLoaded", function (e) {
    const form = document.getElementById("loan-form");
    const btnSubmit = document.getElementById("btn_submit");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const montant = parseFloat(
            document.getElementById("montant").value.replace(/\s+/g, "")
        );
        const taux =
            parseFloat(
                document.getElementById("taux").value.replace(/\s+/g, "")
            ) / 100;
        const duree =
            parseInt(
                document.getElementById("duree").value.replace(/\s+/g, "")
            ) * 12;

        const tbody = document.getElementById("table-body");
        tbody.innerHTML = "";

        let solde = montant;
        const mensualite =
            (montant * (taux / 12)) / (1 - Math.pow(1 + taux / 12, -duree));

        for (let mois = 1; mois <= duree; mois++) {
            const interet = solde * (taux / 12);
            const amortissement = mensualite - interet;
            const soldeRestant = solde - amortissement;

            const row = `
                <tr>
                    <td>${mois}</td>
                    <td>${solde
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</td>
                    <td>${mensualite
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</td>
                    <td>${interet
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</td>
                    <td>${amortissement
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</td>
                    <td>${soldeRestant
                        .toFixed(2)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} €</td>
                </tr>
            `;
            tbody.insertAdjacentHTML("beforeend", row);
            solde = soldeRestant;
        }

        document.getElementById("section_tableau").style.display = "block";
    });
});
