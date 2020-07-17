//file je namenjen vsem metodam za posodabljanje koledarja
function posodobiKoledar(mesec, leto) {
    posodobiNaslovKoledarja(mesec, leto);
    const trenutniMesec = new Mesec(mesec, leto);

    //inicializiramo potrebne spremenljive
    let dnevi = ""
    let prviDanVmesecu = trenutniMesec.vrniPrviDanVmesecu();
    let steviloDniVMesecu = trenutniMesec.vrniSteviloDniVMesecu(mesec, leto);
    let zadnjiDanPrejsnegaMeseca = trenutniMesec.vrniSteviloDniPrejsnegaMeseca();
    let stVsehDni = Number(prviDanVmesecu) + Number(1) + Number(steviloDniVMesecu); //stevilo vseh dni prejsnega in trenutnega meseca
    let mankajociDnevi = Number(42) - Number(stVsehDni) + 1; //koliko dni lahko dodamo za naslednji mesec
    let stevecNarisanihDni = 0; // da lahko belezimo kdaj je nedelja
    let praznikVMesecu = aliMesecVsebujePraznik(Number(mesec) + 1);

    //izrisemo dneve prejsnega meseca
    for (let i = prviDanVmesecu; i > 0; i--) {
        stevecNarisanihDni += 1;
        let prejsniDneviMeseca = Number(zadnjiDanPrejsnegaMeseca) - Number(i) + 1;
        if (stevecNarisanihDni % 7 == 0) {
            dnevi += `<div  class="nedeljaDrugegaMeseca">${i}</div>`;
        }
        else {
            dnevi += `<div class="dneviPrejsnegaMeseca">${prejsniDneviMeseca}</div>`;
        }
        dneviMeseca.innerHTML = dnevi;
    }

    //izrisemo dneve trenutnega meseca
    if (praznikVMesecu == -1) {
        for (let i = 1; i <= steviloDniVMesecu; i++) {
            stevecNarisanihDni += 1;
            if (stevecNarisanihDni % 7 == 0) {
                dnevi += `<div  class="nedelja">${i}</div>`;
            }
            else {
                dnevi += `<div>${i}</div>`;
            }
            dneviMeseca.innerHTML = dnevi;
        }
    } else {
        //izrisemo dneve trenutnega meseca
        for (let i = 1; i <= steviloDniVMesecu; i++) {
            stevecNarisanihDni += 1;
            //pregledamo ali je dan praznik ali nedelja 
            if (stevecNarisanihDni % 7 == 0 || i == praznicniDnevi[praznikVMesecu]) {
                dnevi += `<div  class="nedelja">${i}</div>`;
            }
            else {
                dnevi += `<div>${i}</div>`;
            }
            dneviMeseca.innerHTML = dnevi;
        }
    }

    //izrisemo dneve naslednjega meseca
    for (let i = 1; i <= mankajociDnevi; i++) {
        stevecNarisanihDni += 1;
        if (stevecNarisanihDni % 7 == 0) {
            dnevi += `<div  class="nedeljaDrugegaMeseca">${i}</div>`;
        }
        else {
            dnevi += `<div class="dneviNaslednjegaMeseca">${i}</div>`;
        }
        dneviMeseca.innerHTML = dnevi;
    }
}