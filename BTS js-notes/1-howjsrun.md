# How JavaScript Works Under the Hood

**Goal:** Understand what happens when JavaScript runs your code.

## JavaScript Engine

JavaScript runs inside a **JavaScript engine**.

Examples:

```text
Chrome / Edge → V8
Firefox        → SpiderMonkey
Safari         → JavaScriptCore
```

The engine reads, compiles, and executes JavaScript code.

## Single-Threaded

JavaScript is mainly **single-threaded**.

It has one main thread that executes JavaScript code **one task at a time**.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

## Synchronous

Normally, JavaScript executes code **synchronously** — one line finishes before the next starts.

```js
console.log("Start");

let x = 10 + 20;

console.log(x);

console.log("End");
```

```text
Start
30
End
```

## Interpreted vs JIT

JavaScript was traditionally described as an **interpreted language**, but modern engines use **JIT (Just-In-Time) compilation**.

Simplified process:

```text
JavaScript Code
      ↓
   Parser
      ↓
   Bytecode
      ↓
 JIT Compiler
      ↓
Optimized Machine Code
      ↓
   Execution
```

### JIT

**JIT = Just-In-Time**

The engine compiles code while the program is running and can optimize frequently executed code.

## JavaScript Runtime

The runtime includes more than the JavaScript engine.

```text
JavaScript Runtime
│
├── JavaScript Engine
│   ├── Call Stack
│   ├── Heap
│   └── Garbage Collector
│
├── Web APIs / Host APIs
│
└── Event Loop
```

## Call Stack

The **Call Stack** keeps track of currently executing functions.

```js
function one() {
    two();
}

function two() {
    console.log("Hello");
}

one();
```

Simplified:

```text
one()
 ↓
two()
 ↓
console.log()
```

Functions are added to the stack and removed when finished.

## Heap

The **Heap** is memory used to store objects and other dynamically allocated data.

```js
const user = {
    name: "John",
    age: 25
};
```

The object is stored in memory managed by the engine.

## Garbage Collection

JavaScript automatically removes memory that is no longer reachable.

```js
let user = {
    name: "John"
};

user = null;
```

The old object can eventually be cleaned up by the **garbage collector**.

## Quick Revision

```text
JavaScript engine → runs JavaScript

Single-threaded → one main execution thread

Synchronous → one task at a time

JIT → compiles/optimizes code while running

Call Stack → tracks function execution

Heap → stores objects/data in memory

Garbage Collector → cleans unused memory

Runtime → engine + APIs + event loop
```
