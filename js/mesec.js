class Mesec {
  constructor(mesec, leto) {
    this.mesec = mesec;
    this.leto = leto;
  }
  
  vrniSteviloDniVMesecu(mesec, leto) {
    if (mesec == 1 && this.aliJePrestopnoLeto(leto)) { 
      return "29";
    }
    return stDniVMesecu[mesec];
  }

  vrniSteviloDniPrejsnegaMeseca() {
    if (this.mesec == 0) {
      let prejsneLeto = Number(this.leto) - Number(1);
      return this.vrniSteviloDniVMesecu(11, prejsneLeto);
    }
    let noviMesec = Number(this.mesec) - Number(1);
    return this.vrniSteviloDniVMesecu(noviMesec, this.leto);
  }

  vrniPrviDanVmesecu() {
    let datumBeseda = this.pripravaFormataZaKreiranjeDatuma();
    let noviDatum = new Date(datumBeseda);
    let indexDneva = noviDatum.getDay(); //nedelja = 0, ponedeljek=1, ....,sobota=6 
    if (indexDneva == 0) { //nedeljo spremenimo v 7
      indexDneva = 7;
    }
    indexDneva -= 1; //nato zmansamo vse za 1 da dobimo //ponedeljek=0, ....,sobota=5, nedelja=6 
    return indexDneva;
  }

  aliJePrestopnoLeto(leto) {
    return ((leto % 4 == 0) && (leto % 100 != 0)) || (leto % 400 == 0);
  }

  pripravaFormataZaKreiranjeDatuma() {
    let mesecBeseda = Number(this.mesec) + 1;
    if (mesecBeseda <= 9) {
      mesecBeseda = "0" + mesecBeseda;
    }
    let datumBeseda = mesecBeseda + "/01/" + this.leto;
    return datumBeseda;
  }
}

