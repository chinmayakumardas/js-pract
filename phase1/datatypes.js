// 1. String → text
let string = "this is string";
console.log(string);
// Output: this is string


// 2. Number → integer or decimal number
let number = 10;
console.log(number);
// Output: 10


// 3. BigInt → very large integer
let bigint = 1555551111115n;
console.log(bigint);
// Output: 1555551111115n


// 4. Undefined → declared but no value
let x;
console.log(x);
// Output: undefined


// 5. Empty String → still a String
let a = "";
console.log(a);
// Output: ""


// 6. Boolean → true or false
let boolean = true;
console.log(boolean);
// Output: true


// 7. Symbol → unique value
let symbol = Symbol();
console.log(symbol);
// Output: Symbol()

// 8. Null → intentionally means "no value"
let value = null;

console.log(value);
// Output: null

console.log(typeof value);
// Output: object ⚠️

















// Empty string → a String with zero characters
let ab = "";

console.log(ab);
console.log(typeof ab);

// Output:
// 
// string

// null → intentionally no value
let b = null;

console.log(b);
console.log(typeof b);

// Output:
// null
// object ⚠️


// 1. Object → stores data as key-value pairs
let person = {
    name: "John",
    age: 25
};

console.log(person);
// Output: { name: 'John', age: 25 }


// 2. Array → stores a collection of values
let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);
// Output: [ 'Apple', 'Banana', 'Mango' ]


// 3. Function → reusable block of code
let greet = function () {
    return "Hello!";
};

console.log(greet());
// Output: Hello!


// 4. Date → represents date and time
let today = new Date();

console.log(today);
// Output: current date and time


// 5. Map → stores key-value pairs
let users = new Map();

users.set("name", "John");
users.set("age", 25);

console.log(users);
// Output: Map(2) { 'name' => 'John', 'age' => 25 }


// 6. Set → stores unique values
let numbers = new Set([10, 20, 20, 30]);

console.log(numbers);
// Output: Set(3) { 10, 20, 30 }


// 7. Other built-in objects → JavaScript provides many more
let regex = /hello/;

console.log(regex);
// Output: /hello/