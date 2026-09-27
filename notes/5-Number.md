# JavaScript Number Basics

JavaScript uses `Number` for integers and decimals.

```js
let a = 10;
let b = 10.5;
```

## Basic Operations

```js
10 + 5  // 15
10 - 5  // 5
10 * 5  // 50
10 / 5  // 2
10 % 3  // 1
10 ** 2 // 100
```

## Useful Number Methods

```js
let num = 10.567;

num.toFixed(2);    // "10.57"
num.toString();   // "10.567"
```

> `toFixed()` returns a **string**.

## Convert to Number

```js
Number("10");      // 10
Number("10.5");    // 10.5
Number("Hello");   // NaN
```

## `parseInt()` / `parseFloat()`

```js
parseInt("10.5");   // 10
parseFloat("10.5"); // 10.5
```

* `parseInt()` → integer
* `parseFloat()` → decimal

## Special Values

```js
NaN        // Not a Number
Infinity   // positive infinity
-Infinity  // negative infinity
```

```js
Number.isNaN(NaN);       // true
Number.isFinite(10);    // true
Number.isInteger(10);   // true
Number.isInteger(10.5); // false
```

## Math Basics

```js
Math.round(4.6); // 5
Math.floor(4.9); // 4
Math.ceil(4.1);  // 5
Math.abs(-10);   // 10
Math.max(10, 20, 5); // 20
Math.min(10, 20, 5); // 5
Math.random();   // 0 to < 1
```

## Quick Revision

```text
+ - * / % **     → operations
toFixed()        → decimal places
Number()         → convert to number
parseInt()       → integer
parseFloat()     → decimal
NaN              → Not a Number
Math.round()     → nearest integer
Math.floor()     → down
Math.ceil()      → up
Math.random()    → random number
```
