const coding = ["js", "ruby", "java", "cpp", "python"]

const values = coding.forEach( (item) => {
    console.log(item);
    
})

console.log(values) // output is undefined as it does not return item or value

// Returning a value using filter (giving condition here is the basic syntax)

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

myNums.filter( () => {

})

const newNums = myNums.filter( (num) => num > 4) // giving a condition is must in filter
// no curly brackets here in this function so it will return the values
console.log(newNums);

const newNums1 = myNums.filter( (num) => {
    return num > 4
}) // Here i have added curly brackets, so scope is added
// now we need to explicitly state return within the scope 

console.log(newNums1);

// Using forEach --> Another way

const newNums2 = []
myNums.forEach( (num) => {
    if(num > 4){
        newNums2.push(num)
    }
})

// Another Example

const books = [
    {
        title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'Book Two', genre: 'Non-Fiction', publish: 1989, edition: 2009
    },
    {
        title: 'Book Three', genre: 'History', publish: 1988, edition: 2017
    },
    {
        title: 'Book Four', genre: 'Non-Fiction', publish: 1996, edition: 2019
    },
    {
        title: 'Book Five', genre: 'Science', publish: 1995, edition: 2020
    },
    {
        title: 'Book Six', genre: 'History', publish: 1991, edition: 2021
    }
]

let userbooks = books.filter( (item) => item.genre === 'History')
// let userbooks1 = books.filter( (item) => item.publish <= 2010)

let userbooks1 = books.filter( (item) => {
    return item.publish <= 2010 && item.genre === 'History'
})

console.log(userbooks1);

// +++++++++++ Map +++++++++++

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers.map( (num) => {
    return num + 10 // scope --> return keyword needed
})

console.log(newNumbers);

// Chaining Method

const newNumbers1 = myNumbers
                    .map( (num) => num * 10)
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40) // true or false works here

console.log(newNumbers1);

// +++++++++++++ Reduce ++++++++++++++++
/* used mostly in shopping cart --> accumulator is empty variable (initial value goes in accumulator
when first time loop begins) */

const myNumbers4 = [1, 2, 3]

const myTotal = myNumbers4.reduce( function (acc, currVal){
    console.log(`acc: ${acc} and currVal: ${currVal}`);
    
    return acc + currVal
}, 0) // Here 0 is initial value

console.log(myTotal);

// Reduce using arrow function

const totalNums = myNumbers4.reduce( (acc, currVal) => {
    return acc + currVal
}, 0)

console.log(totalNums);

const shoppingCart = [
    {
        itemName: "JS course",
        price: 3000
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Data Science",
        price: 12999
    },
    {
        itemName: "Mobile Development",
        price: 5999
    }
]

const priceToPay = shoppingCart.reduce( (acc, currVal) => {
    return acc + currVal.price
}, 0)

console.log(priceToPay);





