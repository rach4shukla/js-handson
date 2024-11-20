// *********** STRINGS ***********

// denoted in single or double quotes

//Concatenation

let message = "hello" + "world";
const repoCount = 12;

console.log( message + repoCount + "repos"); // old way of writing strings

//Modern ways of writing Strings using back ticks `` (string interpolation)

console.log(`Hello World, I have ${repoCount} repos on git`); // readable syntax

// To declare a String using another syntax
const gameName = new String('Rachna-Shukla-Sisodia'); // using new

console.log(gameName); // String as an object
console.log(gameName[0]); 
console.log(gameName.__proto__);

console.log(gameName.length); // accessing string methods
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

//*****Sanitize a string method */

const newString = gameName. substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) // negative value starts with reverse
console.log(anotherString);

//**** TRIM and REPLACE */
const newStringOne = "     Rachna    "; // extra spaces can be removed using trim ()
console.log(newStringOne.trim());

const url = "https://rachna.com/rachna%20shukla"
console.log(url.replace('%20', '-'));

console.log(url.includes('@')); // includes method

// another Method SPLIT --> to convert string into array

console.log(gameName.split('-')); // arguments can be separator



