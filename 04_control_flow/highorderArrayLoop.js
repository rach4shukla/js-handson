// ++++++++++ HIGHER ORDER ARRAY LOOPS +++++++++++

// for of

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps --> object that holds key-value pairs
// remembers the original insertion order of the keys

const map = new Map()
map.set('IN', "India")
map.set('CAN', "CANADA")
map.set('FR', "FRANCE")
map.set('IN', "India") // duplication is not allowed and known for unique values

console.log(map);

for (const key of map) {
    console.log(key); // output array
    
}

// destructuring of array

for (const [key, value]of map) { // [] syntax for displaying separate values
    console.log(key, ':-', value); // output array
}

// for of in Object

const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}  // not iterable


