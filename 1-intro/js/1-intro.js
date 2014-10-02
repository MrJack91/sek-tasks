"use strict";

// Ein Kommentar

/*
Ein mehrzeiliger Kommentar
*/



// der Erste Befehl -> output in der console
console.log('Output: Hier ein Hallo aus einem eigenen File');



/* Variablen */
// Einführung - Eine Zahl // Keine Sonderzeichen im Name, CamelCase
var dieZahl = 42;
// Neuer Wert
dieZahl = 57;
// Rechnen...
var Resultat = dieZahl - 15;
console.log(Resultat);
Resultat = 8 * 4 / 2 + 8;
console.log(Resultat);

// Modulo
Resultat = 8%5;
console.log(Resultat);


// Einen Text (String)
var derText = 'Was für ein schöner Tag!';
var derText2 = "Was für ein schöner Tag!";
var neuerText = derText + '... Das haben wir später angehängt.' + derText2;
console.log('derText: ' + derText);
console.log('neuerText: ' + neuerText);


// Einen Text (mit Zahl im Text)
var zahlImText = '42';
console.log('(Vorsicht) Rechnen mit Text ("42"+8): ' + zahlImText + 8);


/*
Aufgaben:
- Rechnen
--- Währung: Euro <-> CHF
--- Temperatur: Fahreinheit und Celsius
--- ist Zahl gerade? (Hinweis auf Modulo)
- Texte ausgeben...
-
-
*/
