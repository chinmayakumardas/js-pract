# JavaScript Set

`Set` stores **unique values**. Duplicate values are removed.

```js id="x4j8kp"
let numbers = new Set([1, 2, 2, 3, 3]);

console.log(numbers);
// Set(3) { 1, 2, 3 }
```

## Add

```js id="q7x2my"
numbers.add(4);
numbers.add(5);
```

## Delete

```js id="t4z8qw"
numbers.delete(2);
```

## Has

Checks if a value exists.

```js id="7w3y4n"
numbers.has(3); // true
numbers.has(10); // false
```

## Size

```js id="h1v6kc"
numbers.size; // 4
```

## Clear

Removes all values.

```js id="k3r9fd"
numbers.clear();
```

## Loop

```js id="p2c8vs"
let fruits = new Set(["Apple", "Mango", "Banana"]);

for (let fruit of fruits) {
    console.log(fruit);
}
```

### Quick Revision

```text
new Set()  → create Set
add()      → add value
delete()   → remove value
has()      → check value
size       → number of values
clear()    → remove all
```

---

# JavaScript Map

`Map` stores data as **key-value pairs**.

```js id="u6z0xa"
let user = new Map();

user.set("name", "Chinmaya");
user.set("age", 26);

console.log(user);
```

## `set()`

Adds or updates a key-value pair.

```js id="9s8h2q"
user.set("city", "Cuttack");
```

## `get()`

Gets a value using its key.

```js id="e7n3pw"
console.log(user.get("name"));
// Chinmaya
```

## `has()`

Checks if a key exists.

```js id="v2g6ls"
user.has("age");   // true
user.has("salary"); // false
```

## `delete()`

Removes a key-value pair.

```js id="n4k1rz"
user.delete("age");
```

## `size`

Returns number of key-value pairs.

```js id="m8q5yt"
console.log(user.size);
```

## `clear()`

Removes all entries.

```js id="c6x3qb"
user.clear();
```

## Loop

```js id="r7p2ka"
let user = new Map([
    ["name", "Chinmaya"],
    ["age", 26]
]);

for (let [key, value] of user) {
    console.log(key, value);
}
```

### Quick Revision

```text
new Map()  → create Map
set()      → add/update key-value
get()      → get value
has()      → check key
delete()   → remove entry
size       → number of entries
clear()    → remove all
```

## Set vs Map

```text
Set → values only
Map → key + value

Set → unique values
Map → unique keys
```
