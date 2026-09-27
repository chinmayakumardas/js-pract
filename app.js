let obj = { name: "Chinmaya", age: 26 };
let arr = [1, "Hello", true];
let set = new Set([1, 2, 2, 3]);
let map = new Map([["name", "Chinmaya"]]);

console.log(typeof obj);  // object
console.log(typeof arr);  // object
console.log(typeof set);  // object
console.log(typeof map);  // object

console.log(set);

let pattern = /javascript/i;
console.log(pattern.test("I love JavaScript")); // true