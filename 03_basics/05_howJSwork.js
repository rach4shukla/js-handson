// HOW CODE IS EXECUTED IN JS

// **** JavaScript EXECUTION CONTEXT ******* Single Threaded

/* The file that has been created, how it is run ?

1. Global Execution Context --> refer 'This' (window object)
2. Functional Execution Context
3. Eval Execution context --> property of global object (used in Mongoose)

RUN in 2 Phases

a. Memory Creation Phase --> only space allocated for variables but no execution
b. Execution Phase --> execution done here

CODE FILE:

let val1 = 10
let val2 = 5

function addNum(num1, num2){
    let total = num1+ num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

STEPS OF HOW CODE IS RUN:

Step 1. Global Execution (or Global Environment) ---> allocated in 'This
Step 2. Memory Phase --> variables are kept (FIRST CYCLE)

val1 --> undefined (LINE 1)
val2 --> undefined (LINE 2)

addNum --> definition of function (LINE3 - 6)

result1 --> undefined
result2 --> undefined 

Step 3. Execution Phase (SECOND CYCLE)

val1 --> 10
val2 --> 5
addNum --> nothing to execute 

result1 --> addNum --> another execution context here (New variable Environment and Execution Thread)

again for addNum function , Memory phase and execution phase will be formed

3.a Memory Phase
    val1 --> undefined
    val2 --> undefined
    total --> undefined

3.b Execution Context
    num1 --> 10
    num2 --> 5
    total --> 15 return to global execution context

(Line 8) result2 --> addNum --> repeat another execution context here (New variable Environment and Execution Thread)

again for addNum function , Memory phase and execution phase will be formed

3.1.a Memory Phase
    val1 --> undefined
    val2 --> undefined
    total --> undefined

3.1.b Execution Context
    num1 --> 10
    num2 --> 2
    total --> 20 return to global execution context

CALL STACK --> LIFO (last in first out)
*/

function one(){
    console.log("one")
    }
    function two(){
        console.log("two")
        }
        function three(){
            console.log("three")
            }

function one(){
                console.log("one")
                two()
                }
                function two(){
                    console.log("two")
                    three()
                    }
                    function three(){
                        console.log("three")
                        }

one();
two();
three();