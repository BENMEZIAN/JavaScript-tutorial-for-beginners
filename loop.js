// JavaScript Loops
/*The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in 
loops.It makes the code compact. It is mostly used in array.
* for - loops through a block of code a number of times
* for/in - loops through the properties (keys) of an object 
* for/of - loops through the values of an iterable object (array)
* while - loops through a block of code while a specified condition is true
* do/while - also loops through a block of code while a specified condition is true
*/

const prompt = require("prompt-sync")({ sigint: true });

var input = parseInt(prompt("Give me number: "));

switch (input) {
    case 1:
        console.log('For loop');
        var i = 10;
        for (var i = 0; i < 5; i++) {
            console.log(i);
        }
        break;

    case 2:
        console.log('For...in loop');
        const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

        // iterate through properties (keys)
        for (let property in person) {
            console.log(`${property}: ${person[property]}`);
        }
        break;
        /* 
        for (let key in person) {
            console.log(key + ': ' + person[key]);
        }
        */
    case 3:
        console.log('For...of loop');
        const array = [1, 2, 3, 4, 5];

        // iterate through element
        for (const value of array) {
            console.log(value);
        }
        break;

    case 4: // special case (iterate through elements by index with for...in)
        console.log('For...in loop (display index)');
        for (let index in array) { // index = 0,1,2,3,4
            console.log("array[", index, "] =", array[index]);
        }
        break;

    case 5:
        console.log('While loop');
        var i = 0;
        while (i < 10) {
            console.log(i);
            i++;
        }
        break;

    case 6:
        console.log('Do...while loop');
        var i = 0;
        do {
            console.log(i);
            i++;
        } while (i < 10);
        break;

    default:
        console.log("Wrong choice");
}