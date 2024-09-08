// JavaScript Functions

/*
JavaScript functions are used to perform operations. We can call JavaScript function many times to reuse the code.

Advantage of JavaScript function
- Code reusability
- Less coding

* Function parameters are the names listed in the function definition.
* Function arguments are the real values passed to (and received by) the function.

Function declaration:
---------------------
Syntax:

function functionName([Parameters]){
    ...
}

- Function declarations are hoisted, which means they can be called before they are defined in the 
code. This can be useful in certain situations.

- They have a more predictable behavior in terms of hoisting, which can make your code easier to 
understand.

- Function declarations can be more suitable for named functions that are used in multiple places in 
your code.

Function expressions:
---------------------

Syntax:
const functionName = function ([Parameters]) {
    ...
};

- Function expressions are not hoisted. They can only be used after they are defined in the code. 
This can help prevent issues related to accidentally calling a function before it's defined.

- Function expressions are often used for anonymous functions or when you need to assign a function 
to a variable, pass it as an argument, or return it from another function.

- They are more flexible when it comes to defining functions dynamically or conditionally.

Calling a function:
-------------------

Syntax: functionName([Parameters]);

Syntax: const variable = functionName([Parameters]);

*/

// function that prints a message ("Hello world")
function print() {
    console.log("Hello world");
}

// function that calculates the square of number
function square(number) {
    return number * number;
}

print();

console.log(square(5));

// function that changes the field of an object
function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

// function that changes a value of an array
function myFunc(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

// Function expression that calculates
const cube = function(x) {
    return x * x * x;
};

console.log("cube(", 3, ") =", cube(3));

// Nested functions and closures
function addSquares(a, b) { // outer function
    function square(x) { // inner function
        return x * x;
    }

    return square(a) + square(b);
}

console.log("square 1 = ", addSquares(2, 3)); // 13
console.log("square 2 = ", addSquares(3, 4)); // 25
console.log("square 3 = ", addSquares(4, 5)); // 41

/* 
Approach:

- Write one function inside another function.
- Make a call to the inner function in the return statement of the outer function.
- Call it fun(a)(b) where a is a parameter to the outer and b is to the inner function.
- Finally, return the combined output from the nested function.

function outer(a){
    function inner(b){
        ...
    }
    return inner;
}

outer(a)(b)
*/


function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

function outer() {
    const x = 5;

    function inner(x) {
        return x * 2;
    }
    return inner;
}

console.log(outer()(10)); // 20 (instead of 10)

// The outer function defines a variable called "name"
const pet = function(name) {
    const getName = function() {
        // The inner function has access to the "name" variable of the outer function
        return name;
    };
    return getName; // Return the inner function, thereby exposing it to outer scopes
};

const myPet = pet("Vivie");
console.log(myPet()); // "Vivie"


// The Arguments Object

//Function parameters are the names listed in the function definition.
//Function arguments are the real values passed to (and received by) the function.

/*
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
*/

// Access All Arguments Dynamically
function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

var x = findMax(1, 123, 500, 115, 44, 88);
console.log("Max =", x);

// Create Function Overloads
function example() {
    if (arguments.length === 1) {
        // Handle the case with a single argument
    } else if (arguments.length === 2) {
        // Handle the case with two arguments
    }
    // ...
}

// You Need to Manipulate or Process Arguments Before Forwarding
function processAndLog() {
    for (let i = 0; i < arguments.length; i++) {
        arguments[i] = arguments[i].toUpperCase();
    }
    console.log(arguments);
}

processAndLog('apple', 'banana', 'cherry'); // [Arguments] { '0': 'APPLE', '1': 'BANANA', '2': 'CHERRY' }

// Callback function
console.log("------------Callback function----------------");

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function evaluation(x, y, operation) {
    return operation(x, y);
}

console.log(evaluation(2, 3, add));
console.log(evaluation(2, 3, multiply));

/*
* getting all the nodes of a tree structure (such as the DOM) *
function walkTree(node) {
  if (node === null) {
    return;
  }

  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
*/