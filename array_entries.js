let fruits = ["Banana", "Orange", "Apple", "Mango"];

let f = fruits.entries(); // Object [Array Iterator] {}

console.log(f);

for (let x of f) { // Iterate over it
    console.log(x); // [ 0, 'Banana' ] [ 1, 'Orange' ] [ 2, 'Apple' ] [ 3, 'Mango' ]
}

// Convert 'fruits' into an array
let fruitsArray = Array.from(fruits.entries());

console.log("-----key : value-----");
console.log(fruitsArray);
for (const [key, value] of fruitsArray) {
    console.log(`${key} : ${value}`); // 0 : Banana - 1 : Orange - 2 : Apple - 3 : Mango
}