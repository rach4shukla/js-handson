// +++++++ OBJECTS +++++++++ (Super Important)

/* TWO WAYS TO DECLARE AN OBJECT IN JS:

    1. Literal --> multiple instances; not singleton
    2. Constructor (singleton --> unique)

*/

Object.create // constructor method

const mySymb = Symbol('key1') // declaring a symbol

const jsUser = {
    name: "Rachna",
    "full name": "Rachna Shukla",
    [mySymb]: "myKey1", // syntax of symbol using symbol asked in interviews a  [square notation]
    age: 18,
    location: "Cambridge",
    email: "rachna@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} // works in key-value pair

console.log(jsUser.email); // to access the object (preferable)
console.log(jsUser["email"]); // another way to access, just make sure double quotes used in square notation

// it is because by default JS takes the keys in key-value pairs in the form of strings

console.log(jsUser["full name"]);
console.log(jsUser[mySymb]);

// to change the values of object
jsUser.email = "rachna@chatgpt.com"
// Object.freeze(jsUser) // to freeze user from making any changes
jsUser.email = "rachna@microsoft.com"
console.log(jsUser);


jsUser.greeting = function (){
    console.log("Hello JS user");
    
}

jsUser.greetingTwo = function (){
    console.log(`Hello JS user, ${this.name}`); // 'this' is used to refer to the same object
}

// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());





