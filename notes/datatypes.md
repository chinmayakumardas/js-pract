# JavaScript Data Types

JS data types:

1. **Primitive** – 7 types
2. **Non-Primitive / Reference**

## Primitive

* **Number** → `10`, `10.5`
* **BigInt** → large integers, add `n`: `123456789n`
* **String** → text: `"Hello"`
* **Boolean** → `true` / `false`
* **Undefined** → declared, no value: `let x;`
* **Null** → intentional empty value: `let x = null`
* **Symbol** → unique value: `Symbol("id")`

```js
console.log(typeof 10);              // number
console.log(typeof 10n);             // bigint
console.log(typeof "Hello");         // string
console.log(typeof true);            // boolean
console.log(typeof undefined);       // undefined
console.log(typeof null);            // object ⚠️ historical behavior
console.log(typeof Symbol("id"));    // symbol
```

## Non-Primitive / Reference

* **Object** → key-value data
* **Array** → ordered collection
* **Function** → reusable code
* **Date** → date/time
* **RegExp** → pattern matching
* **Set** → unique values
* **Map** → key-value collection

```js
let obj = { name: "Chinmaya", age: 26 };
let arr = [1, "Hello", true];
let set = new Set([1, 2, 2, 3]);
let map = new Map([["name", "Chinmaya"]]);

console.log(typeof obj);  // object
console.log(typeof arr);  // object
console.log(typeof set);  // object
console.log(typeof map);  // object
```

### Function

```js
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));       // 30
console.log(typeof add);        // function
```

### Date

```js
let today = new Date();
console.log(today);
```

### RegExp

```js
let pattern = /javascript/i;
console.log(pattern.test("I love JavaScript")); // true
```

## Primitive vs Reference

**Primitive → copied by value**

```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20
```

**Reference → points to same object**

```js
let p1 = { name: "Chinmaya" };
let p2 = p1;

p2.name = "Kumar";

console.log(p1.name); // Kumar
console.log(p2.name); // Kumar
```

## Quick Revision

| Type      | Example        | `typeof`      |
| --------- | -------------- | ------------- |
| Number    | `10`           | `"number"`    |
| BigInt    | `10n`          | `"bigint"`    |
| String    | `"Hi"`         | `"string"`    |
| Boolean   | `true`         | `"boolean"`   |
| Undefined | `undefined`    | `"undefined"` |
| Null      | `null`         | `"object"` ⚠️ |
| Symbol    | `Symbol()`     | `"symbol"`    |
| Object    | `{}`           | `"object"`    |
| Array     | `[]`           | `"object"`    |
| Function  | `function(){}` | `"function"`  |

**Remember:** `null` is primitive, but `typeof null === "object"`. Arrays are objects. Functions have special `typeof` result `"function"`.
