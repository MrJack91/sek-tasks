"use strict";

function papagei(text) {
  return text + ' ' + text;
}

var vogelsprache = papagei('hallo');
console.log('Papagei sagt: ' + vogelsprache);


// ganz viele "Basics" functions

console.log('Date(): ' + Date());

// alert('huhu');

var l = vogelsprache.length;
console.log('l: ' + l);

console.log('typeof(l): ' + typeof(l));


console.log(Math.random());
console.log(Math.round(3.8));

/*
Aufgaben:
- Länge eines Textes zählen
- Typ zurückgeben (typeof())
-
*/
