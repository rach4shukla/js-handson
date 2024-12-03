// if

const isUserLoggedIn = true
const temperature = 41

const condition = true

if(condition === true ){ // if true then only code executed

}

if (2 == 2){
    console.log(`it is true`);
    
}

if(isUserLoggedIn){

}

if(temperature < 50){
    console.log("less than 50");
} else{
    console.log("greater than 50");
}

// condition opeartor --> <, >, <=, >=, ==, !=, ===, !==

const score = 200

if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`); 
}

// +++++++ short-hand notation ++++++++

const balance = 1000

if (balance > 500) console.log("test")

if (balance > 500) console.log("test"),
console.log("test2"); // not a good practice with extra comma

// Nesting --> to check multiple condition

if(balance < 500){
    console.log("less than 500");
} else if (balance < 750){
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

// multiple conditions check (Logical operators)

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){ // && both statements need to be true
    console.log("allowed to buy course");
    
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}

// SWITCH (used in redux)

const month = 3

switch(month){
    case 1:
        console.log("January");
        break; // breaks the control flow
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("default case match");
        break;
}

// truthy and falsy values 

// Falsy Value --> false, 0, -0, BigInt 0n, "", null, undefined, Nan
//Truthy Value --> "0", "false" (written inside string), " " (space in string), [], {}, function(){}


const userEmail = "R@rachna.ai" // if no value in string --> false, otherwise true
if (userEmail) {
    console.log("got user email");
} else{
    console.log("don't have user email");
}

const userPassword = [] // empty array is truthy value

if(userPassword.length === 0){
    console.log("Array is empty");
    
}

const emptyObj = {} // empty object is truthy value

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

// false == 0 --> output is true
// false == "" --> true
// 0 == "" --> true

// ********** Nullish Coalescing Operator (??) ********** null undefined
// fallback to handle error

let val1;
val1 = 5 ?? 10  // using firebase or database, chances are null or undefined come (special case)
val1 = null ?? 10 // safety check is done through ?? operator

val1 = undefined ?? 15 // output is 15
val1 = null ?? 10 ?? 15 // output is 10

console.log(val1);

// +++++++++++++ Terniary Operator +++++++++

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? confirm.log("less than 80") : console.log("more than 80")
