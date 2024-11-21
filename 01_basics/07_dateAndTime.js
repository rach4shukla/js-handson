// +++++++++++++ DATE AND TIME +++++++++++++++++

// date is an object which represent a single moment 
// It is represented in milliseconds since the midnight at the beginning of Jan 1, 1970 UTC

// TC39 --> temporal API (proposal to make global object)

let myDate = new Date()
console.log(myDate.toString()); // not readable easily but we can convert it into string
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());

let myCreatedDate = new Date(2023, 0, 23) // months starts in JS from 0 --> jan
console.log(myCreatedDate.toDateString());

// more arguments can be put to add time

// SPECIFIC FORMAT

let newDate = new Date("2023-01-14")
console.log(newDate.toLocaleString());

// +++++++++ TIMESTAMP +++++++++++++

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // used in booking dates

// converting into seconds

console.log(Math.floor(Date.now()/ 1000));

let anotherDate = new Date()
console.log(anotherDate.getFullYear());
console.log(anotherDate.getDay());

// to customise date format 

newDate.toLocaleString('default', {
    weekday: "long"
})




