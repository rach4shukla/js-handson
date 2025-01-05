// let myName = "Rachna     ";
// let myChannel = "Shukla     "

// console.log(myName.trueLength());


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rachna = function(){
    console.log(`rachna is present in all objects`);
}

Array.prototype.heyRachna = function(){
    console.log(`Rachna says hello`);
}

// heroPower.rachna()
myHeros.rachna()
heroPower.heyRachna() // throws error --> not injected in object but in array
myHeros.heyRachna()

// +++++++++ Inheritance ++++++++++++

const User = {
    name: 'gunnu',
    email: 'gunnu@gmail.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ShuklaAur     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"rachna".trueLength()
"iceTea".trueLength()