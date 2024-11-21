// ++++++++++ SINGLETON (CONSTRUCTOR) +++++++++++++

const tinderUser = new Object() // singleton object
const tinderUser2 = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rachna",
            lastname: "Shukla"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname); // chaining to access further

// Optional Chaining

console.log(regularUser.fullname?.userfullname.firstname); // will discuss later

// +++++++ COMBINING OBJECTS +++++++

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = { obj1, obj2} // will show same array problem (object within object)
const obj3 = Object.assign({}, obj1, obj2) // optional parameter --> empty paranthesis
// empty object is seen as a target and rest will be source

 // const obj3 = Object.assign(obj1, obj2) // this can be 
 
 const obj4 = {...obj1, ...obj2} // SPREAD OPERATOR CAN BE USED TOO ***BEST****

 console.log(obj4);
 
console.log(obj3);

//+++++++++ VALUES FROM DATABASE +++++++++

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 2,
        email: "p@gmail.com"
    },
    {
        id: 3,
        email: "K@gmail.com"
    }
]

users[1].email // object can be accessed through dot notation
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // datatype will be array
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // to check the property is available









