# Dokument zahtev

| | |
|:---|:---|
| **Naziv projekta** | Koledar |
| **Avtor** |Andrej Mohorič |
| **Kraj in datum** | Ljubljana 17. 7. 2020 |
| | |

## 1. Povzetek projekta
Projekt zajema enostaven koledarček v katerem se prikazujejo dnevi določenega meseca in leta. 

## 2. Uporabniške vloga
Uporabnik ima na voljo dve možnosti: 

- **Prvi obrazec** vsebuje polje, kjer uporabnik lahko izbere mesec (s combo box-om; seznam izbir) in polje kjer uporabnik vpiše leto. 

- **Drugi obrazec** vsebuje polje, kjer uporabnik vpiše željen datum.

Ko uporabnik izpolji enega izmed obrazcev pritisne gumb `Potrdi` in prikaže se mu željen mesec na koledarju.

## 3. Slovar pojmov
| Pojem| Razlaga pojma |
|:---|:---|
| Prvi obrazec | Obrazec na levi strani |
| Drugi obrazec |Obrazec na desni strani |
| Naslov koledarja | Mesec in leto, ki ga koledar trenutno prikazuje |
| | |

## 4. Funkcionalne zahteve
### 1) Ustrezen prikaz meseca na koledarju z podatkom meseca in leta
#### Povzetek funkcionalnosti
Uporabnik izpolni `prvi obrazec` in prikaže se mu ustrezen mesec na koledarju.

#### Osnovni tok
1. Uporabniku je prikazan sistem.
2. Uporabnik izpolni `prvi obrazec`.
3. Uporabnik klikne na gumb za potrditev vnosov.
4. Prikaže se mu ustrezno sporočilo o uspehu ali napaki.
5. Prikaže se mu ustrezen mesec na koledarju.

##### Izjemni tok 
1. Uporabniku je prikazan sistem.
2. Uporabnik ne izpolni `prvi obrazec`.
3. Uporabnik klikne na gumb za potrditev vnosov.
4. Prikaže se mu ustrezno sporočilo o napaki.

#### Pogoji
Vpisano leto mora biti biti v itervalu od [1585-2020]. (1584 pride v Slovenijo GREGORJANSKI KOLEDAR)

#### Posledice
Uporabniku se prikaže ustrezno sporočilo in mesec na koledarju.

#### Posebnosti
Upoštevati je potrebno, katere znake je potrebno vnesti v posamezno polje. Npr. polje za vpis leta sprejema samo številke.


### 2) Ustrezen prikaz meseca na koledarju z podatkom vpisanega datuma
#### Povzetek funkcionalnosti
Uporabnik izpolni `drugi obrazec` in prikaže se mu ustrezen mesec na koledarju.

#### Osnovni tok
1. Uporabniku je prikazan sistem.
2. Uporabnik izpolni `drugi obrazec`.
3. Uporabnik klikne na gumb za potrditev vnosov.
4. Prikaže se mu ustrezno sporočilo o uspehu ali napaki.
5. Prikaže se mu ustrezen mesec na koledarju.

##### Izjemni tok 
1. Uporabniku je prikazan sistem.
2. Uporabnik NE izpolni `drugi obrazec`.
3. Uporabnik klikne na gumb za potrditev vnosov.
4. Prikaže se mu ustrezno sporočilo o napaki.

#### Pogoji
- Datum ima obliko `d.m.llll` (npr: 1.1.2020)
- `llll` : Vpisano leto mora biti biti v itervalu od [1585,2020]. (1584 pride v Slovenijo GREGORJANSKI KOLEDAR)
- `m` : Mesec mora biti v intervalu [1,12].
- `d` : Dan predstavlja številka med 1 in kolikor dni ima tisti mesec.

#### Posledice
Uporabniku se prikaže ustrezno sporočilo in mesec na koledarju.

#### Posebnosti
Upoštevati je potrebno, sintakso vpisanega datuma. Npr.:
- 1.1.2020 je ok
- 01.01.2020 ni ok




### 3) Prestopna leta
Na koledarju so prikazana tudi prestopna leta.

#### Osnovni tok
1. Uporabniku je prikazan sistem.
2. Uporabnik izpolni `prvi obrazec` ali `drugi obrazec` z prestopnim letom in mesecem februarjem.
3. Uporabnik klikne na gumb za potrditev vnosov.
4. Prikaže se mu ustrezno sporočilo o uspehu.
5. Prikaže se mu mesec februar z 29 dni na koledarju.


#### Pogoji
1) leto je prestopno, če je deljivo s 4
2) ...v primeru, da ni hkrati deljivo s 100, razen...
3) ...v primeru, da je leto deljivo s 400, je leto prestopno

#### Posledice
Uporabniku se prikaže 29 februar



### 4) Prikaz praznikov
Na koledarju so prikazani tudi prazniki. (Ne vsi!)

#### Osnovni tok
1. Uporabniku je prikazan sistem.
2. Uporabnik izpolni `prvi obrazec`.
3. Uporabnik klikne na gumb za potrditev vnosov.
4. Prikaže se mu ustrezno sporočilo o uspehu.
5. Prikaže se mu mesec na koledarju, na katerem so prazniki drugače označeni.

#### Pogoji
Praznik mora, biti zapisan v datoteki `prazniki.txt` in imeti ob sebi znak za ponavljanje `*` v nasprotnem primeru praznik ne bo prikazan.

#### Posledice
Na koledarju so praznični dnevi označeni drugače.

#### Posebnosti
V datoteki `prazniki.txt` so nasledji prazniki: 
- 1.1.2020 (ponavljajoč) `novo leto`,
- 8.2.2020 (ponavljajoč) ` Prešernov dan, slovenski kulturni praznik`,
- 27.4.2020 (ponavljajoč) `dan upora proti okupatorju`,
- 1.11.2020 (ponavljajoč) `dan spomina na mrtve`,
- 25.12.2020 (ponavljajoč) `božič`,
- 12.4.2020 (Velika noč ni vsako leto na isti dan) `velikonočna nedelja`

Pri tem za praznik `velikonočna nedelja` ne potrebujemo dodatne implementacije, saj je praznik vsako leto na nedeljo, nedelje pa so označene z enako barvo kot prazniki.  

### 5) Drugačen prikaz nedelj
Na koledarju so nedelje prikazane drugače kot ostali dnevi.

#### Osnovni tok
1. Uporabniku je prikazan sistem.
2. Uporabnik izpolni `prvi obrazec`.
3. Uporabnik klikne na gumb za potrditev vnosov.
4. Prikaže se mu ustrezno sporočilo o uspehu.
5. Prikaže se mu mesec na koledarju, na katerem so nedelje drugače označene.

### 6) Inicializacija
Ob pričetku uporabe programa se prikaže trenutni mesec na koledarju.










