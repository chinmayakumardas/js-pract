let x=20;

x=40
// let x=45; error
console.log(x);


var a=30;
var a;
var a=45
var a=30
var a=100000000000
console.log(a);


const y="const"
// y=4  error
console.log(y);


//valid conventions

// CamelCase: first word starts lowercase, next words start with capital letters
let firstName = "John";

// Underscore (_) is allowed in variable names
let first_name = "John";

// Number cannot be the first character
let 1name = "John"; // ❌ Invalid

// Number can be used after the first character
let name1 = "John"; // ✅ Valid

// Spaces are NOT allowed in variable names
let first name = "John"; // ❌ Invalid

// Capital letters are allowed
let Name = "John"; // ✅ Valid

// Lower camelCase is the common JavaScript convention
let studentAge = 20; // ✅ Recommended

// Hyphen (-) is NOT allowed in variable names
let student-age = 20; // ❌ Invalid

// Dollar sign ($) is allowed
let $price = 100; // ✅ Valid

// Underscore (_) can be used at the beginning
let _name = "John"; // ✅ Valid

// Variable names cannot be JavaScript reserved words
let class = "A"; // ❌ Invalid