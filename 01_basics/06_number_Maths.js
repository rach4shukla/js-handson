// ********* NUMBER AND MATHS *******

const score = 400

const balance = new Number(100) // object is defined which is type number
console.log(balance);
console.log(score); // output shown directly 400

console.log(balance.toString().length);
console.log(typeof (balance)); // object

console.log(balance.toFixed(2));

const otherNumber = 123.9877
console.log(otherNumber.toPrecision(3)); // returns a string

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // commas will be according to Indian values

// Max value and Min Value (MAX_VALUE and MIN_VALUE)

// ******************* MATHS *************************** (Library that comes with JS by default)

console.log(Math);

console.log(Math.abs(-4)); // converts negative value in positive
console.log(Math.round(4.3));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2)); // takes higher value --> 5
console.log(Math.floor(4.2)); // takes lower value --> 4

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.floor(Math.random()*10) + 1); // always between 0 and 1 --> DICE GAME 
// + 1 is added to avoid 0 value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

