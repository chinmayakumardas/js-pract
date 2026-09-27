# JavaScript Conditionals

Used to run different code based on a condition.

## 1. `if`

Runs code **if condition is true**.

```js
let age = 20;

if (age >= 18) {
    console.log("Adult");
}
```

## 2. `else if`

Checks another condition if the previous `if` is false.

```js
let age = 15;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
}
```

## 3. `else`

Runs when **all previous conditions are false**.

```js
let age = 10;

if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teenager");
} else {
    console.log("Child");
}
```

### Structure

```js
if (condition) {
    // code
} else if (condition) {
    // code
} else {
    // code
}
```

## 4. `switch`

Used when checking **one value against multiple cases**.

```js
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
```

### `break`

Stops the `switch` after a matching case.

Without `break`, the next cases may also execute.

### `default`

Runs when **no case matches**.

## Quick Revision

```text
if        → first condition
else if   → another condition
else      → nothing above was true
switch    → compare one value with many cases
case      → possible match
break     → stop switch
default   → no case matched
```

**Rule:** Use `if/else` for conditions/ranges; use `switch` when comparing one value with specific values.
