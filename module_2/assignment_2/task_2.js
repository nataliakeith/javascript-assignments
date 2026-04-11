'use strict';
const participants = [];
const number = parseInt(prompt('Enter number of participants'));

for (let i = 0; i < number; i++) {
    const names = prompt('Enter name of participant');
    participants.push(names);

}

participants.sort();

let html = '';
for(let i = 0; i < participants.length; i ++) {
    html += (`<li>${participants[i]}</li>`);
}
document.getElementById('participants').innerHTML = html;

