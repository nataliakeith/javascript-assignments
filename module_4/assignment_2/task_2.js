'use strict';

const form = document.querySelector('#tv-form');

form.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const query = document.querySelector('#query').value;

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
  const jsonData = await response.json();

  console.log(jsonData);
  console.log(jsonData[0].show.name);
});
