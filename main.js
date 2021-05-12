'use strict'

let select_number = document.querySelector ('.select_number');
let clue = document.querySelector ('.clue');
let attempts = document.querySelector ('.attemps');
const button = document.querySelector ('.try_button');
const result = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
console.log (`Número aleatorio`, result );
