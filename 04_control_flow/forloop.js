// ***************** FOR LOOP (ITERATIONS) BREAK AND CONTINUE *******************

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
}

// console.log(element); // block scope (element not defined)

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`); 
    for (let j = 1; j <= 10; j++) {
       // console.log(`inner loop value: ${j} and inner loop ${i}`);
       // console.log(i + '*' + j + ' =' + i*j);  
    }
}

// loops in array

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// KEYWORDS --> break and continue

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        // console.log(`detected 5`);
        break; 
    }
    // console.log(`value of i is: ${index}`);  
}

for (let index = 1; index <= 20; index++) {
    if(index === 5){
        console.log(`detected 5`);
        continue; // to forgive for one condition
    }
    console.log(`value of i is: ${index}`);  
}




