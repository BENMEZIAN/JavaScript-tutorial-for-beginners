const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const citrus = fruits.slice(1);

console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(citrus); // [ 'Orange', 'Lemon', 'Apple', 'Mango' ]

const applus = fruits.slice(3);

console.log(applus); // [ 'Apple', 'Mango'];

const range = fruits.slice(1, 3); // include 1 , exclude 3

console.log(range); // [ "Orange", "Lemon"];