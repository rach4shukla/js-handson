// 2 Types --> Primitive & Non-Primitive (Reference) datatypes

// the only difference between them is based on how you store them in memory & how to access them

// ********* PRIMITIVE ********** (7 types) call by value means copy ==> String; Number; Boolean; null; undefined; Symbol (unique in advanced JS); BigInt (to handle big values)

// ***** REFERENCE (NON-PRIMITIVE) ******* directly allocated ==> Arrays, Objects, functions

const heros = ["shaktiman", "vyom", "JuniorG"]

let myObj = {
    name: "Rachna",
    age: 23,
}

const myFunction = function(){
    console.log("Hello, World");
    
}

// JS is dynamically typed language

const score = 100 //number
const scoreValue = 100.3 //number

const isLoggedIn = false //boolean
const outsideTemp = null //null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123') //values will be different even though it looks same

console.log( id === anotherId); //false as symbols are unique

const bigNumber = 122435475684769586n // bigInt ends with n


console.log(typeof bigNumber); //bigint
console.log(typeof outsideTemp); //null value will have object datatype
console.log(typeof myFunction); // function object 

console.log(typeof id); //symbol


