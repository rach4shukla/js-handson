// +++++++ OBJECT LITERAL -- basic unit in JS ++++++
// collection of properties and method

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`); // because we are taking value from outside
        console.log(this); // current context
    }
}

console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // result --> empty paranthesis in node env.
// in browser --> window 

// +++++++++ CONSTRUCTOR FUNCTION ++++++++++

const promiseOne = new Promise()
const date = new Date() // new keyword --> constructor function
// it allows to create multiple instance from one object
// new keyword helps in making new context or instance and helps in avoiding values overwrite

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this // implicitly defined --> even if you do not write it
} // this.username --> variable

const userOne = new User("Rachna", 12, true)
const userTwo = new User("Prashant", 11, false) // values are overwritten
console.log(userOne.constructor); // reference to itself
// console.log(userTwo); 




