# JavaScript Math

`Math` provides methods for common mathematical operations.

## Common Methods

```js
Math.round(4.6);      // 5  → nearest integer
Math.floor(4.9);      // 4  → down
Math.ceil(4.1);       // 5  → up
Math.trunc(4.9);      // 4  → removes decimal

Math.abs(-10);        // 10 → positive value

Math.max(10, 20, 5);  // 20 → largest
Math.min(10, 20, 5);  // 5  → smallest

Math.pow(2, 3);       // 8  → 2³
Math.sqrt(25);        // 5  → square root

Math.random();        // 0 to < 1 → random number
```

## Constants

```js
Math.PI;  // 3.14159...
Math.E;   // 2.71828...
```

## Random Number

```js
let random = Math.floor(Math.random() * 10) + 1;

console.log(random);
// 1 to 10
```

## Quick Revision

```text
round()  → nearest
floor()  → down
ceil()   → up
trunc()  → remove decimal
abs()    → positive
max()    → largest
min()    → smallest
pow()    → power
sqrt()   → square root
random() → random number
PI       → π
E        → Euler's number
```
