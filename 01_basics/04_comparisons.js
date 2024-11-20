// ********* COMPARISONS **********

// console.log(2 > 1);
// console.log( 2 >= 1); 

// <=, == , != all of these are comparison operators

console.log("2" > 1);  // true as JS automatically convert it into number 2
console.log("02" > 1);

console.log( null > 0); //false
console.log( null == 0); //false (EQUALITY CHECK)
console.log( null >= 0); // problem of value conversion so it will come true

//***** same confusion in Undefined */

console.log(undefined == 0); //false by default; so avoid such comparisons

//***** STRICT CHECK with TRIPLE EQUALITY also known as STRICT EQUALITY */

console.log("2" === 2);  //false


