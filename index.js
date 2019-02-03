/* eslint-disable no-console */
'use strict';

/* global $ */

const PROJECTS = [{
  title: 'Bookmarks App',
  desc: `In today's world, movies are released at a fever pace.  It can be hard to remember your initial reaction to the movie before the media cycle hypes the movie up to being the greatest movie america has ever seen.  
  This bookmark manager allows the user to keep a running database of movies that they have watched recently, including the description of the movie, url, and their own rating of the movie.  Maintain a database of your movie recommendations, accessible at any time on the web.
  `,
  tech: 'HTML, CSS, JS, jQuery',
  link: '...will be updated with github.io deployment',
  repo: 'https://github.com/thinkful-ei-armadillo/owen-robert-bookmarks'
},
{
  title: 'Bookmarks App',
  desc: `In today's world, movies are released at a fever pace.  It can be hard to remember your initial reaction to the movie before the media cycle hypes the movie up to being the greatest movie america has ever seen.  
  This bookmark manager allows the user to keep a running database of movies that they have watched recently, including the description of the movie, url, and their own rating of the movie.  Maintain a database of your movie recommendations, accessible at any time on the web.
  `,
  tech: 'HTML, CSS, JS, jQuery',
  link: '...will be updated with github.io deployment',
  repo: 'https://github.com/thinkful-ei-armadillo/owen-robert-bookmarks'
}];

function render() {
  let html = generateString(PROJECTS);
  // console.log(html);
  $('.list').html(html);
}

function generateString(array) {
  return array.map((item, index) => generateHTML(item, index)).join('');
}

function generateHTML(item, index) {
  return `<li class="project-${index}>
  <ul>
  <li class="title"><h2>${item.title}</h2></li>
  <li class="desc">${item.desc}</li>
  <li class="tech">${item.tech}</li>
  <li class="link">${item.link}</li>
  <li class="repo">${item.repo}</li>
  </ul>
  </li>`;
}

function handlePortfolio () {
  render();
}

$(handlePortfolio());