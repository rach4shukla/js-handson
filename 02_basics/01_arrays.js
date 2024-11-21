// ++++++++++++++ ARRAYS +++++++++++++
// Arrays are also objects and are resizeable (more elements can be added)
/* They make shallow copies --> copy whose property shares the same reference point ()

if changes take place, it changes the original values.

DIFFERENCE BETWEEN SHALLOW COPY AND DEEP COPY

Deep Copy does not share the same reference point, hence do not change the original value

*/

const myArr = [0, 1, 2, 3, 4, 5, true] // arrays contain elements (similar or different type both)

console.log(myArr[0]);

// ARRAYS METHOD

const myHeros = ["Superman", "Batman", "Flash"]
const myArr2 = new Array (1, 2, 3, 4)

console.log(myArr.length); // length property

myArr.push(6) // PUSH adds a new element at the end
console.log(myArr);

myArr.pop() // POP removes the last value in array (no argument required)
console.log(myArr);

myArr.unshift(9)
console.log(myArr); // value be added at the start of the array (not a good practice - optimization is not good)

myArr.shift()
console.log(myArr); // value is removed from the start of an array (no argument required)

console.log(myArr.includes(9)); // output is boolean type
console.log(myArr);

console.log(myArr.indexOf(3));

const newArr = myArr.join() // converts array into strings and bind also
console.log(myArr);
console.log(newArr);

// +++++++ SLICE AND SPLICE +++++++++++++

console.log("A ", myArr);

const myNewA1 = myArr.slice(1, 3) // returns a section of an array (starts from 1 but does not include 3)

console.log(myNewA1);
console.log("B ", myArr);

const myNewA2 = myArr.splice(1, 3) // splice means the protion gets out from the array (manipulates original array)
console.log("C ", myArr);

console.log(myNewA2); 

// ++++++++++++++ More Methods +++++++++++++++ (mostly used in nodejs and react)

const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["batman", "Superman", "Flash"]

// marvelHeros.push(dcHeros) // output nested arrays 
// console.log(marvelHeros); // 4th element will be array containing more elements

// console.log(marvelHeros[3][1]);// to access it 

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros); // it will not generate nested arrays rather appear as joined

// SPREAD OPERATOR

const allNewHeros = [...marvelHeros, ...dcHeros]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6,7,[4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity) // for depth
console.log(realAnotherArray); 

console.log(Array.isArray("Rachna")); // not an array rather a string --> returns a false
console.log(Array.from("RachnaShukla")); // from converts the value in arrays
console.log(Array.from({name: "Rachna"})); // interesting (it returns an empty array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // of is used to put the values into single array










