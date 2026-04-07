'use strict'

const year = parseInt(prompt('Enter a year'));

if (year % 100 === 0 && year % 400 === 0) {
  document.getElementById('date').innerHTML =(`${year} is a leap year`);
}
else if (year % 4 === 0 && year % 100!==0) {
    document.getElementById('date').innerHTML =(`${year} is a leap year`);
}
else {
    document.getElementById('date').innerHTML =(`${year} is not a leap year`);
}