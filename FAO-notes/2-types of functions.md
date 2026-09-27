# JavaScript Functions — Types & Concepts

## Functions Are First-Class Citizens

Functions can be:

* stored in variables
* passed as arguments
* returned from functions

```js
const greet = () => "Hello";

function run(fn) {
    console.log(fn());
}

run(greet);
```

## Returning a Function

A function can return another function.

```js
function outer() {
    return function () {
        console.log("Hello");
    };
}

const fn = outer();
fn();
```

## IIFE

**Immediately Invoked Function Expression**

Runs immediately after creation.

```js
(function () {
    console.log("Hello");
})();
```

Arrow version:

```js
(() => {
    console.log("Hello");
})();
```

Useful for creating a private scope.

## Callback Function

A function passed to another function.

```js
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

greet("John", () => {
    console.log("Welcome!");
});
```

## Higher-Order Function

A function that **takes a function** or **returns a function**.

```js
function calculate(a, b, operation) {
    return operation(a, b);
}

calculate(10, 5, (a, b) => a + b);
// 15
```

Common examples:

```js
map()
filter()
reduce()
forEach()
```

These use callback functions.

## Pure Function

Same input → always same output.

No outside data changes.

```js
function add(a, b) {
    return a + b;
}
```

```text
add(2, 3) → 5
add(2, 3) → 5
```

## Impure Function

Depends on or changes something outside the function.

```js
let count = 0;

function increase() {
    count++;
}
```

`count` is outside the function and gets changed.

## Recursion

A function calling itself.

```js
function countDown(n) {
    if (n <= 0) return;

    console.log(n);
    countDown(n - 1);
}

countDown(3);
```

Output:

```text
3
2
1
```

### Recursion Needs

```text
Base case → stops recursion
Recursive case → calls itself
```

Example:

```js
function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
}

factorial(5); // 120
```

## Quick Revision

```text
First-class function → function can be stored/passed/returned

IIFE → runs immediately

Callback → function passed to another function

Higher-order → takes or returns a function

Pure → same input = same output

Impure → depends on/changes outside data

Recursion → function calls itself
```
