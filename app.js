// ==========================================
// JavaScript Data Types
// ==========================================

// JavaScript data types are divided into:
//
// 1. Primitive Data Types
// 2. Non-Primitive / Reference Data Types


// ==========================================
// PRIMITIVE DATA TYPES
// ==========================================
//
// Primitive data types:
//
// 1. Number
// 2. BigInt
// 3. String
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol


// ==========================================
// 1. Number
// ==========================================

// Number represents numeric values.

let num = 10;
let decimal = 10.5;

console.log(num);
console.log(decimal);
console.log(typeof num); // number


// ==========================================
// 2. BigInt
// ==========================================

// BigInt is used for very large integers.
// Add "n" at the end of the number.

let bigint = 4545689465454n;

console.log(bigint);
console.log(typeof bigint); // bigint


// ==========================================
// 3. String
// ==========================================

// String is used to store text.

let string = "this is string";

console.log(string);
console.log(typeof string); // string


// ==========================================
// 4. Boolean
// ==========================================

// Boolean has only two values:
// true or false

let boolean = true;

console.log(boolean);
console.log(typeof boolean); // boolean


// ==========================================
// 5. Undefined
// ==========================================

// A variable is undefined when it is declared
// but no value is assigned to it.

let Undefined;

console.log(Undefined);
console.log(typeof Undefined); // undefined


// ==========================================
// 6. Null
// ==========================================

// Null represents an intentional absence of value.

let Null = null;

console.log(Null);
console.log(typeof Null); // object

// NOTE:
// typeof null returns "object".
// This is a historical JavaScript behavior.


// ==========================================
// 7. Symbol
// ==========================================

// Symbol creates a unique value/identifier.

let symbol = Symbol("chinmaya symbol");

console.log(symbol);
console.log(typeof symbol); // symbol


// ==========================================
// PRINT ALL PRIMITIVE DATA TYPES
// ==========================================

console.log("\nPrimitive Data Types:");

console.log(string);
console.log(num);
console.log(boolean);
console.log(bigint);
console.log(Undefined);
console.log(Null);
console.log(symbol);


// ==========================================
// NON-PRIMITIVE / REFERENCE DATA TYPES
// ==========================================
//
// Common examples:
//
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. RegExp
// 6. Set
// 7. Map
//
// NOTE:
// Arrays and functions are objects in JavaScript,
// although they have special behavior.


// ==========================================
// 1. Object
// ==========================================

// Object stores data in key-value pairs.

let object = {
    name: "Chinmaya Kumar Das",
    age: 26,
    salary: "20 LPA"
};

console.log(object);
console.log(typeof object); // object


// Access object properties

console.log(object.name);
console.log(object.age);
console.log(object.salary);


// ==========================================
// 2. Array
// ==========================================

// Array stores multiple values
// in an ordered collection.

let array = [1, 12, "chinmaya", "", true];

console.log(array);
console.log(typeof array); // object

console.log(array[0]); // 1
console.log(array[2]); // chinmaya


// ==========================================
// 3. Function
// ==========================================

// Function is a reusable block of code.

function greet() {
    console.log("Hello Chinmaya");
}

greet();

console.log(typeof greet); // function


// Function with parameters

function add(a, b) {
    return a + b;
}

console.log(add(10, 20)); // 30


// ==========================================
// 4. Date
// ==========================================

// Date is used to work with date and time.

let today = new Date();

console.log(today);
console.log(typeof today); // object


// ==========================================
// 5. RegExp
// ==========================================

// RegExp (Regular Expression) is used
// for pattern matching.

let pattern = /javascript/i;

console.log(pattern);
console.log(typeof pattern); // object


// Test a string using RegExp

console.log(pattern.test("I love JavaScript"));
// true


// ==========================================
// 6. Set
// ==========================================

// Set stores unique values.
// Duplicate values are automatically removed.

let numbers = new Set([1, 2, 3, 3, 4, 4]);

console.log(numbers);
console.log(typeof numbers); // object

console.log(numbers.size); // 4


// ==========================================
// 7. Map
// ==========================================

// Map stores data in key-value pairs.

let user = new Map();

user.set("name", "Chinmaya");
user.set("age", 26);

console.log(user);
console.log(typeof user); // object

console.log(user.get("name")); // Chinmaya
console.log(user.get("age"));  // 26


// ==========================================
// PRIMITIVE VS NON-PRIMITIVE
// ==========================================

console.log("\nPrimitive vs Non-Primitive");


// ==========================================
// Primitive Example
// ==========================================

// Primitive values are copied by value.

let a = 10;

let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Changing b does not change a.


// ==========================================
// Non-Primitive Example
// ==========================================

// Objects are reference values.

let person1 = {
    name: "Chinmaya"
};

let person2 = person1;

person2.name = "Kumar";

console.log(person1.name); // Kumar
console.log(person2.name); // Kumar

// Both person1 and person2 refer to
// the same object in memory.


// ==========================================
// QUICK REVISION
// ==========================================

// Primitive Data Types:
//
// Number
// BigInt
// String
// Boolean
// Undefined
// Null
// Symbol


// Non-Primitive / Reference Data Types:
//
// Object
// Array
// Function
// Date
// RegExp
// Set
// Map


// ==========================================
// typeof QUICK REVISION
// ==========================================

console.log(typeof 10);
// "number"

console.log(typeof 10n);
// "bigint"

console.log(typeof "Hello");
// "string"

console.log(typeof true);
// "boolean"

console.log(typeof undefined);
// "undefined"

console.log(typeof null);
// "object"

console.log(typeof Symbol("id"));
// "symbol"

console.log(typeof {});
// "object"

console.log(typeof []);
// "object"

console.log(typeof function () {});
// "function"


// ==========================================
// IMPORTANT POINTS
// ==========================================

// 1. JavaScript has 7 primitive data types.
//
// 2. Object, Array, Function, Date, RegExp,
//    Set and Map are commonly used reference types.
//
// 3. Primitive values are copied by value.
//
// 4. Objects and arrays are reference values.
//
// 5. typeof null gives "object" because of
//    a historical behavior in JavaScript.
//
// 6. typeof [] gives "object".
//
// 7. typeof function gives "function".
//
// 8. Arrays can contain different data types.
//
// Example:

let mixedArray = [
    10,
    "Hello",
    true,
    null,
    undefined,
    { name: "Chinmaya" }
];

console.log(mixedArray);


// ==========================================
// END OF NOTES
// ==========================================