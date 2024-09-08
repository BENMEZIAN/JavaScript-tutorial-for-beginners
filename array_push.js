var emp = ["Sonoo", "Vimal", "Ratan", "Vrushali", "Deeplai", "Rajesh"];

// Section 1. Array properties
console.log(emp.length); // 6

// Section 2. Adding elements
emp.push("Kumar", 10);
emp.push("Sharma");

let colors = ['red', 'green', 'blue'];
let cmyk = ['cyan', 'magenta', 'yellow', 'back'];

for (const color of cmyk) {
    colors.push(color);
}

console.log(colors);

// Using JavaScript Array push() method with array-like objects
const employee = {
    id: 102,
    name: "Shyam Kumar",
    salary: 40000,
    work: function() {
        console.log("Hello, I'm working!");
    },
    bePaid(month) {
        let m = month
        console.log("I get my salary every", m);
    },
    augmentation: () => { // arrow function
        console.log("augmentation, every graduation!");
    },
};

employee.work();
employee.bePaid("january");
employee.augmentation();

let greetings = {
    0: 'Hi',
    1: 'Hello',
    length: 2,
    append(message) {
        [].push.call(this, message);
    },
    Append(message) {
        [].push.apply(this, [message]);
    }
};

greetings.append('Howdy');
greetings.append('Bonjour');

greetings.Append('Hello');
greetings.Append('World');

console.log(greetings);





/* 
// iterate through the array
for (i = 0; i < emp.length; i++) {
    console.log(emp[i]);
}
*/