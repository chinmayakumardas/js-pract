# JavaScript Functions — Basics

A **function** is a reusable block of code.

## Function Declaration

```js
function greet() {
    console.log("Hello");
}

greet();
```

## Function Expression

Function stored in a variable.

```js
const greet = function () {
    console.log("Hello");
};

greet();
```

### Declaration vs Expression

```text
Declaration → function greet() {}
Expression  → const greet = function() {}
```

## Anonymous Function

A function without a name.

```js
const greet = function () {
    console.log("Hello");
};
```

## Arrow Function

Shorter function syntax.

```js
const greet = () => {
    console.log("Hello");
};
```

### Arrow Syntax

```js
const add = (a, b) => {
    return a + b;
};
```

### One Parameter

Parentheses can be removed.

```js
const square = x => {
    return x * x;
};
```

### Implicit Return

For one expression, `{}` and `return` can be removed.

```js
const add = (a, b) => a + b;

const square = x => x * x;
```

## Parameters vs Arguments

**Parameters** → variables in function definition.

**Arguments** → actual values passed to function.

```js
function add(a, b) { // a,b = parameters
    return a + b;
}

add(10, 20); // 10,20 = arguments
```

## Default Parameters

Used when no argument is provided.

```js
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();       // Hello Guest
greet("John"); // Hello John
```

## Rest Parameters `...args`

Collects multiple arguments into an array.

```js
function sum(...args) {
    return args;
}

sum(1, 2, 3);
// [1, 2, 3]
```

Example:

```js
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6
```

## Return Value

`return` sends a value back.

```js
function add(a, b) {
    return a + b;
}

const result = add(2, 3);
console.log(result); // 5
```

## Single Return

```js
function square(x) {
    return x * x;
}
```

## Early Return

Stops the function early.

```js
function checkAge(age) {
    if (age < 18) {
        return "Not allowed";
    }

    return "Allowed";
}
```

## Quick Revision

```text
function declaration → named function
function expression  → function stored in variable
anonymous function   → no name
arrow function       → shorter syntax

parameters → function inputs
arguments  → values passed

default parameter → fallback value
rest parameter    → collects arguments

return → sends value back
early return → stops function
```
