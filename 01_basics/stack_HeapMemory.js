// *********** Memory in JS ***********

//Stack Memory (Primitive - you get a copy) and Heap Memory (Non-Primitive - change happens in original value or reference) ( 2 Types of memory)

let myYoutubeName = "rachnaShukla"; // Primitive --> Stack (one above other)

let anotherName = myYoutubeName;
console.log(anotherName);

anotherName = "RewiseNow";
console.log(anotherName); // new value --> only copy has been changed and not original value
console.log(myYoutubeName); // old value 

// Objects --> Non-Primitive Datatype (HeapMemory --> get reference : change in original value)
let user = {
    email: "rachna4shukla@gmail.com",
    upi: "rachshukla@ybl",
}

let user2 = user; //if i will change in user2, it will change values in user

user2.email = "er.rachna@gmail.com";

console.log(user.email);
console.log(user2.email); // same value will be visible








