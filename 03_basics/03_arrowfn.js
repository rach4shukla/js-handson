// ************** ARROW Functions *****************

// 'this' keyword tells about current context in object

const user = {
    username: "Rachna",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); // refer current context
        // no hardcore value
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage() // output is sam now

console.log(this); // this refer to empty in node environment

// in browser, the global object is window (hence, this will not be empty in browser)

// ************* Arrow **************

// function chai(params) {
//     let username = "Rachna"
//     // console.log(this); // inside a function, this will give global values 
//     console.log(this.username); // cannot be accessed in function --> undefined 
    
// }

// chai()

const chai = () => {
    let username = "Rachna"
    console.log(this); // empty output
    // remember this is the difference between normal function & arrow
    // in arrow, we cannot have access to global values by using this
}

chai()

// BASIC ARROW FUNCTION

const addTwo = (num1, num2) => {
    return num1 + num2
} // when you use curly braces, return keyword is must to write (EXPLICIT RETURN)

// ARROW FUNCTION WITH IMPLICIT RETURN
const addTo = (num1, num2) => num1 + num2 // no curly paranthesis and no return keyword
// everything in same line

const addToh = (num1, num2) => (num1 + num2) //mostly used in React (paranthesis used, no need of return keyword)

const addTwoh = (num1, num2) => {username: "Rachna"} // object cannot be accessed like this
// we need to wrap the object with paranthesis

const addNum = (num1, num2) => ({username: "Rachna"})

console.log(addTwo(3, 4));
console.log(addTo(4, 5));

console.log(addNum(4, 4));

const myArray = [2, 3, 5, 4, 7]

myArray.forEach() 




