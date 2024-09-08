/* A variable is a label that references a value like a number or string. Before using a variable, 
you need to declare it.*/

// 1- Declare a variable
// To declare a variable, you use the "var" or "let" keyword followed by the variable name as follows:

var message;
let name;

const PI = 3.14;

console.log("PI =", PI);

function varScoping() { // x is scoped from all this function
    var x = 1;

    if (true) {
        var x = 2;
        console.log("Interne block :", x); // will print 2
    }

    console.log("Externe block :", x); // will print 2
}

console.log("---------Var scope-----------------")
varScoping();

function letScoping() {
    let x = 1; // x is scoped as 1 inside this block

    if (true) {
        let x = 2; // x is scoped as 2 inside this block
        console.log("Interne block :", x); // will print 2
    }

    console.log("Externe block :", x); // will print 1
}

console.log("---------Let scope-----------------")
letScoping();

function varAndLetScoping() {
    var x = 1;

    if (true) {
        let x = 2;
        console.log("Interne block :", x); // will print 2
    }

    console.log("Externe block :", x); // will print 1
}

console.log("---------Var and let scope-----------------");
varAndLetScoping();

function nestedScopeTest() {
    if (true) {
        var functionVariable = 1;
        let blockVariable = 2;

        console.log(functionVariable); // will print 1
        console.log(blockVariable); // will print 2

        if (true) {
            console.log(functionVariable); // will print 1
            console.log(blockVariable); // will print 2
        }
    }

    console.log(functionVariable); // will print 1
    console.log(blockVariable); // will throw an error
}

console.log("---------Nested scope-----------------");
nestedScopeTest();

/*
The Problem:
------------
What’s the difference between using let and var in JavaScript ?


The Solution:
-------------
The difference between let and var is in the scope of the variables they create:
- Variables declared by let are only available inside the block where they’re defined.
- Variables declared by var are available throughout the function in which they’re declared.
*/