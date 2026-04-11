'use strict';

const dogs = 6;
const dogs_names = [];

for (let i = 0; i < dogs; i++) {
    const names = prompt('Enter dog name');
    dogs_names.push(names);
}
dogs_names.sort();
dogs_names.reverse();

let html = '';

for (let i = 0; i < dogs_names.length; i++) {
    html += (`<li>${dogs_names[i]}</li>`)
}

document.getElementById('dogs').innerHTML = html

