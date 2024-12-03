// ++++++++ do while loop ++++++++

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2
}

//with Array

let myArray = ["flash", "superman", "batman"]
let arr = 0;

while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
    arr ++;
}

// Do-While
let score = 1

do {
    console.log(`score is ${score}`);
    score ++
} while (score <= 10);

// rare case --> output 11 as we are checking condition later but value is printed first

let score1 = 11

do {
    console.log(`score is ${score}`);
    score ++
} while (score1 <= 10);