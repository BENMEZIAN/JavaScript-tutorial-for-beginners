// The Array.prototype.shift() method removes the first element from an array

var arr = [1, 2, 3, 4, 5];

console.log(arr);

arr.shift(); // remove 1
console.log(arr.length);

console.log(arr);


// Using the JavaScript array shift() with array-like object
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeFirst() {
        return [].shift.call(this);
    },
};

const greeting = greetings.removeFirst();

console.log(greeting);
console.log(greetings);