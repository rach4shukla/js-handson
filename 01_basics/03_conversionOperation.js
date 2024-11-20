let score = "33";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score); // datatypes have capital format something which is class based
console.log(typeof(valueInNumber));

score = "33abc";
let valueIn = Number(score); 
console.log(typeof(valueIn));
console.log(valueIn); // This will come out as NaN as "33abc" is not a number even if you change the type

//JS does not have a strict conversion like TypeScript

score = null;
let scoreChange = Number(score);
console.log(typeof (scoreChange));
console.log(scoreChange); // This will be 0

score = undefined;
let newScoreChange = Number(score);
console.log(typeof (newScoreChange));
console.log(newScoreChange); // This will be NaN

score = true; //Boolean value true (1) false (0)
let boolScore = Number(score);
console.log(typeof (boolScore));
console.log(boolScore); //This will come out to be 1

// "33" => 33
// "33abc" => NaN
// true => 1
//false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // true

isLoggedIn = ""; // if string is empty, output is false; otherwise true
let newBooleanLoggedIn = Boolean(isLoggedIn);
console.log(newBooleanLoggedIn); 

// "Rachna" => true
// "" => false

// ************ Operations **************

let value = 3;
let negValue = -value;
console.log(negValue);

console.log( 2+2);
console.log( 2-2);
console.log( 2*2);
console.log( 2**3); // 2 raised power 3
console.log(2/3);
console.log(2%3);

let str1 = "Rachna";
let str2 = "Shukla";
let str3 = str1 + str2; // two strings can be concatenated like this
console.log(str3);

console.log("1"+ 2); // output will be 12
console.log(1+ "2"); //again 12
console.log("1" + "2" + 2); //output is 122 (whole conversion is in string and not 14)
console.log(1 + 2 + "2"); // 32 (ECMA Script guidelines => noone appreciates such type of code)

// use parenthesis when you try to code like the above line as it is messy
console.log(+true); //possible as increment is taking ==> output 1
console.log(+""); // empty => false +> output is 0

let gameCounter = 100
// ++gameCounter; // Prefix values update before usage
gameCounter++; // Postfix values update after usage
console.log(gameCounter); 

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion




