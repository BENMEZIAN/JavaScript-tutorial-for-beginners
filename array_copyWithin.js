const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.copyWithin(2, 0, fruits.length); // [ 'Banana', 'Orange', 'Banana', 'Orange' ]

console.log(fruits);

fruits.copyWithin(3, 0, fruits.length); // [ 'Banana', 'Orange', 'Apple', 'Banana' ]

console.log(fruits);