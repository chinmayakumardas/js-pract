# Errors Will Happen!

Errors happen when JavaScript cannot execute code correctly.

## Common Errors

### 1. SyntaxError

Wrong JavaScript syntax.

```js id="8p0d6z"
let x = ; // SyntaxError
```

### 2. ReferenceError

Using a variable that doesn't exist.

```js id="3v0xgk"
console.log(name); // ReferenceError
```

### 3. TypeError

Doing an operation on the wrong type.

```js id="j9r1kh"
let num = 10;
num.toUpperCase(); // TypeError
```

### 4. RangeError

Value is outside the allowed range.

```js id="y8f6zq"
let num = 10;
num.toFixed(200); // RangeError
```

## `try...catch`

Used to **handle errors** without stopping the whole program.

```js id="9k2vpa"
try {
    let result = x + 10;
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}
```

* `try` → code that may cause an error
* `catch` → handles the error

## `finally`

Runs **whether an error happens or not**.

```js id="q6x3nt"
try {
    console.log("Try");
} catch (error) {
    console.log("Error");
} finally {
    console.log("Always runs");
}
```

## `throw`

Used to create your own error.

```js id="v4w8ma"
let age = 15;

if (age < 18) {
    throw new Error("Must be 18 or older");
}
```

## Quick Revision

```text
SyntaxError    → wrong syntax
ReferenceError → variable doesn't exist
TypeError      → wrong type/operation
RangeError     → value out of range

try            → risky code
catch          → handle error
finally        → always runs
throw          → create error
```
