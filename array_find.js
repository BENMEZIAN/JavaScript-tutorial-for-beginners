const ages = [3, 10, 18, 20];

function checkAge(age) {
    return age > 18;
}

var age = ages.find(checkAge);

console.log("The first value satisfies the condition is:" + age);

const names = ["Sonoo", "Vimal", "Ratan", "Vrushali", "Deeplai", "Rajesh", "Kumar", "Sharma", "Jacob", "Fred"];

function isHindiName(name) {
    if (name === "Jacob" || name === "Fred") {
        return false;
    }

    return true;
}

var Hindiname = names.find(isHindiName);

console.log("The first value satisfies the condition is:" + Hindiname);