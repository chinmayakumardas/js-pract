# Execution Context & Call Stack

## Execution Context

An **Execution Context** is the environment in which JavaScript code is evaluated and executed.

It contains information needed to run the code, such as variables, functions, and `this`.

## Types

```text
Global Execution Context (GEC)
        ↓
Function Execution Context (FEC)
```

### Global Execution Context

Created when JavaScript starts running.

```js
let name = "John";

console.log(name);
```

The global code runs inside the **GEC**.

### Function Execution Context

Created every time a function is called.

```js
function greet() {
    let message = "Hello";
    console.log(message);
}

greet();
```

Calling `greet()` creates a new **FEC**.

## Two Phases

Every execution context can be understood in two phases.

### 1. Creation Phase

Memory is prepared for variables and functions.

```text
Variables → memory
Functions → memory
this       → determined
```

### 2. Execution Phase

JavaScript executes the code line by line.

```text
Creation Phase
      ↓
Execution Phase
```

## Call Stack

The **Call Stack** keeps track of function execution.

```js
function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();
```

Stack:

```text
three()
two()
one()
global()
```

Functions are removed when they finish.

```text
LIFO = Last In, First Out
```

## Stack Overflow

Happens when the call stack becomes too large.

Most commonly caused by infinite recursion.

```js
function hello() {
    hello();
}

hello();
```

`hello()` keeps calling itself → stack overflow.

## Quick Revision

```text
Execution Context → environment for running code

GEC → global code
FEC → function code

Creation Phase → prepare memory
Execution Phase → execute code

Call Stack → tracks function calls
LIFO → last in, first out

Stack Overflow → call stack becomes too large
```
