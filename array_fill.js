// Fill all the elements with a value:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.fill("Kiwi"); // [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]
fruits.fill("Kiwi", 2, 4); // [ 'Banana', 'Orange', 'Kiwi', 'Kiwi' ]
fruits.fill("Kiwi", 2, 3); // [ 'Banana', 'Orange', 'Kiwi', 'Mango' ]