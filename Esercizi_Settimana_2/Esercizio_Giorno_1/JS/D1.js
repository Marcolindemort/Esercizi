/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*in javascript esistono 5 tipi di dati chiamati "primitivi" e un dato definito "complesso" legato agli oggetti.
  i tipi di dati primitivi si suddividono in: numerico, booleano, stringa, null e undefined
  -il tipo stringa è una sequenza di caratteri che viene delimitata dagli apici singoli o doppi
  -il tipo numerico viene usato per l'inserimento di qualunque dato di tipo numerico sia esso intero, decimale o negativo, non viene delimitato dagli apici
  -il tipo booleano permette di dare solo due valori: true e false
  -il tipo null ha un solo valore possibile (null) e non rientra in nessuno dei precedenti tipi di dati
  -il tipo undefined prevede anch'esso un solo valore (undefined) ma, al contrario di null, non ha assegnato alcun valore*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/*var name = 'Marco';*/ 

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/*var a = 12;
var b = 20;
console.log((a + b))*/ 

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*var x = 12;*/

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*const name = 'Marco';
name = 'Mandolini';
console.log('il mio cognome è '+ name)*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/*console.log((4 - x));*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/*var name1 = 'john';
var name2 = 'John';
console.log(name1 != name2);
console.log(name1 == name2 .toLowerCase())*/

