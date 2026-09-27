# JavaScript Dates

`Date` is used to work with **date and time**.

## Create Date

```js
let now = new Date();              // current date & time
let date = new Date("2026-09-28"); // specific date
```

## Get Date Values

```js
let d = new Date();

d.getFullYear(); // year
d.getMonth();    // month (0-11)
d.getDate();     // day of month (1-31)
d.getDay();      // day of week (0-6)
d.getHours();    // hour
d.getMinutes();  // minutes
d.getSeconds();  // seconds
```

**Remember:** `getMonth()` starts from `0`.

```text
0 → January
1 → February
...
11 → December
```

`getDay()`:

```text
0 → Sunday
1 → Monday
...
6 → Saturday
```

## Set Date Values

```js
let d = new Date();

d.setFullYear(2030);
d.setMonth(5);
d.setDate(15);
```

## Useful Methods

```js
d.toString();       // full date/time
d.toDateString();   // date only
d.toTimeString();   // time only
d.toISOString();    // ISO format
d.getTime();        // milliseconds since Jan 1, 1970
```

## Date Comparison

Dates can be compared using timestamps.

```js
let d1 = new Date("2026-01-01");
let d2 = new Date("2026-12-01");

console.log(d1 < d2); // true
```

## Quick Revision

```text
new Date()       → current date/time
getFullYear()    → year
getMonth()       → month (0-11)
getDate()        → day of month
getDay()         → day of week (0-6)
getHours()       → hour
getMinutes()     → minutes
getSeconds()     → seconds
set...()         → change date values
getTime()        → timestamp in milliseconds
```
