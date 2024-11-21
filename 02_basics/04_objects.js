// ************* OBJECTS DESTUCTURING and JSON API *************

const course = {
    coursename: "JS",
    price: 999,
    courseInstructor: "Rachna"
}

// for clean code --> syntax

const {courseInstructor: instructor} = course // destructring complex name into easy
console.log(courseInstructor); // to avoid course.courseInstructor etc.

// In React we use it like this {} for destructring
const navbar = ({company}) => {

}

navbar(company = "Rachna")

// +++++++++++++++ API +++++++++++++++ (to put your work on others)

// values in API comes in JSON (object only)

// {
//     "name": "Rachna",
//     "coursename": "JS",
//     "price": "free"
// } // JSON format where even the keys are in strings with double quotes

//+++ another way of API +++ in the form of Arrays

[
    {

    }, 
    {

    }
]
