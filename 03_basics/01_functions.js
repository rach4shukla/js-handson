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

// ++++++++++ FUNCTIONS WITH OBJECTS ++++++++++++ Shopping Cart

function calculateCartPrice (...num1){ // REST Operator (any number of arguments are allowed (multiple values))
    return num1
}

console.log(calculateCartPrice(200, 400, 600));

function calculateCartPrice2 (val1, val2, ...num1){ // REST Operator (any number of arguments are allowed (multiple values))
    return num1
}

console.log(calculateCartPrice2(200, 400, 600, 790)); // val1 is 200 and val2 is 400, rest will be under REST operator under num1


const user = {
    username: "Rachna",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

//Passing direct object too

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); // one way
console.log(returnSecondValue([200, 400, 600])); // another way

