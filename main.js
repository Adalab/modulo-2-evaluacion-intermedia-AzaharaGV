'use strict'

let user_number = document.querySelector ('.select_number');
let clue = document.querySelector ('.clue');
let attempts = document.querySelector ('.attemps');
const button = document.querySelector ('.try_button');
const result = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
console.log (`Número aleatorio`, result );

    function getSelectNumber () {
        const select_number = parseInt (select_number.value);
        console.log (`Número elegido`, + user_number );
    }

if (user_number<0 || user_number>100) {
clue.innerHTML = `El número debe estar
    entre 1 y 100`;
} else if (user_number< result) {
    clue.innerHTML = `Demasiado bajo`;
} else if (user_number === result) {
    clue.innerHTML = `Has ganado campeona!!!`;
} else (user_number > result ) 
    clue.innerHTML = `Demasiado alto`; 



button.addEventListener('click', getSelectNumber);