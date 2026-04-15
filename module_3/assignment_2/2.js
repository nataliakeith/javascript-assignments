'use strict';

const ul = document.getElementById('target');

const list = document.createElement('li');
list.innerHTML = `<li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>`;

ul.appendChild(list);

const second = document.getElementsByTagName('li')[2];

second.classList.add('my-item');
