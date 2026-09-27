# JavaScript Arrays

An **Array** stores multiple values in one variable.

```js
const fruits = ["Apple", "Banana", "Mango"];
```

## Create Arrays

```js
const a = [1, 2, 3];
const b = new Array(1, 2, 3);

Array.isArray(a); // true
Array.of(1, 2, 3); // [1, 2, 3]
Array.from("ABC"); // ["A", "B", "C"]
```

> `[]` is preferred over `new Array()` in most cases.

## Basic Methods

| Method         | Use                        |
| -------------- | -------------------------- |
| `length`       | Get/set array length       |
| `at()`         | Get element by index       |
| `push()`       | Add at end                 |
| `pop()`        | Remove from end            |
| `unshift()`    | Add at beginning           |
| `shift()`      | Remove from beginning      |
| `join()`       | Array → string             |
| `toString()`   | Array → string             |
| `concat()`     | Combine arrays             |
| `slice()`      | Copy part of array         |
| `splice()`     | Add/remove elements        |
| `copyWithin()` | Copy elements inside array |
| `fill()`       | Fill with a value          |
| `flat()`       | Flatten nested arrays      |
| `toSpliced()`  | Non-mutating `splice()`    |

```js
let a = [1, 2, 3];

a.push(4);          // [1,2,3,4]
a.pop();            // [1,2,3]
a.unshift(0);       // [0,1,2,3]
a.shift();          // [1,2,3]
a.join("-");        // "1-2-3"
```

## Search Methods

| Method            | Use                   |
| ----------------- | --------------------- |
| `indexOf()`       | First matching index  |
| `lastIndexOf()`   | Last matching index   |
| `includes()`      | Check if value exists |
| `find()`          | First matching value  |
| `findIndex()`     | First matching index  |
| `findLast()`      | Last matching value   |
| `findLastIndex()` | Last matching index   |

```js
const nums = [10, 20, 30, 20];

nums.indexOf(20);          // 1
nums.lastIndexOf(20);      // 3
nums.includes(30);         // true
nums.find(x => x > 15);    // 20
nums.findIndex(x => x > 15); // 1
```

## Sort Methods

| Method         | Use                    |
| -------------- | ---------------------- |
| `sort()`       | Sort original array    |
| `reverse()`    | Reverse original array |
| `toSorted()`   | Sort → new array       |
| `toReversed()` | Reverse → new array    |

```js
const nums = [30, 10, 20];

nums.sort((a, b) => a - b);
// [10, 20, 30]

nums.reverse();
// [30, 20, 10]
```

### Numeric Sort

```js
nums.sort((a, b) => a - b); // ascending
nums.sort((a, b) => b - a); // descending
```

## Iteration Methods

| Method          | Use                        |
| --------------- | -------------------------- |
| `forEach()`     | Run function for each item |
| `map()`         | Create transformed array   |
| `filter()`      | Create filtered array      |
| `reduce()`      | Reduce to one value        |
| `reduceRight()` | Reduce right → left        |
| `every()`       | Check if all pass          |
| `some()`        | Check if any pass          |
| `flatMap()`     | `map()` + `flat()`         |

```js
const nums = [1, 2, 3, 4];

nums.forEach(x => console.log(x));

nums.map(x => x * 2);
// [2, 4, 6]

nums.filter(x => x > 2);
// [3, 4]

nums.reduce((sum, x) => sum + x, 0);
// 10

nums.every(x => x > 0);
// true

nums.some(x => x > 3);
// true
```

## Array Iterators

```js
const arr = ["a", "b", "c"];

arr.keys();     // indexes
arr.entries();  // [index, value]
```

```js
for (const [index, value] of arr.entries()) {
    console.log(index, value);
}
```

## Modern Non-Mutating Methods

These return a **new array** instead of changing the original.

```js
const arr = [3, 1, 2];

arr.toSorted();     // [1, 2, 3]
arr.toReversed();   // [2, 1, 3]
arr.toSpliced(1, 1); // [3, 2]
arr.with(1, 99);    // [3, 99, 2]
```

## `with()`

Changes an element without modifying the original array.

```js
const arr = [10, 20, 30];

const newArr = arr.with(1, 99);

console.log(newArr);
// [10, 99, 30]

console.log(arr);
// [10, 20, 30]
```

## Spread `...`

Copy/combine arrays.

```js
const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];
// [1, 2, 3, 4]
```

## Rest `...`

Collect values into an array.

```js
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3); // 6
```

## `for...of`

Loops through **values**.

```js
for (const value of [10, 20, 30]) {
    console.log(value);
}
```

## `for...in`

Loops through **indexes/keys**.

```js
for (const index in ["A", "B", "C"]) {
    console.log(index);
}
```

## `Math.min()` / `Math.max()`

```js
const nums = [10, 5, 20, 3];

Math.min(...nums); // 3
Math.max(...nums); // 20
```

## Mutating vs Non-Mutating

```text
MUTATES original:
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
fill()
copyWithin()

NEW array / does not mutate:
slice()
concat()
map()
filter()
flat()
flatMap()
toSorted()
toReversed()
toSpliced()
with()
```

## Quick Revision

```text
CREATE:
[]  new Array()
Array.from()
Array.of()

ADD / REMOVE:
push()     → end
pop()      → end
unshift()  → start
shift()    → start
splice()   → add/remove

SEARCH:
indexOf()
lastIndexOf()
includes()
find()
findIndex()
findLast()
findLastIndex()

ITERATE:
forEach()
map()
filter()
reduce()
reduceRight()
every()
some()
flatMap()

SORT:
sort()
reverse()
toSorted()
toReversed()

COPY / COMBINE:
slice()
concat()
flat()

MODERN:
toSpliced()
with()

CHECK:
Array.isArray()
```
