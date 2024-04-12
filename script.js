/*
  Inspired by: https://dribbble.com/shots/3477023-Shabbat-Illustration
*/
const $ = document.querySelectorAll.bind(document);
const cup = $('.cup');
const wine = $('.wine');
const dish = $('.dish');
const tl = new TimelineMax({ repeat: 0, yoyo: true });
tl.
from(wine, 1.0, { opacity: 0, yPercent: -300 }).
staggerFrom(dish, 1.5, { x: -260 }, 0.2, "-=1").
from(cup, 2.0, { opacity: 0, xPercent: 800, transform: 'rotate(30deg)' }, "-=1");