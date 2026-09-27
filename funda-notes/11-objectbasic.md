# JavaScript Objects

An **object** stores data as **key-value pairs**.

```js
const person = {
    name: "John",
    age: 25,
    city: "Cuttack"
};
```

## Access Properties

```js
person.name;        // John
person["age"];      // 25
```

## Change / Add / Delete

```js
person.age = 26;           // change
person.country = "India";  // add
delete person.city;        // delete
```

## Object Methods

### `Object.keys()`

Returns all keys.

```js
Object.keys(person);
// ["name", "age", "country"]
```

### `Object.values()`

Returns all values.

```js
Object.values(person);
// ["John", 26, "India"]
```

### `Object.entries()`

Returns key-value pairs.

```js
Object.entries(person);
// [["name","John"], ["age",26], ["country","India"]]
```

### `Object.fromEntries()`

Creates an object from key-value pairs.

```js
const obj = Object.fromEntries([
    ["name", "John"],
    ["age", 25]
]);
```

### `Object.assign()`

Copies/merges objects.

```js
const a = { x: 1 };
const b = { y: 2 };

const result = Object.assign({}, a, b);
// { x: 1, y: 2 }
```

### Spread `...`

Modern way to copy/merge.

```js
const result = { ...a, ...b };
```

## Check Properties

### `hasOwnProperty()`

```js
person.hasOwnProperty("name");
// true
```

### `Object.hasOwn()`

Modern way:

```js
Object.hasOwn(person, "name");
// true
```

### `in`

Checks whether property exists.

```js
"name" in person;
// true
```

## Object Creation

### `new Object()`

```js
const person = new Object();

person.name = "John";
person.age = 25;
```

Usually prefer:

```js
const person = {
    name: "John",
    age: 25
};
```

## Object Destructuring

Get properties into variables.

```js
const person = {
    name: "John",
    age: 25
};

const { name, age } = person;
```

## Nested Objects

```js
const person = {
    name: "John",
    address: {
        city: "Cuttack",
        country: "India"
    }
};

person.address.city;
// Cuttack
```

## Optional Chaining `?.`

Prevents errors when a property doesn't exist.

```js
person.address?.city;
```

## Nullish Coalescing `??`

Uses a default value when value is `null` or `undefined`.

```js
const name = person.name ?? "Unknown";
```

## Object Methods

Functions can be stored inside objects.

```js
const person = {
    name: "John",
    greet() {
        console.log("Hello");
    }
};

person.greet();
```

## `this`

`this` refers to the current object.

```js
const person = {
    name: "John",
    greet() {
        console.log(`Hello ${this.name}`);
    }
};

person.greet();
// Hello John
```

## Freeze & Seal

### `Object.freeze()`

Prevents adding, deleting, or changing properties.

```js
const obj = { name: "John" };

Object.freeze(obj);
```

### `Object.seal()`

Prevents adding/deleting properties but allows changing existing ones.

```js
const obj = { name: "John" };

Object.seal(obj);
obj.name = "Mike"; // allowed
```

## Loop Through Object

```js
const person = {
    name: "John",
    age: 25
};

for (const key in person) {
    console.log(key, person[key]);
}
```

## Quick Revision

```text
Object
→ key-value pairs

Object.keys()
→ keys

Object.values()
→ values

Object.entries()
→ key + value

Object.fromEntries()
→ entries → object

Object.assign()
→ copy/merge

Object.hasOwn()
→ check own property

Object.freeze()
→ cannot modify

Object.seal()
→ cannot add/delete

delete
→ remove property

this
→ current object

?. 
→ safe property access

??
→ default for null/undefined
```
