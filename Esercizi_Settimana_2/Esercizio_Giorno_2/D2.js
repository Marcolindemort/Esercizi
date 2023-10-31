/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 // due variabili da confrontare (if else if else) console
*/
{var num1 = 6;
var num2 = 10;

if (num1 > num2) {
  console.log ("num1 è maggiore di num2");
} else {
  console.log ("num1 è minore di num2");
}}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  // una variabile not equal -> !==
*/

{var num1 = 1

if (num1 == 5) {
  console.log ("equal");
} else {
  console.log ("not equal");
}}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
// divisbile -> resto % 
  */

{var num1 = 10;

if (num1%5 == 0) {
  console.log ("divisibile per 5");
} else {
  console.log ("non è divisibile per 5");
}}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
// if (serie di condizioni if -> la verifica === )
  */
{var num1 = 10;
var num2 = 2;

/*if (num1 === 8) {
  console.log ("num1 è uguale a 8");
} else if (num2 === 8) {
  console.log ("num2 è uguale a 8");
} else if (num1 + num2 === 8) {
  console.log ("la somma di num1 e num2 è uguale a 8");
} else if (num1 - num2 === 8) {
  console.log ("num2 sottratto a num1 è uguale a 8");
} else {
  console.log ("num1 e num2 e relative operazioni non sono uguali a 8");
}*/

if ((num1 === 8) || (num2 === 8) || (num1 + num2) || (num1 - num2) || (num2 - num1)) {
    console.log ("uguale a 8")
}}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  // dichiaro 3 variabili: totale, costo, pagamento=totale  -> if -> se un valore è inferiore una soglia aggiungo le spese
*/

{var totale = 60;
var spedizione = 10;
var checkout = totale;

if (totale < 50) {
  checkout += spedizione
} 

console.log ("totale da pagare " + checkout)}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
// simile a quello sopra (sconto * 0.8)
  */

{var totale2 = 60;
var totale2 = totale2 * 0.8
var spedizione2 = 10;
var checkout2 = totale2;

if (totale2 < 50) {
  checkout2 += spedizione2
} 

console.log ("totale da pagare " + checkout2)}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  // annido una serie di if -> controllo tutte le varie condizioni e con la console stampo la condizione (quando true)
*/

{var num1 = 4;
var num2 = 20;
var num3 = 38;

if (num1 >= num3) {
  if (num2 >= num1) {
    console.log (num2, num1, num3)
  } else {
    if (num2 >= num3) {
      console.log (num1, num2, num3)
    } else {
      console.log (num1, num3, num2)
    }
  }
} else {
  if (num2 >= num3) {
    console.log (num2, num3, num1)
  } else {
    if (num2 >= num1) {
      console.log (num3, num2, num1)
    } else {
      console.log (num3, num1, num2)
    }
  }
}}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  // typeof -> if else
  */

{var num = 42

if (typeof num === "number") {
  console.log ("è un numero")
}}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // modulo di 2 (%2) -> if else
  */

{var num = 10;

if (num%2 == 0) {
  console.log ("è un numero pari")
} else {
  console.log ("è un numero dispari")
}}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

{let val = 7
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
// ricordatevi che siamo dentro a un oggetto -> aggiungo qualcosa (una proprietà) all'oggetto
  */

{const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";

console.log (me)


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  // posso cancellare da un oggetto
*/

delete me.lastName

console.log (me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  // metodi array -> rimuovere l'ultimo elemento
  */

me.skills.pop()

console.log (me)}

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  // metodi array -> inserire qualcosa nell'array
*/

{var numeri = []

numeri.push(1);
numeri.push(2);
numeri.push(3);
numeri.push(4);
numeri.push(5);
numeri.push(6);
numeri.push(7);
numeri.push(8);
numeri.push(9);
numeri.push(10);

console.log (numeri)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  // selezionare il nono elemento e assegnare un nuovo valore
*/

numeri [9] = 100;

console.log (numeri)}