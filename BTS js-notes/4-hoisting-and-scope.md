# Hoisting & Scope

## Hoisting

**Hoisting** means declarations are processed before the code executes.

> JavaScript does NOT literally move your code to the top.

## `var` Hoisting

`var` is hoisted and initialized with `undefined`.

```js
console.log(x); // undefined

var x = 10;
```

Simplified:

```js
var x;
console.log(x);
x = 10;
```

## `let` and `const`

`let` and `const` are also hoisted, but they are **not initialized** before execution reaches their declaration.

They are in the **Temporal Dead Zone (TDZ)**.

```js
console.log(x); // ReferenceError

let x = 10;
```

```js
console.log(y); // ReferenceError

const y = 20;
```

### TDZ

The TDZ is the period between entering the scope and the variable's initialization.

```text
Scope starts
    ↓
   TDZ
    ↓
let/const declaration
    ↓
Initialized
```

## Function Declaration Hoisting

Function declarations can be called before their declaration.

```js
greet();

function greet() {
    console.log("Hello");
}
```

## Function Expression

Function expressions follow variable hoisting rules.

```js
greet(); // TypeError

var greet = function () {
    console.log("Hello");
};
```

With `let`/`const`:

```js
greet(); // ReferenceError

const greet = function () {};
```

## Scope

**Scope** determines where a variable can be accessed.

### Global Scope

Accessible throughout the program.

```js
const name = "John";

function greet() {
    console.log(name);
}
```

### Function Scope

`var` is function-scoped.

```js
function test() {
    var x = 10;
}

console.log(x); // ReferenceError
```

### Block Scope

`let` and `const` are block-scoped.

```js
if (true) {
    let x = 10;
    const y = 20;
}

console.log(x); // ReferenceError
```

## Lexical Scope

**Lexical** means scope is determined by **where code is written**, not where a function is called.

```js
const x = 10;

function outer() {
    const y = 20;

    function inner() {
        console.log(x);
        console.log(y);
    }

    inner();
}
```

`inner()` can access variables from where it was **defined**.

## Scope Chain

When JavaScript needs a variable, it searches:

```text
Current Scope
     ↓
Outer Scope
     ↓
Global Scope
```

Example:

```js
const a = 10;

function outer() {
    const b = 20;

    function inner() {
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    inner();
}
```

`inner()` searches its own scope first, then outer scopes.

## Quick Revision

```text
var        → function scoped
let/const  → block scoped

var        → hoisted + undefined
let/const  → hoisted + TDZ

Function declaration → fully hoisted
Function expression  → variable hoisting rules

Lexical scope → based on where code is written
Scope chain   → current → outer → global
```
