//file je namenjen razlicnim metodam, ki ne spadajo v noben drug sklop

function gumb1_click() { //klik na gumb prvega obrazca
    //pridobimo vrednosti uporabniskih vnosov
    let izbraniMesec = document.getElementById("izbraniMesec").value;
    let izbranoLeto = document.getElementById("vpisanoLeto").value;

    //preverimo vnos in izpisemo sporocilo
    zapriVsaSporocila(); //izbrisi vsa sporocila
    let tipSporocila = preveriLeto(izbranoLeto);
    let novoSporocilo = sporocilaUporabniku[tipSporocila];
    izpisiSporociloUporabniku(tipSporocila, novoSporocilo);

    //posodobimo koledar
    if (tipSporocila == 0) {
        posodobiKoledar(izbraniMesec, izbranoLeto);
    }
}

function gumb2_click() { //klik na gumb prvega obrazca
  
    //pridobimo vrednosti uporabniskih vnosov
    let vpisaniDatum = document.getElementById("vpisaniDatum").value;
    var tabela = vpisaniDatum.split(".");
    let izbraniDan = tabela[0];
    let izbraniMesec = tabela[1];
    let izbranoLeto = tabela[2];


    //preverimo vnos in izpisemo sporocilo
    zapriVsaSporocila(); //izbrisi vsa sporocila
    if (preveriDatum(izbraniDan, izbraniMesec, izbranoLeto)) {
        izpisiSporociloUporabniku(0, sporocilaUporabniku[0]);
        posodobiKoledar(izbraniMesec - 1, izbranoLeto);
    } else {
        izpisiSporociloUporabniku(1, sporocilaUporabniku[3]);
    }
}

//posodobimo naslov koledarja in leto na koledarju
function posodobiNaslovKoledarja(izbraniMesec, datumAliLeto) {
    document.getElementById("prikazMeseca").innerHTML = meseciImena[izbraniMesec];
    document.getElementById("prikazDatuma").innerHTML = datumAliLeto;
}

//funkcija preveri če je leto v zahtevanem intervalu
//funkcija vrne 0-ce leto ni celo stevilo, 1-ce loto ni v zahtevanem intervalu, 2-pravilni vpis  
function preveriLeto(leto) {
    var regexCeloStevilo = /^[-+]?[1-9]\d*$/;
    if (regexCeloStevilo.test(leto)) { //leto je celo stevilo
        if (leto >= 1585 && leto <= 2200) {
            return 0;
        } else {
            return 2;
        }
    }
    return 1;
}

//funkcija preveri veljavnost meseca in vrne boolean
function preveriMesec(stevilo) {
    var regexCeloStevilo = /^[1-9]\d*$/;
    //mesec je pravilne oblike
    if (regexCeloStevilo.test(stevilo) && stevilo >= 1 && stevilo <= 12) {
        return true;
    }
    return false;
}

//funkcija preveri veljavnost dneva in vrne boolean
function preveriDan(dnevi, mesec, leto) {
    var regexCeloStevilo = /^[1-9]\d*$/;
    const izkaniMesec = new Mesec(mesec, leto);
    let stDni = izkaniMesec.vrniSteviloDniVMesecu(mesec, leto);
    if (regexCeloStevilo.test(dnevi) && dnevi >= 1 && dnevi <= stDni) {
        return true;
    }
    return false;
}

//preveri veljavnost datuma
function preveriDatum(dnevi, mesec, leto) {
    //preveri mesec, leto, 
    //preveri st dni v mesecu
    if (preveriMesec(mesec) && preveriLeto(leto) == 0 && preveriDan(dnevi, mesec - 1, leto)) {
        return true;
    }
    return false;
}

//funkcija prebere datoteko 
function preberiDatoteko(datoteka) {
    var prebranaDatoteka = new XMLHttpRequest();
    prebranaDatoteka.open("GET", datoteka, false);
    prebranaDatoteka.onreadystatechange = function () {
        if (prebranaDatoteka.readyState === 4) {
            if (prebranaDatoteka.status === 200 || prebranaDatoteka.status == 0) {
                var besedilo = prebranaDatoteka.responseText;
                var datumi = besedilo.split(",");
                for (let i = 0; i < datumi.length; i++) {
                    let noviDatum = datumi[i].split(" ");
                    if (noviDatum.length == 2) {
                        noviDatum = noviDatum[0].split(".");
                        praznicniDnevi.push(noviDatum[0]);
                        praznicniMeseci.push(noviDatum[1]);
                    }
                }
            }
        }
    }
    prebranaDatoteka.send(null);
}

//funkcija preveri veljavnost meseca in vrne boolean
function aliMesecVsebujePraznik(mesec) {
    for (let i = 0; i < praznicniMeseci.length; i++) {
        if (praznicniMeseci[i] == mesec) {
            return i;
        }
    }
    return -1;
}