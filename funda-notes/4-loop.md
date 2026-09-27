# JavaScript Loops

Loops are used to **repeat code**.

## 1. `for`

Use when you know how many times to loop.

```js
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 0 1 2 3 4
```

**Syntax:**

```js
for (initialization; condition; update) {
    // code
}
```

## 2. `while`

Runs while the condition is `true`.

```js
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

## 3. `do...while`

Runs **at least once**, then checks the condition.

```js
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

## 4. `for...of`

Loops through **values** of arrays, strings, etc.

```js
let fruits = ["Apple", "Mango", "Banana"];

for (let fruit of fruits) {
    console.log(fruit);
}
```

## 5. `for...in`

Loops through **keys/properties** of an object.

```js
let user = {
    name: "Chinmaya",
    age: 26
};

for (let key in user) {
    console.log(key, user[key]);
}
```

## 6. `break`

**Stops the loop completely.**

```js
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// 0 1 2
```

## 7. `continue`

**Skips the current iteration** and continues the loop.

```js
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
// 0 1 3 4
```

## Quick Revision

| Syntax       | Meaning                     |
| ------------ | --------------------------- |
| `for`        | Known number of iterations  |
| `while`      | Run while condition is true |
| `do...while` | Run at least once           |
| `for...of`   | Loop through values         |
| `for...in`   | Loop through keys           |
| `break`      | Stop loop                   |
| `continue`   | Skip current iteration      |

**Remember:** `for...of` → **values** | `for...in` → **keys**
