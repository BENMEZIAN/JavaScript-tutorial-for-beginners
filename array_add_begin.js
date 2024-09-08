// The unshift() method adds one or more elements to the beginning of an array

let numbers = [30, 40];

numbers.unshift(20);

console.log(numbers);

const length = numbers.unshift(5, 10);

console.log(length);
console.log(numbers);

// Using the JavaScript Array unshift() method with array-like objects
let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    prepend(message) {
        [].unshift.apply(this, [message]);
        return this.length;
    },
};

greetings.prepend('Good day');
console.log(greetings);