// file na zacetku pripravi program, da pravilno deluje

//pridobi današni dan in prikaži koledar
var danes = new Date();
var trenutniMesec = danes.getMonth();
var trenutnoLeto = danes.getFullYear();
posodobiKoledar(trenutniMesec, trenutnoLeto);

//pocisti sporocila
zapriVsaSporocila();

//preberi in shrani odatke datoteke
preberiDatoteko("prazniki.txt");


