const numbers = [10, 20, 30];

const last = numbers.pop();

console.log(last); // 30
console.log(numbers.length); // 2

// Using JavaScript pop() method with array-like objects

let greetings = {
    0: 'Hi',
    1: 'Hello',
    2: 'Howdy',
    length: 3,
    removeLast() {
        return [].pop.call(this);
    },
    RemoveLast() {
        return [].pop.apply(this);
    }
};

let greting = greetings.RemoveLast();

console.log("the removed element is:", greting);
console.log(greetings);