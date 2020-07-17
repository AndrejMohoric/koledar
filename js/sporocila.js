function izpisiSporociloUporabniku(vrstaSporocila, sporociloUporabniku) {
  let sporocilo = document.getElementById("sporociloAkcije");;
  if (vrstaSporocila == 0) { //prikazi uspesno sporocilo
    pripraviUspesnoSporocilo(sporocilo);
  } else {//prikazi sporocilo o napaki
    pripraviSporociloNapake(sporocilo);
  }
  sporocilo.innerHTML = sporociloUporabniku;
  sporocilo.style.visibility = 'visible';
}

function zapriVsaSporocila() { //pocisti sporocila
  var sporociloUspeha = document.getElementById("sporociloAkcije");
  sporociloUspeha.style.visibility = 'hidden';
  sporociloUspeha.style.height = "0rem";
}

//prilagodi stile elementa sporocila
function pripraviUspesnoSporocilo(element) {
  element.style.backgroundColor = 'lightgreen';
  element.style.border = '2px solid green';
  element.style.visibility = 'visible';
  element.style.color = '#464866';
  element.style.height = "2rem";
}

//prilagodi stile elementa sporocila
function pripraviSporociloNapake(element) {
  element.style.backgroundColor = 'lightcoral';
  element.style.border = '2px solid red';
  element.style.visibility = 'visible';
  element.style.color = '#464866';
  element.style.height = "2rem";
}