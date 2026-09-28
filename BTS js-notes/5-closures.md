# JavaScript Closures

## What Is a Closure?

A **closure** happens when a function remembers and can access variables from its **outer lexical scope**, even after the outer function has finished executing.

```js
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

## How It Works

```text
outer() starts
    ↓
count = 0
    ↓
inner() is created
    ↓
inner is returned
    ↓
outer() finishes
    ↓
counter still remembers count
```

The closure keeps access to the required outer variables.

## Data Privacy

Closures can hide data from outside code.

```js
function createAccount() {
    let balance = 0;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createAccount();

account.deposit(100);
console.log(account.getBalance()); // 100
```

`balance` cannot be directly accessed from outside.

## Function Factory

A function can create customized functions.

```js
function multiplyBy(x) {
    return function (num) {
        return num * x;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

double(5); // 10
triple(5); // 15
```

## Counter

Closures are useful for counters.

```js
function counter() {
    let count = 0;

    return () => ++count;
}

const count = counter();

count(); // 1
count(); // 2
count(); // 3
```

## Currying

Converting a function with multiple arguments into nested functions.

```js
function add(a) {
    return function (b) {
        return a + b;
    };
}

add(10)(20); // 30
```

Arrow version:

```js
const add = a => b => a + b;
```

## Closure + Loop

Classic problem:

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

Output:

```text
3
3
3
```

Why?

`var` is function-scoped, so all callbacks share the same `i`.

### `let` Fix

```js
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```

Output:

```text
0
1
2
```

`let` creates a new block-scoped binding for each loop iteration.

## Common Interview Questions

### Q: What is a closure?

A function together with access to its outer lexical environment.

### Q: Why does the closure keep variables alive?

Because the returned/inner function still references those variables.

### Q: Where are closures useful?

```text
Data privacy
Counters
Function factories
Callbacks
Currying
State management
```

## Quick Revision

```text
Closure
→ function + remembered outer lexical environment

Useful for:
→ private data
→ counters
→ function factories
→ currying

var + loop
→ shared variable

let + loop
→ separate binding per iteration
```
