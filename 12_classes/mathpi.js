const myNewobject = {
    username: "username",
    writeable: false,
    enumerable: false,
    configurable: false
}

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const newObject = Object.create(null)
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nahi bani");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    // writeable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
    
}

