"use strict";

// Wir kennen Zahlen und Strings
// Da ist aber noch mehr: Boolean (wahr/falsch) -> (true/false)

var ichHabeRecht = true;
var duSingstSchoen = false;
// wenn du aber übst
duSingstSchoen = true;


// Bedingungen (if/else)
if (duSingstSchoen) {
  console.log('du darfst während dem Unterricht singen.');
} else {
  console.log('NEIN, du singst NICHT!');
}


// Mehrere Bedingungen
if (ichHabeRecht && duSingstSchoen) {
  console.log('Na dann keinen Zweifel!');
}


var x = 10;
var y = 20;

// weiteres Beispiel
if (x > y) {
  console.log('x > y');
} else if (x === y) {
  console.log('x === y');
} else {
  console.log('x < y');
}

/*
Aufgaben:
- if zusammenstellen
- auch mit Vergleichen
- 
*/
