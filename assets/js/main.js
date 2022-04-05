// Consegna :

/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// Generare valore del select del form
const userDifficult = document.getElementById("difficulties").value;
// Genera valori delle option
const easyChoiche = document.getElementById("easy").value;
const mediumChoiche = document.getElementById("medium").value;
const difficultChoiche = document.getElementById("difficult").value;
// Bottone Play
const playButton = document.getElementById("play_btn");
// Tutti console log delle scelte e option
console.log(userDifficult, easyChoiche, mediumChoiche, difficultChoiche, playButton);



