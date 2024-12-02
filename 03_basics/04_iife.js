// Immediately Invoked Function Expressions (IIFE)

// What is IIFE ? to avoid pollution from global scope and to immediately invoke it

(function chai(){
    console.log(`DB Connected`); 
})(); // paranthesis for function declaration and second () for calling function


// Through Arrow function

(() => { // unnamed IIFE
    console.log(`DB Connected Two`);
    
}) ();  // semi colon is must to tell JS that the function ends here

( function chai(name){  // named IIFE and with parameter
    console.log(`DB Connected ${name} `);
    
})('Rachna')
