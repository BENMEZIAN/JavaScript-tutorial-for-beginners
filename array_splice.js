// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
/* Syntax
array.splice(index, howmany, item1, ....., itemX)
index:	(Required), The position to add/remove items.
howmany: (Optional), Number of items to be removed.
item1, ..., itemX: (Optional), New elements(s) to be added. */

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi"); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits2.splice(2, 2); // [ 'Banana', 'Orange', 'Kiwi' ]

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(2, 1, "Lemon", "Kiwi"); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

console.log(fruits1);
console.log(fruits2);
console.log(fruits3);

// Replacing elements using JavaScript Array splice() method

let languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

languages.splice(3, 1, 'C#', 'Swift', 'Go');
console.log(languages); // [ 'C', 'Python', 'Java', 'C#', 'Swift', 'Go' ]