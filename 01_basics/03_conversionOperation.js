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
