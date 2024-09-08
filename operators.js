// JavaScript Operators

/*
There are different types of JavaScript operators:

- Arithmetic Operators (+, - , * , ** , / , % , ++ , --)
- Assignment Operators (=)
- Comparison Operators (== , === ,!= ,!== ,> , < , >= ,<= , ?)
- String Operators
- Logical Operators (&&, ||, !)
- Bitwise Operators 
- Ternary Operators
- Type Operators (?:)
*/

// Arithmetic Operators
let a = 3;
let x = (100 + 50) * a;

console.log(x);

// Assignment Operators
var b = 3;
b += 2; // same bs b=b+2

console.log(b);

// Comparison Operators
if (b === 5) {
    console.log(b, "is equal to", 5, "value and type");
}

// String Operators
let str = "Hello";
let str2 = "World";

if (str == str2) {
    console.log(str, "is equal to", str2);
} else {
    console.log(str, "is not equal to", str2);
}

console.log("Concatenation :", str + " " + str2);

// Logical Operators

if (a == 2 && b == 5) {
    console.log("a+b =", a + b);
} else {
    console.log("do nothing");
}

if (a == 2 || b == 5) {
    console.log("a + b =", a + b);
} else {
    console.log("do nothing");
}

// Bitwise Operators
console.log("a & b =", a & b);
console.log("a | b =", a | b);
console.log("a ^ b =", a ^ b);
console.log("~a =", ~a);
console.log("a << b =", a << b);
console.log("a >> b =", a >> b);
console.log("a >>> b =", a >>> b);

// Ternary Operators
var age = 20;
var language = "javascript";

(age >= 18) ? console.log("Can Vote"): console.log("Cannot Vote");
(language == "javascript") ? console.log("programming language"): console.log("markup language");