// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Funzione per generare numeri casuali







const numberDisplay = document.getElementById("numbers_line");


// Genera 5 numeri casuali
const numeriCasuali = [];
for (let i = 0; i < 5; i++) {
  numeriCasuali.push(Math.floor(Math.random() * 10));
}

// Visualizza i numeri casuali

numberDisplay.append("numeri casuali: ", numeriCasuali);
console.log("Numeri casuali:", numeriCasuali);

// Timer di 10 secondi
setTimeout(() => {
  // Pulisci la console
  numberDisplay.textContent=("")

  // Richiedi all'utente di inserire i numeri
  const numeriInseriti = [];
  for (let i = 0; i < 5; i++) {
    numeriInseriti.push(parseInt(prompt("Inserisci un numero:")));
  }

  // Verifica i numeri inseriti
  const numeriIndovinati = numeriCasuali.filter((numero) =>
    numeriInseriti.includes(numero)
  );

  // Visualizza i risultati
  console.log("Numeri inseriti:", numeriInseriti);
  console.log("Numeri indovinati:", numeriIndovinati);
}, 10000);