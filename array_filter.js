const ages = [32, 33, 16, 40];
const numbers = [1, 2, 3, 4, 5, 6];

function checkAdult(age) {
    return age >= 18;
}

const result = ages.filter(checkAdult);
console.log(result); // [ 32, 33, 40 ]

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const fruits = ["Apple", "Banana", "Cherry"];
const searchString = "an";

const matchingFruits = fruits.filter(function(fruit) {
    return fruit.toLowerCase().includes(this.toLowerCase());
}, searchString);

console.log(matchingFruits); // ["Banana"]