// Create object

/* By object literal 
Syntax: object={property1:value1,property2:value2.....propertyN:valueN} */

const emp = { id: 102, name: "Shyam Kumar", salary: 40000 };

console.log("id =", emp.id);
console.log("name =", emp.name);
console.log("salary =", emp.salary);

// By using an Object constructor
function employee(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

const e1 = new employee(103, "Vimal Jaiswal", 30000);
const e2 = new employee(104, "Deepali Agarwal", 40000);

console.log("Employee 1:");
console.log("id =", e1.id);
console.log("name =", e1.name);
console.log("salary =", e1.salary);

console.log("Employee 2:");
console.log("id =", e2.id);
console.log("name =", e2.name);
console.log("salary =", e2.salary);