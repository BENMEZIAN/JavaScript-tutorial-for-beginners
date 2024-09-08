const ages = [32, 33, 20, 40];
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", "Tomato", "pepper"];
const names = ["Sonoo", "Vimal", "Ratan", "Vrushali", "Deeplai", "Rajesh", "Kumar", "Sharma", "Jacob", "Fred"];

function checkAge(age) {
    return age > 18;
}

function isFruit(fruit) {
    if (fruit === "Tomato" || fruit === "pepper") {
        return false;
    }

    return true;
}

function isHindiName(name) {
    if (name === "Jacob" || name === "Fred") {
        return false;
    }

    return true;
}

var x = ages.every((age) => checkAge(age));
console.log(x); // Output: true

var y = fruits.every((fruit) => isFruit(fruit));
console.log(y); // Output: false

var z = names.every((name) => isHindiName(name));
console.log(z); // Output: false


let a = 0;
let array = [1, 2, 3, 4, 5, 6];

const under_five = a => a < 5;

if (array.every(under_five)) {
    console.log('All are less than 5');
} else {
    console.log('At least one element is not less than 5');
}

const survey = [
    { name: "Steve", answer: "No" },
    { name: "Jessica", answer: "No" },
    { name: "Peter", answer: "No" },
    { name: "Elaine", answer: "No" }
];

function isSameAnswer(el, index, arr) {
    if (index === 0) {
        return true;
    } else {
        return (el.answer === arr[index - 1].answer);
    }
}

let result = survey.every(isSameAnswer);

console.log(result);