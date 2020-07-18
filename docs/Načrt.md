# Načrt sistema

## Povzetek
Ta dokument predstavlja podroben načrt bodočega sistema, katerga zahteve so opisane v `Zahteve.md`. 


### 1 Opis razredov
#### 1) Ime razreda: inicializacija.js
Ta razred poskrbi, da je program ob zagonu pripravljen na delovanje.
Inicializira vse pomembne konstante in poskrbi, da je na začetku v koledarju prikazan trenutni mesec.

#### 2) Ime razreda: koledar.js 
Ta razred poskrbi, da se na koledarju pravilno izrišejo dnevi.
Izriše se tudi par dni prejšenega in naslednjega meseca. Nedelje in prazniki so obarvani z drugo barvo kot preostali dnevi v mesecu.

##### Metode
| Ime metode| Imena  parametrov  | Pomen  |
|--------------|---------------|------------|
| posodobiKoledar()  | mesec, leto  | Izriše dneve na koledar  |
| posodobiNaslovKoledarja(izbraniMesec, datumAliLeto)  | izbraniMesec, datumAliLeto  | Posodobi mesec koledarja in leto meseca, ki ga prikaže. |

#### 3) Ime razreda: mesec [entiteta]
Razred Mesec je entitetni razred, s katerim predstavimo željen mesec glede na vhodne podatke uporabnika .

##### Atributi
| Ime atributa| Domena    | Pomen  |
|--------------|---------------|------------|
| mesec  | [0,11]]  | Predstavlja mesec v tabeli  |
| leto  | [1585,2200]]  | Predstavlja  |

##### Metode

| Ime metode| Imena  parametrov  | Pomen  |
|--------------|---------------|------------|
|vrniSteviloDniVMesecu(mesec, leto)  | mesec, leto | Vrne število dni v mesecu, da vemo koliko jih moramo narisati.  |
|vrniSteviloDniPrejsnegaMeseca()  | /  | Vrne število dni prejšnega meseca, da lahko zračunamo katere dni moramo prikazati.  |
|vrniPrviDanVmesecu()  | / | Metoda nam vrne s katerim dnem se začne mesec, da znamo razporediti dneve. (Nedelja=0, ...,Soboto=6)  |
|aliJePrestopnoLeto(leto) | leto  | Metoda vrne boolean vrednost glede na to ali je vhod prestopno leto.   |
|pripravaFormataZaKreiranjeDatuma() | / | Metoda nam pripravi pravilni format datuma.  |

#### 4) Ime razreda: konstante.js
Razred hrani konstante, ki se pogosto uporabljajo.

##### Konstante
| Ime konstante    | Pomen  |
|--------------|------------|
| meseciImena  | Hrani imena vseh mesecov |
| stDniVMesecu  | Hrani število dnevov v vsakem mesecu, ki so indeksirana enako kot v konstanti meseciImena |
| sporocilaUorabniku  | Hrani sporočila za uspešnost akcij uporabnika  |


#### 5) Ime razreda: metode.js
Razred metode zajema vse metod, ki se uporabljajo v različnih mestih v programu.

##### Metode

| Ime metode| Imena  parametrov  | Pomen  |
|--------------|---------------|------------|
|gumb1_click() | / | Metoda, poskrbi za je akcija ob pritisku gumba (prvega obrazca) izvršena |
|gumb2_click() | / |  Metoda, poskrbi za je akcija ob pritisku gumba (drugega obrazca) izvršena |
|preveriLeto(leto) | leto | Metoda preveri uporabniški vnos leta.  |
|preveriMesec(stevilo) | stevilo | Metoda preveri uporabniški vnos leta.  |
|preveriDan(dnevi, mesec, leto) |dnevi, mesec, leto | Metoda preveri uporabniški vnos dneva.  |
|preveriDatum(dnevi, mesec, leto)  | dnevi, mesec, leto| Metoda preveri uporabniški vnos datuma in če ta datum sploh obstaja.  |
|preberiDatoteko(datoteka) | datoteka | Metoda prebere podano datoteko.  |
|aliMesecVsebujePraznik(mesec) | mesec |  Metoda preveri, če mesec vsebuje praznik. |

#### 6) Ime razreda: sporocila.js
Razred zajema vse metode, ki se uporabljajo za prikazovanje sporočil uporabniku.

##### Metode

| Ime metode| Imena  parametrov  | Pomen  |
|--------------|---------------|------------|
| izpisiSporociloUporabniku(vrstaSporocila, sporociloUporabniku)| vrstaSporocila, sporociloUporabniku |Metoda izpise sporočilo uporabniku glede na izvedeno akcijo. Parameter `vrstaSporocila` nam pove ali se prikaže sporočilo o napaki ali o uspehu, `sporociloUporabniku` pa predstavlja v naprej pripravljeno sporočilo.|
| zapriVsaSporocila()| / | Metoda trenutno odprta sporočila.|
| pripraviUspesnoSporocilo(element) | element | Metoda pripravi css stile za uspešno sporočilo.|
| pripraviSporociloNapake(element)| element |Metoda pripravi css stile za neuspešno sporočilo. |


#### 7) Ime razreda: index.html [pogled]
Razred predstavlja uporabniški grafični umesnik, ki ga sestavljajo trije glavni deli: 
- 1) Naslov programa
- 2) Dva obrazca
- 3) Koledar

#### 8) Ime razreda: skupniStili.css
Predstavlja vse stile za celotno zgradbo uporabniškega grafičnega umesnika. 


#### 9) Ime razreda: sporocilo.css
Predstavlja vse stile , ki so potrebni za oblikovanje sporočil uporabniku. 

#### 10) Ime razreda: koledar.css
Predstavlja vse stile , ki so potrebni za oblikovanje koledarja. 

### 2 Viri
- Uporabljene barve: https://visme.co/blog/website-color-schemes/ 
