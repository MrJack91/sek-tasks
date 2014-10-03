"use strict";

function papagei(text) {
  return text + ' ' + text;
}

var vogelsprache = papagei('hallo');
console.log('Papagei sagt: ' + vogelsprache);



function findeMinimum(x, y) {
  var min = y;
  if (x < y) {
    min = x;
  }
  return min;
}
findeMinimum(5, 8);


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

document.write('Hier mal einen anderen Output');

/*
Aufgaben:
- Länge eines Textes zählen
- Typ zurückgeben (typeof())
- Zahlen check isNaN()
- setTimeout()

Quellen:
- http://de.selfhtml.org/javascript/objekte/math.htm
- http://de.selfhtml.org/javascript/objekte/number.htm
- http://de.selfhtml.org/javascript/objekte/string.htm

*/
