// ++++++++++++++ FUNCTION SCOPE ++++++++++++

let a = 100
const b = 20 // global scope
var c = 300  // global scope , avoid as it is problematic

if (true){
    let a = 10  // this would not give output as it is block scope
    const b = 20
    var c = 30
    // console.log("INNER: ", a);
    
} // curly braces are the scope. --> var creates a problem with scope even if not declared it will give output

// console.log(a);
// console.log(b);
// console.log(c);

// BLOCK SCOPE in curly brackets

// the scope in browser (inspect) is different from the scope in (through node) code environment

// *********** NESTED SCOPE & CLOSURE ************** (DOM is important)


function one(){
    const username = "Rachna"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); // scope is limited
    two()
} // child function can access parent but not vice-versa

one()

if(true){
    const username = "Rachna"
    if(username === "Rachna"){
        const website = "youtube"
        console.log(username + website);
    }
    console.log(website); // cannot be accessed (no scope)
}

console.log(username); // cannot be accessed (no scope)


// +++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++

function addOne(num){
    return num + 1
} // functions

addOne(5) // can be written above function declaration as this is not an expression
// it is not holding the value in a variable

const addTwo = function(num){
    return num + 2
} // EXPRESSIONS : can hold variable values or JSON values

addTwo(5) // if i write it above function addTwo , error thrown
// holding value in a variable so cannot be called before function (Hoisting)


