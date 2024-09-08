const myArr = [
    [1, 2],
    [3, 4],
    [5, 6]
];
const newArr = myArr.flat();

console.log(newArr);

console.log("------------------------------------");

const Arr = [1, 2, [3, [4, 5, 6], 7], 8];
const newarr = Arr.flat(2);

console.log(newarr);