// +++++ PROTOTYPE BEHAVIOUR OF JS +++++

const newHero = ["hulk", "spiderman"]
// in browser, you get a prototype by default

/* 
    till JS do not get null value, it does not give up.
    because of prototype, we get new, this and classes

    prototype inheritance -- where does it stop ?
    Array level prototype --> object level prototype
    Array is also an Object --> no parent of object

    Array ---> Object ---> null
    String ---> Object ---> null
    function ---> Object ---> null

*/

function multiplyBy5(num){
    return num*5;
}
multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // output is empty paranthesis {}

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const rachna = new createUser("Rachna", 25)
const prashant = new createUser("Prashant", 250)

rachna.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
