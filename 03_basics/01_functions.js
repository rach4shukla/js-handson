// ++++++++++++++ FUNCTIONS +++++++++++++++

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("M");
    
}

sayMyName()

function addTwoNumbers(number1, number2){ // definition of function --> parameters
    console.log(number1 + number2);
}

const result = addTwoNumbers(3, 4) //arguments are needed --> calling functions
// console.log("Result: ", result);

// even though i have saved the number after adding in result
// result value in output is undefined --> because we did not use return

function addTwoNumbers(number1, number2){ // definition of function --> parameters
    let result = number1 + number2
    return result
    console.log("Rachna"); // This will not printed because after the return function is not working 
}

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){   // !username is equivalent to username === undefined
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Rachna"))

console.log(loginUserMessage()) // if empty, value will be undefined



