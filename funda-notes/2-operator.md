# JavaScript Operators

Operators are symbols used to perform operations on values.

## 1. Arithmetic

```js
+   // addition
-   // subtraction
*   // multiplication
/   // division
%   // remainder
**  // power
++  // increment
--  // decrement
```

```js
let a = 10, b = 3;

a + b  // 13
a - b  // 7
a * b  // 30
a / b  // 3.33
a % b  // 1
a ** b // 1000
```

## 2. Assignment

```js
=    // assign
+=   // add & assign
-=   // subtract & assign
*=   // multiply & assign
/=   // divide & assign
%=   // remainder & assign
**=  // power & assign
```

```js
let x = 10;
x += 5; // 15
x -= 2; // 13
```

## 3. Comparison

Returns `true` or `false`.

```js
==   // equal value
===  // equal value + type
!=   // not equal value
!==  // not equal value + type
>    // greater
<    // smaller
>=   // greater/equal
<=   // smaller/equal
```

```js
5 == "5"   // true
5 === "5"  // false
5 != "5"   // false
5 !== "5"  // true
```

**Prefer `===` and `!==`** in most code.

## 4. Logical

```js
&&  // AND
||  // OR
!   // NOT
```

```js
true && true   // true
true && false  // false

true || false  // true
false || false // false

!true          // false
!false         // true
```

## 5. Unary

Works with one value.

```js
++x  // increment
--x  // decrement
+x   // convert to number
-x   // negative
!x   // NOT
typeof x // type
```

## 6. Ternary

Short form of `if...else`.

```js
condition ? valueIfTrue : valueIfFalse
```

```js
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Adult
```

## 7. String Operator

```js
+   // concatenate strings
+=  // append
```

```js
let first = "Hello";
let name = "Chinmaya";

console.log(first + " " + name);
// Hello Chinmaya
```

## 8. Nullish Coalescing

```js
?? // uses right value only if left is null/undefined
```

```js
let name = null;
console.log(name ?? "Guest"); // Guest
```

## 9. Optional Chaining

```js
?. // safely access property
```

```js
let user = {};
console.log(user.address?.city); // undefined
```

## Quick Revision

| Operator                  | Meaning             |
| ------------------------- | ------------------- |
| `+ - * / % **`            | Arithmetic          |
| `= += -= *= /=`           | Assignment          |
| `== === != !== > < >= <=` | Comparison          |
| `&& \|\| !`               | Logical             |
| `++ --`                   | Increment/Decrement |
| `?:`                      | Ternary             |
| `typeof`                  | Check type          |
| `??`                      | Nullish coalescing  |
| `?.`                      | Optional chaining   |

**Remember:** `===` checks **value + type**.
