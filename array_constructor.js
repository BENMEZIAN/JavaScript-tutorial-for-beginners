const myArr = new Array(4);

console.log(myArr.length); // 4
console.log(myArr[0]); // undefined; actually, it is an empty slot
console.log(0 in myArr); // false
console.log(1 in myArr); // false
console.log(2 in myArr); // false
console.log(3 in myArr); // false

const fruits = new Array("Banana", "Orange", "Apple", "Mango");

console.log("fruits.constructor:" + fruits.constructor);

console.log(fruits.length); // 4
console.log("fruits.length :", fruits.length); // 4
console.log("fruits[0] =", fruits[0]); // "Banana"
console.log("fruits[1] =", fruits[1]); // "Orange"
console.log("fruits[2] =", fruits[2]); // "Apple"
console.log("fruits[3] =", fruits[3]); // "Mango"