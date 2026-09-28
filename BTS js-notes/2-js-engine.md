# JavaScript Engines

A **JavaScript engine** is a program that **reads, compiles, and executes JavaScript code**.

## Major JavaScript Engines

| Engine                   | Used By                     |
| ------------------------ | --------------------------- |
| **V8**                   | Chrome, Node.js, Edge, Deno |
| **SpiderMonkey**         | Firefox                     |
| **JavaScriptCore (JSC)** | Safari                      |
| **Chakra**               | Older Microsoft Edge        |

## V8

**V8** is Google's JavaScript engine.

Used in:

```text
Chrome
Node.js
Edge
Deno
```

V8 is written mainly in **C++**.

## SpiderMonkey

**SpiderMonkey** is Mozilla's JavaScript engine.

Used by:

```text
Firefox
```

It was the **first JavaScript engine**, originally created for Netscape.

## JavaScriptCore

**JavaScriptCore (JSC)** is Apple's JavaScript engine.

Used by:

```text
Safari
WebKit
```

It is also commonly called **SquirrelFish** in its historical engine implementation.

## Simple Comparison

```text
Chrome / Node.js  → V8
Firefox           → SpiderMonkey
Safari            → JavaScriptCore
```

## What Does an Engine Do?

```text
JavaScript Code
      ↓
    Parse
      ↓
Compile / Interpret
      ↓
Optimize
      ↓
Execute
```

The exact implementation differs between engines, but the goal is the same:

**Convert JavaScript code into instructions the computer can execute.**
