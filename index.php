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
                        <input id="montant" type="text" placeholder="100 000" required>
                    </div>
                    <div class="input pourcentage">
                        <label for="">Taux nominal</label>
                        <input id="taux" type="text" placeholder="1.2" step="0.01" required>
                    </div>
                    <div class="input ans">
                        <label for="">Durée de remboursement</label>
                        <input id="duree" type="text" placeholder="15" required>
                    </div>
                    <div id="error"></div>
                </div>
                <input class="btn" id="btn_submit" type="submit" value="Calculer">
            </form>
        </div>
    </section>
    <section id="section_tableau">
        <div class="wrapper">
            <div class="content">
                <div id="close_tab">+</div>
                <h2>Tableau d'amortissement</h2>
                <div class="scrollx">
                    <table id="mytable">
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

                        </tbody>
                    </table>
                </div>
                <input class="btn" id="pdfbutton" type="button" value="Download PDF">
            </div>
        </div>
    </section>

    <section class="hidepdf">
        <div id="pdfcontent">
            <img class="imagepdf" src="img/logo.svg" alt="">
            <h2>Tableau d'amortissement</h2>
            <p id="recap_montant"></p>
            <p id="recap_taux"></p>
            <p id="recap_duree"></p>
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
                <tbody id="pdf-table-body">
                </tbody>
            </table>
        </div>
    </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/pdfmanager.js"></script>
</body>

</html>