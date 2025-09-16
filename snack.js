// Snack 1

// 1.1 Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma

/* 
function somma(a, b) {
    return a + b;
};

console.log(somma(3, 5)); */

// 1.2 Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile

/* const somma = function (a, b) {
    return a + b;
};

console.log (somma(8, 3)); */

// 1.3 Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.
/* 
const somma = (a,b) => a + b;

console.log (somma(8, 3)); */

// Mio Bonus, utilizzo della closure
/* 
function createAdder (adder) {
    return function (number) {
        return number + adder;
    };
};

const add3 = createAdder(3)

console.log(add3(9)) */

// Snack 2 Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.

// const quadrato = (a) => a * a;

// oppure

/* function quadrato(a) { return a * a; }

console.log(quadrato(3));
*/


/* Snack 3 

Crea una funzione eseguiOperazione

Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

*/

/* function eseguiOperazione (a, b, operatore) {
   return operatore(a,b);
}

oppure
*/
/* 
const eseguiOperazione = (a, b, operatore) => operatore(a, b);

const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;
const sottrai = (a, b) => a - b;
const dividi = (a, b) => a / b;

console.log(eseguiOperazione(5, 3, somma));
console.log(eseguiOperazione(5, 3, moltiplica));
console.log(eseguiOperazione(10, 3, sottrai));
console.log(eseguiOperazione(7500, 10, dividi)); */

/* Snack 4

Crea un generatore di funzioni creaTimer

Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".

*/
/* 
const creaTimer = (a) => {
    return setTimeout (function(){
        console.log("Tempo Scaduto");
    }, a);
}

console.log(creaTimer(3000)); */

/* Snack 5

Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.

Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/
/* 
function stampaOgniSecondo(message) {
    setInterval(() => {
        console.log(message);
    }, 1000);
}

stampaOgniSecondo("è passato 1 secondo") */

/* Snack 6

Crea un contatore automatico con setInterval

Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

/* 
function creaContatoreAutomatico(intervallo) {
    let contatore = 0 // variabile prima della closure
    
    return function() {
        setInterval(() => {
            contatore++;
            console.log(contatore);
        }, intervallo);
    };    
}

const avviaContatore = creaContatoreAutomatico(1000);

avviaContatore(); */

/* Snack 7

Crea una funzione che ferma un timer dopo un certo tempo

Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/
/* 
function eseguiEferma(messaggio, intervallo, tempoStop) {
    let contatore = 0;

        const timerId = setInterval(() => {
            contatore++;
            console.log(messaggio);
        }, intervallo);
   

    setTimeout(() => clearInterval(timerId), tempoStop)    
}

eseguiEferma("viva le tette", 1000, 5000); */

/* Snack 8 (Bonus)

Crea una funzione che simula un conto alla rovescia

Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
*/

/* function contoAllaRovescia(n) {
    let contatore = n;

        const timerId = setInterval(() => {
            if (contatore > 0 ) {
                console.log(contatore);
                contatore--;
            } else {
                console.log("Tempo scaduto!");
                clearInterval(timerId);
            };
        }, 1000);            
};

contoAllaRovescia(10); */


/* Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi


Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
 */

/* function sequenzaOperazioni(operazioni, intervallo) {
    // operazioni: array di funzioni da eseguire
    // intervallo: tempo in millisecondi tra una operazione e la successiva
    operazioni.forEach((op, i) => {
        // per ogni operazione (op) prendo anche l'indice (i)
        // calcolo il ritardo come intervallo * i (prima operazione: i = 0 -> ritardo 0)
        setTimeout(() => {
            op(); // eseguo la funzione op
        }, intervallo * i);
    });
};

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 1000);
 */


/* Snack 10 (Bonus) 

Creare un throttler per limitare l’esecuzione di una funzione


Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
*/

/* // 1) Definisco creaThrottler
//    - fn: la funzione da "throttlare"
//    - limite: tempo minimo (in ms) tra due esecuzioni
function creaThrottler(fn, limite) {
    // Qui salvo l'ultima volta che la funzione è stata eseguita
    let ultimoEseguito = 0;

    // Restituisco una nuova funzione che "incapsula" la logica di throttling
    return function(...args) {
        const adesso = Date.now();

        // Se è passato abbastanza tempo dall'ultima esecuzione...
        if (adesso - ultimoEseguito >= limite) {
            // aggiorno il timestamp
            ultimoEseguito = adesso;

            // ed eseguo la funzione originale
            fn(...args);
        } else {
      // troppo presto → segnalo
      console.log("Ignorato (troppo presto)");
    }
    };
}


const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog();              // "Eseguito!"
throttledLog();              // Ignorato (troppo presto)
setTimeout(throttledLog, 2500); // "Eseguito!" (dopo 2.5 secondi)
 */