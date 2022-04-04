// Consegna :

/* 
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:

con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

// Funzione per Cento celle
function cellTen() {
        // Colonna da 100 senza function
        // costante che richiama l'id dell'Container principale
        let ListHtml = document.getElementById("cells");

        for (let i = 1; i <= 100; i++) {
            const singleCell = `<div class="cell d-flex cell_w-10 cell justify-content-center align-content-center"> ${i} </div>`;
            ListHtml.insertAdjacentHTML(`beforeend`, singleCell);
            // Console Log
            console.log(ListHtml);
        }

        return ListHtml
    }
console.log(cellTen())

// Funzione per 81 celle
function cellNine() {
    // Colonna da 100 senza function
    // costante che richiama l'id dell'Container principale
    let ListHtml = document.getElementById("cells");

    for (let i = 1; i <= 81; i++) {
        const singleCell = `<div class="cell d-flex cell_w-9 cell justify-content-center align-content-center"> ${i} </div>`;
        ListHtml.insertAdjacentHTML(`beforeend`, singleCell);
        // Console Log
        console.log(ListHtml);
    }

    return ListHtml
}
console.log(cellNine());

// Funzione per 49 celle
function cellSeven() {
    // Colonna da 100 senza function
    // costante che richiama l'id dell'Container principale
    let ListHtml = document.getElementById("cells");

    for (let i = 1; i <= 49; i++) {
        const singleCell = `<div class="cell d-flex cell_w-9 cell justify-content-center align-content-center"> ${i} </div>`;
        ListHtml.insertAdjacentHTML(`beforeend`, singleCell);
        // Console Log
        console.log(ListHtml);
    }

    return ListHtml
}
console.log(typeof cellSeven());


document.getElementById('play_btn').addEventListener('click', function () {

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

    // griglie vuote e richiamate quando necessario
    const clear = document.getElementById("clean").innerHTML = "";

    if (userDifficult === "easy") {
        control = cellSeven();
    } else if (userDifficult === "medium") {
        control = cellNine();
    } else if (userDifficult === "difficult") {
        control = cellTen();   
    }
})