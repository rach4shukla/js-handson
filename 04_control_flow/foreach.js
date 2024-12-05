const coding = ["js", "ruby", "java", "cpp", "python"]

// forEach --> parameter of loop by default injected (Higher Order function)

coding.forEach( function (item){
    console.log(item);
    
}) // callback function has idea already it will go through each value or item so no name of this function

// Another Variation --> Arrow function

coding.forEach( (item) => {
    console.log(item);
    
})

function printMe(item){
    console.log(item);
    
}

coding.forEach(printMe) // give reference of function and not execute it , execution is with ()

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

// Arrays and Objects commonly used in forEach

const myCoding = [
    {
        langName: "JS",
        langFileName: "js"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
    {
        langName: "Java",
        langFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})