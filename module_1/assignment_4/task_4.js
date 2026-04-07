'use strict';

const name = prompt('Enter your name');

let room = Math.floor(Math.random() * 4) + 1;

switch(room) {
    case 1:
        document.getElementById('room').innerHTML = (`${name}, you are at Gryffindor.`);
        break;
    case 2:
       document.getElementById('room').innerHTML = (`${name}, you are at Slytherin.`);
        break;
    case 3:
        document.getElementById('room').innerHTML =(`${name}, you are at Hufflepuff.`);
        break;
    case 4:
        document.getElementById('room').innerHTML = (`${name}, you are at Ravenclaw.`);
        break;
}

