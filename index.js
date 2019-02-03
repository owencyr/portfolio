/* eslint-disable no-console */
'use strict';

/* global $ */

const PROJECTS = [{
  title: 'Bookmarks App',
  desc: `In today's world, movies are released at a fever pace.  It can be hard to remember your initial reaction to the movie before the media cycle hypes the movie up to being the greatest movie america has ever seen.  
  This bookmark manager allows the user to keep a running database of movies that they have watched recently, including the description of the movie, url, and their own rating of the movie.  Maintain a database of your movie recommendations, accessible at any time on the web.
  `,
  tech: '<i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-js-square"></i>',
  link: 'https://thinkful-ei-armadillo.github.io/owen-robert-bookmarks',
  repo: 'https://github.com/thinkful-ei-armadillo/owen-robert-bookmarks',
  screenshot: 'assets/bookmarkscreen.png'
}];

function render() {
  let html = generateString(PROJECTS);
  $('.list').html(html);
}

function generateString(array) {
  return array.map((item, index) => generateHTML(item, index)).join('');
}

function generateHTML(item, index) {
  return `<li class="project-${index}>
  <ul>
  <li class="title"><h2>${item.title}</h2></li>
  <li class="screenshot"><a href="${item.link}"><img src="${item.screenshot}" class="screenshot" alt="${item.title}"></a></li>
  <li class="desc">${item.desc}</li>
  <li class="tech">${item.tech}</li>
  <li class="link"><a href="${item.link}"</a>Github.io Deployment</li>
  <li class="repo"><a href="${item.repo}"</a>Github Repository</li>
  </ul>
  </li>`;
}

function handlePortfolio () {
  render();
}

$(handlePortfolio());