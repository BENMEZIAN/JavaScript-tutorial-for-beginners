/*
The DataTypes:
JavaScript has 8 Datatypes: String, Number, Bigint, Boolean, Undefined, Null, Symbol, Object

The Object Datatype:
The object data type can contain: An object, An array ,A date
*/

// Numbers:
let length = 16; // Without decimals
let weight = 7.5; // With decimals
let x1 = 34.00; // With decimals
let x2 = 34; // Without decimals
const PI = 3.14; // Constant

console.log("length =", length);
console.log("weight =", weight);
console.log("x1 =", x1);
console.log("x2 =", x2);
console.log("PI =", PI);

// BigInt:
/* A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by 
appending n to the end of an integer literal, or by calling the BigInt() function 
(without the new operator) and giving it an integer value or string value.
*/

var alsoHuge = BigInt(9007199254740991); // 9007199254740991n
console.log("alsoHuge =", alsoHuge);
console.log("type of alsoHuge =", typeof alsoHuge);

// Exponential Notation:
var a = 123e5; // 12300000
var b = 123e-5; // 0.00123

console.log("a =", a);
console.log("b =", b);

// Strings:
let color = "Yellow";
let lastName = "Johnson";
let myString = "Hello, world!";
let z = 16 + "Volvo"; // concatenation
let w = "16" + "Volvo"; // concatenation
let s = "Volvo" + 16 + 4; // concatenation

console.log("color =", color);
console.log("lastName =", lastName);
console.log("z =", z);
console.log("w =", w);
console.log("s =", s);

// Booleans
let x = true;
let y = false;

console.log("x =", x);
console.log("y =", y);

if (x1 == x2) {
    let x = true;
    console.log("x1 == x2 ?", x);
} else {
    let x = false
    console.log("x1 == x2 ?", x);
}

// Object:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// The typeof Operator

console.log(typeof length); // number
console.log(typeof weight); // number
console.log(typeof PI); // number
console.log(typeof x1); // number
console.log(typeof x2); // number

console.log(typeof alsoHuge); // BigInt

console.log(typeof color); // string
console.log(typeof lastName); // string
console.log(typeof myString); // string
console.log(typeof z); // string
console.log(typeof w); // string
console.log(typeof s); // string

console.log(typeof x); // boolean
console.log(typeof y); // boolean

console.log(typeof person); // object
console.log(typeof cars); // object (array object)