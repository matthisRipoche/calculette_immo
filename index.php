<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">

    <title>Calculette immo</title>
</head>

<body>
    <header>
        <img src="img/logo.svg" alt="">
    </header>
    <section id="section_form">
        <div class="wrapper">

            <form class="content">
                <h2>Calculatrice prêt immobilier</h2>

                <div class="inputs">
                    <div class="input euro">
                        <label for="">Montant emprunté</label>
                        <input id="montant" type="number" placeholder="100 000" required>
                    </div>
                    <div class="input pourcentage">
                        <label for="">Taux nominal</label>
                        <input id="taux" type="number" placeholder="1.2" step="0.01" required>
                    </div>
                    <div class="input ans">
                        <label for="">Durée de remboursement</label>
                        <input id="duree" type="number" placeholder="15" required>
                    </div>
                </div>

                <input id="btn_submit" type="submit" value="Calculer">
            </form>
        </div>
    </section>
    <section id="section_tableau">
        <div class="wrapper">
            <div class="content">
                <h2>Tableau d'amortissement</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Mois</th>
                            <th>Solde initial</th>
                            <th>Echeance</th>
                            <th>Interets</th>
                            <th>Amortissement</th>
                            <th>Solde restant</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr>
                            <td>1</td>
                            <td>100 000€</td>
                            <td>607,33€</td>
                            <td>100€</td>
                            <td>507,33€</td>
                            <td>99 492,62€</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <script src="main.js"></script>
</body>

</html>