'use strict';

const form = document.querySelector('#tv-form');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const query = document.querySelector('#query').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();

    results.innerHTML = '';

    for(let i = 0; i < data.length; i++) {
        const tvShow = data[i];
        const article = document.createElement('article');

        const title = document.createElement('h2');
        title.innerText = tvShow.show.name;

        const link = document.createElement('a');
        link.href = tvShow.show.url;
        link.target = '_blank';
        link.innerText = tvShow.show.url;

        const image = document.createElement('img');
        image.src = tvShow.show.image?.medium;
        image.alt = tvShow.show.name;

        const summary = document.createElement('div');
        summary.innerHTML = tvShow.show.summary;

        article.appendChild(title);
        article.appendChild(link);
        article.appendChild(image);
        article.appendChild(summary);

        results.appendChild(article);
  }
});
