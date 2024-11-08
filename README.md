### 1. **JavaScript Basics**
   - **Variables**: `var`, `let`, `const`
     - `var`: Function-scoped, can be redeclared and updated.
     - `let`: Block-scoped, can be updated but not redeclared.
     - `const`: Block-scoped, cannot be updated or redeclared.
     - **Example**:
     ```js
     const accountId = 144553
     let accountEmail = "amaan@google.com"
     var accountPassword = "12345"
     accountCity = "Pune"
     let accountState;
     ```
   - **Data Types**: 
     - Primitive: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`
     - Reference: `Object`, `Array`, `Function`
      - **Example**:
     ```js
     number => 2 to power 53
     bigint
     string => ""
     boolean => true/false
     null => standalone value
     undefined => 
     symbol => unique
     console.log(typeof undefined); // undefined
     console.log(typeof null); // object
     ```
  - **Type Coercion**: Implicit vs Explicit



### JavaScript Strings

This repository provides a comprehensive guide to **strings** in JavaScript. Strings are one of the most commonly used data types, and JavaScript offers a variety of methods for manipulating them.

  
### What is a String?

A **string** in JavaScript is a sequence of characters used to represent text. Strings are enclosed in single quotes (`' '`), double quotes (`" "`), or backticks (`` ` ` ``).

```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let backtick = `Hello World`;
```

### String Basics

Strings are **immutable**, meaning their content cannot be changed after they are created. When a string is manipulated using methods, it returns a new string rather than modifying the original one.

### Declaring Strings:

```javascript
let name = "John";
let greeting = 'Hello';
let templateString = `Welcome, ${name}`;
```

### Accessing Characters in a String:
You can access individual characters using bracket notation:

```javascript
let str = "Hello";
console.log(str[0]); // Output: H
```

## Common String Methods

### `length`
The `.length` property returns the number of characters in a string.

```javascript
let text = "JavaScript";
console.log(text.length); // Output: 10
```

### `toUpperCase()`
Converts the entire string to uppercase.

```javascript
let str = "hello";
console.log(str.toUpperCase()); // Output: HELLO
```

### `toLowerCase()`
Converts the entire string to lowercase.

```javascript
let str = "HELLO";
console.log(str.toLowerCase()); // Output: hello
```

### `charAt()`
Returns the character at a specified index.

```javascript
let str = "JavaScript";
console.log(str.charAt(4)); // Output: S
```

### `indexOf()`
Finds the index of the first occurrence of a specified substring.

```javascript
let str = "Hello World";
console.log(str.indexOf("World")); // Output: 6
```

### `slice()`
Extracts a section of a string and returns it as a new string.

```javascript
let str = "JavaScript";
console.log(str.slice(0, 4)); // Output: Java
```

### `substring()`
Similar to `slice()`, but cannot accept negative indexes.

```javascript
let str = "JavaScript";
console.log(str.substring(0, 4)); // Output: Java
```

### `substr()`
Extracts a part of a string, starting at a specified index, and for a given number of characters.

```javascript
let str = "JavaScript";
console.log(str.substr(4, 6)); // Output: Script
```

### `replace()`
Replaces a specified value with another value in a string.

```javascript
let str = "Hello World";
console.log(str.replace("World", "JavaScript")); // Output: Hello JavaScript
```

### `split()`
Splits a string into an array of substrings based on a specified delimiter.

```javascript
let str = "apple,banana,orange";
let fruits = str.split(",");
console.log(fruits); // Output: ['apple', 'banana', 'orange']
```

### `trim()`
Removes whitespace from both ends of a string.

```javascript
let str = "  Hello World  ";
console.log(str.trim()); // Output: "Hello World"
```

### `includes()`
Checks if a string contains a specified value and returns `true` or `false`.

```javascript
let str = "Hello World";
console.log(str.includes("World")); // Output: true
```

## String Example

Here’s a basic example that demonstrates how multiple string methods can be used:

```javascript
let text = "   JavaScript is awesome!   ";

// Remove whitespace using trim()
let trimmedText = text.trim();
console.log(trimmedText); // Output: "JavaScript is awesome!"

// Convert to uppercase
let upperText = trimmedText.toUpperCase();
console.log(upperText); // Output: "JAVASCRIPT IS AWESOME!"

// Replace "awesome" with "great"
let replacedText = upperText.replace("AWESOME", "GREAT");
console.log(replacedText); // Output: "JAVASCRIPT IS GREAT!"

// Check if the string includes "JAVASCRIPT"
console.log(replacedText.includes("JAVASCRIPT")); // Output: true

// Get the length of the string
console.log(replacedText.length); // Output: 20
```




### JavaScript Numbers

This repository provides a detailed guide to **numbers** in JavaScript, one of the fundamental data types. JavaScript supports several operations and methods for working with numbers, whether they're integers, floating-point numbers, or even large integers (BigInt).



### What is a Number?

A **number** in JavaScript is a primitive data type used to represent both integers and floating-point numbers. JavaScript follows the IEEE 754 standard for representing numbers, which means it uses a 64-bit floating-point format.

```javascript
let integer = 100;    // Integer
let float = 3.14;     // Floating-point number
```

JavaScript also supports **BigInt**, a special numeric type that can handle arbitrarily large integers.

```javascript
let bigInt = 1234567890123456789012345678901234567890n; // BigInt
```

## Number Basics

### Declaring Numbers

```javascript
let num1 = 42; // Integer
let num2 = 3.14; // Floating-point number
```

JavaScript automatically determines whether the number is an integer or a floating-point number based on the input.

### Special Number Values:
- `Infinity` - Represents a value larger than the largest number JavaScript can handle.
- `-Infinity` - Represents a value smaller than the smallest number JavaScript can handle.
- `NaN` (Not-a-Number) - Represents an invalid number result, usually from a failed mathematical operation.

```javascript
console.log(5 / 0); // Output: Infinity
console.log(Math.sqrt(-1)); // Output: NaN
```

## Common Number Methods

### `toString()`
Converts a number to a string.

```javascript
let num = 123;
console.log(num.toString()); // Output: "123"
```

### `toFixed()`
Formats a number to a specified number of decimal places. It returns a string.

```javascript
let num = 3.14159;
console.log(num.toFixed(2)); // Output: "3.14"
```

### `toPrecision()`
Formats a number to a specified length (number of significant digits). It returns a string.

```javascript
let num = 3.14159;
console.log(num.toPrecision(3)); // Output: "3.14"
```

### `Number()`
Converts a value to a number. It can convert strings or other data types into numbers.

```javascript
let str = "123";
let num = Number(str);
console.log(num); // Output: 123
```

### `parseInt()`
Parses a string and returns an integer. It can also take a radix (base) as the second parameter.

```javascript
let str = "42px";
console.log(parseInt(str)); // Output: 42
console.log(parseInt("1010", 2)); // Output: 10 (binary to decimal)
```

### `parseFloat()`
Parses a string and returns a floating-point number.

```javascript
let str = "3.14";
console.log(parseFloat(str)); // Output: 3.14
```

### `isNaN()`
Checks if a value is `NaN` (Not-a-Number).

```javascript
console.log(isNaN("Hello")); // Output: true
console.log(isNaN(123)); // Output: false
```

### `isFinite()`
Checks if a value is a finite number.

```javascript
console.log(isFinite(10)); // Output: true
console.log(isFinite(Infinity)); // Output: false
```

### Math Methods
JavaScript provides several methods under the `Math` object to perform mathematical operations on numbers.

#### `Math.round()`
Rounds a number to the nearest integer.

```javascript
let num = 4.6;
console.log(Math.round(num)); // Output: 5
```

#### `Math.floor()`
Rounds a number down to the nearest integer.

```javascript
let num = 4.9;
console.log(Math.floor(num)); // Output: 4
```

#### `Math.ceil()`
Rounds a number up to the nearest integer.

```javascript
let num = 4.1;
console.log(Math.ceil(num)); // Output: 5
```

#### `Math.max()`
Returns the largest of the given numbers.

```javascript
console.log(Math.max(10, 20, 5)); // Output: 20
```

#### `Math.min()`
Returns the smallest of the given numbers.

```javascript
console.log(Math.min(10, 20, 5)); // Output: 5
```

#### `Math.random()`
Generates a random number between 0 (inclusive) and 1 (exclusive).

```javascript
console.log(Math.random()); // Output: Random number between 0 and 1
```

## Number Example

Here’s a simple example that demonstrates the use of several number methods:

```javascript
let num = 123.456;

// Convert number to string
let strNum = num.toString();
console.log(strNum); // Output: "123.456"

// Format number to 2 decimal places
let fixedNum = num.toFixed(2);
console.log(fixedNum); // Output: "123.46"

// Parse a string to an integer
let parsedInt = parseInt("100px");
console.log(parsedInt); // Output: 100

// Generate a random number between 1 and 100
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum); // Output: Random number between 1 and 100

// Find the maximum value
console.log(Math.max(10, 20, 5)); // Output: 20
```



# JavaScript Dates

This repository provides a comprehensive guide to **Date** objects in JavaScript. The `Date` object is used to work with dates and times, and JavaScript provides numerous methods to handle date manipulation, formatting, and calculation.


## What is a Date Object?

The **Date** object in JavaScript is used to represent dates and times. It stores date and time values based on the number of milliseconds since January 1, 1970 (UTC), also known as the Unix epoch.

```javascript
let currentDate = new Date(); // Creates a new Date object representing the current date and time.
```

## Creating a Date Object

There are several ways to create a Date object in JavaScript:

1. **Current Date and Time**:
   ```javascript
   let now = new Date();
   console.log(now); // Output: current date and time
   ```

2. **Create a Date from a String**:
   ```javascript
   let specificDate = new Date("2024-01-01");
   console.log(specificDate); // Output: Mon Jan 01 2024
   ```

3. **Create a Date from Specific Values** (year, month, day, hours, minutes, seconds, milliseconds):
   ```javascript
   let customDate = new Date(2024, 0, 1, 12, 0, 0); // Month is 0-indexed (0 = January)
   console.log(customDate); // Output: Mon Jan 01 2024 12:00:00 GMT
   ```

## Common Date Methods

### `getDate()`
Returns the day of the month (1–31) for the specified date.

```javascript
let date = new Date();
console.log(date.getDate()); // Output: (current day of the month, e.g., 14)
```

### `getDay()`
Returns the day of the week (0–6) for the specified date, where 0 is Sunday and 6 is Saturday.

```javascript
let date = new Date();
console.log(date.getDay()); // Output: (current day of the week, e.g., 1 for Monday)
```

### `getFullYear()`
Returns the full year (e.g., 2024) of the specified date.

```javascript
let date = new Date();
console.log(date.getFullYear()); // Output: (current year, e.g., 2024)
```

### `getMonth()`
Returns the month (0–11) for the specified date, where 0 is January and 11 is December.

```javascript
let date = new Date();
console.log(date.getMonth()); // Output: (current month, e.g., 9 for October)
```

### `getHours()`
Returns the hour (0–23) for the specified date.

```javascript
let date = new Date();
console.log(date.getHours()); // Output: (current hour, e.g., 14 for 2 PM)
```

### `getMinutes()`
Returns the minutes (0–59) for the specified date.

```javascript
let date = new Date();
console.log(date.getMinutes()); // Output: (current minute, e.g., 30)
```

### `getSeconds()`
Returns the seconds (0–59) for the specified date.

```javascript
let date = new Date();
console.log(date.getSeconds()); // Output: (current second, e.g., 45)
```

### `getTime()`
Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (Unix time).

```javascript
let date = new Date();
console.log(date.getTime()); // Output: (milliseconds since 1970, e.g., 1729123200000)
```

### `setDate()`
Sets the day of the month for a date object (1–31).

```javascript
let date = new Date();
date.setDate(15);
console.log(date); // Output: New date with the day set to 15
```

### `setFullYear()`
Sets the full year (e.g., 2024) for a date object.

```javascript
let date = new Date();
date.setFullYear(2025);
console.log(date); // Output: New date with the year set to 2025
```

### `toDateString()`
Returns the date portion of a date object as a human-readable string.

```javascript
let date = new Date();
console.log(date.toDateString()); // Output: (e.g., "Mon Oct 14 2024")
```

### `toLocaleDateString()`
Returns the date portion of a date object as a string formatted according to the locale.

```javascript
let date = new Date();
console.log(date.toLocaleDateString()); // Output: (e.g., "10/14/2024" for US format)
```

### `toLocaleTimeString()`
Returns the time portion of a date object as a string formatted according to the locale.

```javascript
let date = new Date();
console.log(date.toLocaleTimeString()); // Output: (e.g., "2:30:45 PM")
```

### `toISOString()`
Returns the date and time portion of a date object as an ISO 8601 string.

```javascript
let date = new Date();
console.log(date.toISOString()); // Output: (e.g., "2024-10-14T14:30:00.000Z")
```

## Date Example

Here’s a simple example that demonstrates the use of several date methods:

```javascript
let currentDate = new Date();

// Get and display the current date and time
console.log(currentDate.toString()); // Output: Full date and time

// Get the year, month, and day
console.log("Year: " + currentDate.getFullYear()); // Output: Year: 2024
console.log("Month: " + (currentDate.getMonth() + 1)); // Output: Month: 10 (October)
console.log("Day: " + currentDate.getDate()); // Output: Day: 14

// Set the year and display the new date
currentDate.setFullYear(2025);
console.log("New Year: " + currentDate.getFullYear()); // Output: New Year: 2025

// Get a formatted date string
console.log(currentDate.toDateString()); // Output: Mon Oct 14 2025

// Display the time in a localized format
console.log(currentDate.toLocaleTimeString()); // Output: (e.g., "2:30:45 PM")
```




# JavaScript Arrays

This repository provides a detailed guide to **Arrays** in JavaScript. Arrays are an essential part of JavaScript, used to store multiple values in a single variable. This guide will walk through the basics of arrays, as well as commonly used array methods.


## What is an Array?

An **Array** is a special type of object used to store multiple values in a single variable. These values can be of any type, including numbers, strings, objects, and even other arrays.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
```

JavaScript arrays are dynamic, meaning their size can change, and they allow mixed data types.

```javascript
let mixedArray = [1, 'Hello', true, { name: 'John' }, [2, 4, 6]];
```

## Creating an Array

Arrays can be created in two ways:

1. **Using square brackets (`[]`)**:
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   ```

2. **Using the `Array` constructor**:
   ```javascript
   let fruits = new Array('Apple', 'Banana', 'Orange');
   ```

## Accessing Array Elements

Array elements are accessed using their **index**, starting from 0.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Orange
```

You can also change elements by accessing their index:

```javascript
fruits[1] = 'Mango'; // Replaces 'Banana' with 'Mango'
```

## Common Array Methods

### `push()`
Adds one or more elements to the end of an array and returns the new length.

```javascript
let fruits = ['Apple', 'Banana'];
fruits.push('Orange');
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']
```

### `pop()`
Removes the last element from an array and returns that element.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
let lastFruit = fruits.pop();
console.log(fruits); // Output: ['Apple', 'Banana']
console.log(lastFruit); // Output: 'Orange'
```

### `shift()`
Removes the first element from an array and returns that element.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
let firstFruit = fruits.shift();
console.log(fruits); // Output: ['Banana', 'Orange']
console.log(firstFruit); // Output: 'Apple'
```

### `unshift()`
Adds one or more elements to the beginning of an array and returns the new length.

```javascript
let fruits = ['Banana', 'Orange'];
fruits.unshift('Apple');
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']
```

### `concat()`
Merges two or more arrays into one.

```javascript
let fruits = ['Apple', 'Banana'];
let vegetables = ['Carrot', 'Potato'];
let food = fruits.concat(vegetables);
console.log(food); // Output: ['Apple', 'Banana', 'Carrot', 'Potato']
```

### `slice()`
Returns a shallow copy of a portion of an array into a new array. Does not modify the original array.

```javascript
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['Banana', 'Orange']
```

### `splice()`
Adds or removes elements from an array, modifying the original array.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.splice(1, 1, 'Mango'); // Removes 'Banana' and adds 'Mango'
console.log(fruits); // Output: ['Apple', 'Mango', 'Orange']
```

### `forEach()`
Executes a provided function once for each array element.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach((fruit) => {
  console.log(fruit);
});
// Output: 
// Apple
// Banana
// Orange
```

### `map()`
Creates a new array populated with the results of calling a provided function on every element in the array.

```javascript
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
```

### `filter()`
Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### `find()`
Returns the first element in the array that satisfies the provided testing function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(num => num > 3);
console.log(found); // Output: 4
```

### `reduce()`
Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```javascript
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
```

### `sort()`
Sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

```javascript
let fruits = ['Banana', 'Apple', 'Orange'];
fruits.sort();
console.log(fruits); // Output: ['Apple', 'Banana', 'Orange']

let numbers = [10, 5, 2, 25];
numbers.sort((a, b) => a - b); // Sort numerically
console.log(numbers); // Output: [2, 5, 10, 25]
```

### `reverse()`
Reverses the order of the elements in an array.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
fruits.reverse();
console.log(fruits); // Output: ['Orange', 'Banana', 'Apple']
```

### `includes()`
Determines whether an array includes a certain element, returning `true` or `false`.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.includes('Banana')); // Output: true
console.log(fruits.includes('Grapes')); // Output: false
```

### `indexOf()`
Returns the first index at which a given element can be found in the array, or `-1` if it is not present.

```javascript
let fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.indexOf('Banana')); // Output: 1
console.log(fruits.indexOf('Grapes')); // Output: -1
```

## Additional Methods

This repository provides an in-depth guide to **JavaScript Arrays** and several additional array methods, including `concat()`, `flat()`, `isArray()`, `from()`, and `of()`. These methods are useful for manipulating arrays in various ways.



### `concat()`

The `concat()` method is used to merge two or more arrays. It does not modify the original arrays but returns a new array with the merged content.

#### Example:

```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = arr1.concat(arr2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
```

You can also concatenate multiple arrays at once:

```javascript
let arr3 = [7, 8];
let fullArray = arr1.concat(arr2, arr3);
console.log(fullArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

### `flat()`

The `flat()` method creates a new array with all sub-array elements concatenated into it **recursively** up to the specified depth. By default, the depth is 1.

#### Example:

```javascript
let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
let flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, [6, 7]]
```

You can specify the depth to flatten further:

```javascript
let deeplyNestedArray = [1, [2, [3, [4, 5]]]];
let fullyFlattened = deeplyNestedArray.flat(3);
let fullyFlattened = nestedArray.flat(Infinity);

console.log(fullyFlattened); // Output: [1, 2, 3, 4, 5]
```

### `isArray()`

The `isArray()` method determines whether the passed value is an array. It returns `true` if the value is an array, and `false` otherwise.

#### Example:

```javascript
console.log(Array.isArray([1, 2, 3])); // Output: true
console.log(Array.isArray('Hello'));   // Output: false
console.log(Array.isArray({ a: 1 }));  // Output: false
```

### `from()`

The `from()` method creates a new array from an array-like or iterable object (like strings or sets). It can also take an optional map function that will be applied to each element.

#### Example:

```javascript
// Convert a string to an array
let str = 'Hello';
let strArray = Array.from(str);
console.log(strArray); // Output: ['H', 'e', 'l', 'l', 'o']

// Convert a set to an array
let set = new Set([1, 2, 3, 4]);
let setArray = Array.from(set);
console.log(setArray); // Output: [1, 2, 3, 4]
```

You can also use a map function:

```javascript
let numbers = [1, 2, 3];
let doubled = Array.from(numbers, x => x * 2);
console.log(doubled); // Output: [2, 4, 6]
```

### `of()`

The `of()` method creates a new array with a variable number of arguments, regardless of the number or type of the arguments.

#### Example:

```javascript
let singleElementArray = Array.of(5);
console.log(singleElementArray); // Output: [5]

let mixedArray = Array.of(1, 'Hello', true, null);
console.log(mixedArray); // Output: [1, 'Hello', true, null]
```

This differs from the `Array()` constructor, which behaves differently depending on the number of arguments:

```javascript
let arrOf = Array.of(3);   // Output: [3]
let arrNew = Array(3);     // Output: [ , , ] (empty slots in an array with length 3)
```



## Array Example

Here’s a simple example that demonstrates the use of several array methods:

```javascript
let numbers = [1, 2, 3, 4, 5];

// Add elements to the array
numbers.push(6);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// Remove the last element
numbers.pop();
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Filter even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Find a number greater than 3
let found = numbers.find(num => num > 3);
console.log(found); // Output: 4

// Sum all the numbers in the array
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

// Concatenating arrays
let combinedArray = arr1.concat(arr2);
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Flattening an array
let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
let flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, [6, 7]]

// Checking if a value is an array
console.log(Array.isArray(combinedArray)); // Output: true
console.log(Array.isArray('Hello'));       // Output: false

// Creating an array from a string
let arrayFromString = Array.from('Hello');
console.log(arrayFromString); // Output: ['H', 'e', 'l', 'l', 'o']

// Creating arrays with Array.of
let numbersArray = Array.of(1, 2, 3);
console.log(numbersArray); // Output: [1, 2, 3]
```


# JavaScript Objects

This repository provides a comprehensive guide to **Objects** in JavaScript. Objects are key-value pairs and one of the most important data types in JavaScript. They allow you to store multiple values and properties related to a single entity.



## What is an Object?

In JavaScript, an **Object** is a collection of key-value pairs. Keys are also known as properties or attributes, and values can be of any data type, including strings, numbers, arrays, or even other objects.

```javascript
let person = {
  name: 'John',
  age: 30,
  job: 'Developer'
};
```

Objects in JavaScript are extremely flexible and can be used to model complex real-world entities.

## Creating an Object

Objects can be created in several ways:

1. **Object Literal** (most common way):
   ```javascript
   let car = {
     brand: 'Toyota',
     model: 'Corolla',
     year: 2021
   };
   ```

2. **Using the `new Object()` constructor**:
   ```javascript
   let car = new Object();
   car.brand = 'Toyota';
   car.model = 'Corolla';
   car.year = 2021;
   ```

## Accessing Object Properties

You can access the properties of an object using dot notation or bracket notation:

- **Dot Notation**:
  ```javascript
  console.log(car.brand); // Output: 'Toyota'
  ```

- **Bracket Notation**:
  ```javascript
  console.log(car['model']); // Output: 'Corolla'
  ```

Bracket notation is useful when the property name is dynamic or includes spaces.

## Modifying Object Properties

You can modify the values of existing properties or add new properties to an object.

```javascript
car.year = 2022; // Modify an existing property
car.color = 'Red'; // Add a new property
console.log(car); // Output: { brand: 'Toyota', model: 'Corolla', year: 2022, color: 'Red' }
```

## Common Object Methods

### `Object.keys()`
Returns an array of a given object's own enumerable property names (keys).

```javascript
let person = { name: 'John', age: 30, job: 'Developer' };
let keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'job']
```

### `Object.values()`
Returns an array of the values of the object's properties.

```javascript
let person = { name: 'John', age: 30, job: 'Developer' };
let values = Object.values(person);
console.log(values); // Output: ['John', 30, 'Developer']
```

### `Object.entries()`
Returns an array of the object's key-value pairs as arrays.

```javascript
let person = { name: 'John', age: 30, job: 'Developer' };
let entries = Object.entries(person);
console.log(entries); // Output: [['name', 'John'], ['age', 30], ['job', 'Developer']]
```

### `Object.assign()`
Copies the properties of one or more source objects to a target object.

```javascript
let target = { name: 'John' };
let source = { age: 30, job: 'Developer' };
let newObject = Object.assign(target, source);
let newObject2 = Object.assign({},target, source);
//Creates new object and adds target and source into it. 
console.log(newObject); // Output: { name: 'John', age: 30, job: 'Developer' }
```

### `Object.freeze()`
Freezes an object, preventing any changes to its properties (add, remove, or modify).

```javascript
let person = { name: 'John', age: 30 };
Object.freeze(person);
person.age = 40; // No effect because the object is frozen
console.log(person); // Output: { name: 'John', age: 30 }
```

### `Object.seal()`
Seals an object, preventing new properties from being added or existing properties from being deleted. Existing properties can still be modified.

```javascript
let person = { name: 'John', age: 30 };
Object.seal(person);
person.age = 40; // This is allowed
delete person.name; // This will fail because the object is sealed
console.log(person); // Output: { name: 'John', age: 40 }
```

### `hasOwnProperty()`
Checks if an object has the specified property as its own (not inherited) property.

```javascript
let person = { name: 'John', age: 30 };
console.log(person.hasOwnProperty('name')); // Output: true
console.log(person.hasOwnProperty('job')); // Output: false
```

## Nested Objects

Objects can contain other objects, allowing for more complex structures.

```javascript
let company = {
  name: 'Tech Corp',
  location: 'San Francisco',
  employees: {
    developer: { name: 'Alice', age: 25 },
    manager: { name: 'Bob', age: 40 }
  }
};

console.log(company.employees.developer.name); // Output: Alice
```

You can access nested properties using dot or bracket notation.

## Object Example

Here’s a simple example demonstrating the use of several object methods:

```javascript
let person = {
  name: 'John',
  age: 30,
  job: 'Developer'
};

// Accessing properties
console.log(person.name); // Output: 'John'
console.log(person['job']); // Output: 'Developer'

// Modifying properties
person.age = 31;
person.country = 'USA'; // Adding a new property
console.log(person); // Output: { name: 'John', age: 31, job: 'Developer', country: 'USA' }

// Using Object methods
let keys = Object.keys(person);
let values = Object.values(person);
let entries = Object.entries(person);

console.log(keys); // Output: ['name', 'age', 'job', 'country']
console.log(values); // Output: ['John', 31, 'Developer', 'USA']
console.log(entries); // Output: [['name', 'John'], ['age', 31], ['job', 'Developer'], ['country', 'USA']]

// Freezing the object
Object.freeze(person);
person.age = 40; // No effect
console.log(person.age); // Output: 31
```


# JavaScript Object Destructuring

This repository provides a guide to **Object Destructuring** in JavaScript. Object destructuring allows you to extract properties from objects and assign them to variables in a simple, concise syntax. It is a feature introduced in ECMAScript 2015 (ES6) and is widely used in modern JavaScript programming.



## What is Object Destructuring?

**Object Destructuring** allows you to unpack properties from objects and assign them to variables easily. Instead of manually assigning each property to a variable, destructuring lets you do it all in one concise statement.

### Traditional Way:
```javascript
const person = { name: 'John', age: 30, job: 'Developer' };

const name = person.name;
const age = person.age;
const job = person.job;
console.log(name, age, job); // Output: John 30 Developer
```

### Using Object Destructuring:
```javascript
const { name, age, job } = person;
console.log(name, age, job); // Output: John 30 Developer
```

## Basic Object Destructuring

You can destructure an object by simply specifying the property names in curly braces on the left-hand side of the assignment.

#### Example:
```javascript
const car = { brand: 'Toyota', model: 'Corolla', year: 2021 };
const { brand, model, year } = car;

console.log(brand); // Output: Toyota
console.log(model); // Output: Corolla
console.log(year);  // Output: 2021
```

## Assigning to New Variable Names

You can also assign object properties to variables with different names using the colon (`:`) syntax.

#### Example:
```javascript
const car = { brand: 'Toyota', model: 'Corolla', year: 2021 };
const { brand: carBrand, model: carModel, year: carYear } = car;

console.log(carBrand); // Output: Toyota
console.log(carModel); // Output: Corolla
console.log(carYear);  // Output: 2021
```

## Default Values

You can provide default values for properties in case the object does not have those properties.

#### Example:
```javascript
const car = { brand: 'Toyota', model: 'Corolla' }; // No 'year' property
const { brand, model, year = 2020 } = car;

console.log(brand); // Output: Toyota
console.log(model); // Output: Corolla
console.log(year);  // Output: 2020 (default value is used)
```

## Nested Object Destructuring

You can also destructure nested objects by specifying the structure of the object.

#### Example:
```javascript
const company = {
  name: 'Tech Corp',
  location: 'San Francisco',
  employees: {
    manager: { name: 'Alice', age: 35 },
    developer: { name: 'Bob', age: 28 }
  }
};

const { employees: { manager: { name: managerName }, developer: { name: developerName } } } = company;
console.log(managerName);  // Output: Alice
console.log(developerName); // Output: Bob
```

## Destructuring in Function Parameters

Object destructuring can be used directly in function parameters, which is useful when a function accepts an object as its argument.

#### Example:
```javascript
function displayUser({ name, age, job }) {
  console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
}

const person = { name: 'John', age: 30, job: 'Developer' };
displayUser(person); // Output: Name: John, Age: 30, Job: Developer
```

You can also provide default values for function parameters:

```javascript
function displayUser({ name, age, job = 'Unemployed' }) {
  console.log(`Name: ${name}, Age: ${age}, Job: ${job}`);
}

const person = { name: 'John', age: 30 };
displayUser(person); // Output: Name: John, Age: 30, Job: Unemployed
```

## Rest Operator in Destructuring

You can use the **rest operator** (`...`) to collect the remaining properties of an object into a new object.

#### Example:
```javascript
const person = { name: 'John', age: 30, job: 'Developer', country: 'USA' };
const { name, age, ...rest } = person;

console.log(name); // Output: John
console.log(age);  // Output: 30
console.log(rest); // Output: { job: 'Developer', country: 'USA' }
```

## Object Destructuring Example

Here’s a complete example demonstrating various uses of object destructuring:

```javascript
const person = {
  name: 'John',
  age: 30,
  job: 'Developer',
  address: {
    city: 'New York',
    zip: 10001
  }
};

// Basic destructuring
const { name, age, job } = person;
console.log(name, age, job); // Output: John 30 Developer

// Assigning to new variable names
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // Output: John 30

// Default values
const { country = 'USA' } = person;
console.log(country); // Output: USA

// Nested destructuring
const { address: { city, zip } } = person;
console.log(city, zip); // Output: New York 10001

// Using rest operator
const { name: firstName, ...otherDetails } = person;
console.log(firstName); // Output: John
console.log(otherDetails); // Output: { age: 30, job: 'Developer', address: { city: 'New York', zip: 10001 } }
```



# JavaScript `this` and `new` Keywords

This repository explains the **`this`** and **`new`** keywords in JavaScript. These two keywords are essential for understanding object-oriented JavaScript and how functions and objects work.



## What is `this` in JavaScript?

The **`this`** keyword in JavaScript refers to the object it belongs to. Its value depends on **where it is used**, meaning it has different values depending on the context in which the function is called.

### Global Context

In the global execution context (outside any function), `this` refers to the global object. In a browser, this is typically the `window` object.

#### Example:

```javascript
console.log(this); // Output: Window (global object in a browser)
```

### Object Context

When used inside an object method, `this` refers to the object that owns the method.

#### Example:

```javascript
const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log(this.name); // `this` refers to the `person` object
  }
};

person.greet(); // Output: John
```

In this example, `this.name` refers to the `name` property of the `person` object.

### Method Context

When a method is called on an object, `this` refers to the object that the method is called on.

#### Example:

```javascript
const car = {
  brand: 'Toyota',
  start: function() {
    console.log(`${this.brand} is starting.`); // `this` refers to `car`
  }
};

car.start(); // Output: Toyota is starting.
```

### Event Handler Context

In the context of DOM event handlers, `this` refers to the element that triggered the event.

#### Example:

```html
<button id="btn">Click me</button>

<script>
  document.getElementById('btn').addEventListener('click', function() {
    console.log(this); // Output: <button id="btn">Click me</button>
  });
</script>
```

In this case, `this` refers to the `<button>` element that triggered the `click` event.

### Arrow Functions and `this`

Arrow functions behave differently with `this`. In arrow functions, `this` is lexically bound, meaning it takes the value of `this` from the surrounding code (where the function is defined), rather than the object that calls it.

#### Example:

```javascript
const person = {
  name: 'John',
  greet: () => {
    console.log(this.name); // `this` refers to the outer scope, not `person`
  }
};

person.greet(); // Output: undefined (because `this` is bound to the global scope)
```

In this case, arrow functions do **not** have their own `this` context, so they inherit `this` from the outer lexical environment.

## What is the `new` Keyword?

The **`new`** keyword in JavaScript is used to create instances of objects from constructor functions or classes. It does the following:

1. Creates a new, empty object.
2. Sets the `this` keyword to refer to that new object.
3. Executes the constructor function.
4. Implicitly returns the new object if no return value is specified.

### How `new` Works

When a function is called with the `new` keyword, it becomes a **constructor** function, and a new object is created.

### Example of Using `new`

#### Constructor Function Example:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person('John', 30);
console.log(john.name); // Output: John
console.log(john.age);  // Output: 30
```

In this example:
- A new object is created using the `Person` constructor function.
- The `this` keyword inside the `Person` function refers to the newly created object.
- `new Person('John', 30)` creates an object with the properties `name` and `age`.

#### Class Example:

In ES6, you can also use classes with the `new` keyword.

```javascript
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} is starting.`);
  }
}

const myCar = new Car('Toyota', 2021);
console.log(myCar.brand); // Output: Toyota
myCar.start();            // Output: Toyota is starting.
```

In this case, `new Car()` creates a new instance of the `Car` class.

## Conclusion

- The **`this`** keyword refers to different values depending on the execution context (global, object, method, event, etc.).
- The **`new`** keyword is used to create instances of objects by calling constructor functions or classes, with `this` referring to the new object.

This README provides an explanation of how to use the **`this`** and **`new`** keywords in JavaScript, and it includes examples demonstrating how they work in various contexts.



# JS Memory Management: Stack and Heap

This repository provides an explanation of how memory management works in JavaScript, focusing on the use of the **stack** and **heap**. The goal is to clarify how primitive and reference data types are stored and accessed in JavaScript's memory system.

### Overview

JavaScript handles memory management by dividing it into two key components: **stack** and **heap**. Each plays a role in storing data efficiently.

    1. **Stack**: Used for static memory allocation (primitive data types).
    2. **Heap**: Used for dynamic memory allocation (objects, arrays, and functions).

### Memory Components

### Stack
The **stack** follows a **Last In, First Out (LIFO)** structure and is used to store fixed-size primitive data types such as:
- Numbers (`number`)
- Strings (`string`)
- Booleans (`boolean`)
- `null` and `undefined`

These values are stored directly in the stack.

### Heap
The **heap** is used for dynamic memory allocation, handling data that is not fixed in size, such as:
- Objects
- Arrays
- Functions

In this case, a reference (or pointer) to the actual data stored in the heap is stored in the stack.

## Example Code

Here’s an example that demonstrates how both stack and heap memory are used:

```javascript
let a = 10; // Stored in the stack
let b = a;  // Also stored in the stack, a copy of 'a' is made

let obj1 = { name: "Alice" }; // The object is stored in the heap, 'obj1' is a reference stored in the stack
let obj2 = obj1; // 'obj2' points to the same object in the heap
obj2.name = "Bob"; // Changing the object affects both 'obj1' and 'obj2'
```

In this code:
- **Primitive values** `a` and `b` are stored directly in the stack.
- **Objects** like `obj1` are stored in the heap, while references (or pointers) to them are stored in the stack.

## Diagram Explanation

Here’s a simple diagram that illustrates the memory structure for the above example:

```
+------------------------+               +-------------------------------+
|        Stack            |               |             Heap               |
+------------------------+               +-------------------------------+
| a = 10                 |               | obj1 -> { name: "Bob" }        |
+------------------------+               |                               |
| b = 10                 |               | obj2 -> { name: "Bob" }        |
+------------------------+               +-------------------------------+
| obj1 (reference) ------>+-------------->|
+------------------------+               |
| obj2 (reference) ------>+-------------->|
+------------------------+               
```

### How it works:
- `a` and `b` store primitive values directly on the stack.
- `obj1` and `obj2` store references to the object in the heap. Both `obj1` and `obj2` point to the same object, so updating the object through `obj2` also updates it for `obj1`.

## Stack vs. Heap

| **Feature**           | **Stack**                                   | **Heap**                                    |
|-----------------------|---------------------------------------------|---------------------------------------------|
| **Memory allocation**  | Static (fixed size)                        | Dynamic (variable size)                     |
| **Data stored**        | Primitive data types (numbers, booleans)    | Objects, arrays, and functions              |
| **Access speed**       | Fast (LIFO structure)                      | Slower (lookup time for dynamic data)       |
| **Memory size**        | Smaller                                    | Larger                                     |
| **Life cycle**         | Automatically managed by scope             | Manually managed or via Garbage Collection |

## Garbage Collection

JavaScript uses **automatic garbage collection** to clean up memory that is no longer referenced in the heap. When there are no more references pointing to a heap object, the garbage collector reclaims that memory for future use.


  
### Type Coercion in JavaScript

Type coercion is the process of converting values from one type to another. This can happen either **implicitly** or **explicitly**.

### 1. Implicit Coercion
Implicit type coercion occurs automatically by JavaScript when performing operations between different data types. JavaScript tries to "guess" the type that should be used.

#### Example:
```js
let x = 5 + "10";  // Implicit coercion
console.log(x);  // "510" (number 5 is coerced into a string)
```

In the above example, JavaScript converts the number `5` into a string and concatenates it with `"10"`, resulting in `"510"`.

#### Another Example:
```js
let y = "5" * 2;  
console.log(y);  // 10 (string "5" is coerced into a number)
```
Here, JavaScript converts the string `"5"` into a number and performs the multiplication.

### 2. Explicit Coercion
Explicit type coercion is when you manually convert a value from one type to another using JavaScript's built-in methods like `Number()`, `String()`, etc.

#### Example:
```js
let x = 5;
let y = "10";

let result = x + Number(y);  // Explicit coercion
console.log(result);  // 15
```

In this example, the string `"10"` is explicitly converted to a number using `Number()`, and the result is the sum of `5 + 10`.

#### Another Example:
```js
let str = String(123);  // Explicit coercion
console.log(str);  // "123" (number 123 is converted into a string)
```

### Key Differences:
- **Implicit Coercion** happens automatically, sometimes leading to unexpected results.
- **Explicit Coercion** is intentional and generally safer, as you control the type conversion directly.

### 2. **Operators**
   - **Arithmetic**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
   - **Comparison**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
   - **Logical**: `&&`, `||`, `!`
   - **Ternary**: `condition ? expr1 : expr2`

### 3. **Control Flow**
   - **If-Else**:
     ```js
     if (condition) {
       // code
     } else {
       // code
     }
     ```
     - **Example**:
     ```js
      const isUserloggedIn = true
      const temperature = 41

      if ( temperature === 40 ){
          console.log("less than 50");
      } else {
          console.log("temperature is greater than 50");
      }

      console.log("Execute");
      <, >, <=, >=, ==, !=, ===, !==

      const score = 200

      if (score > 100) {
          let power = "fly"
          console.log(`User power: ${power}`);
      }

      console.log(`User power: ${power}`);


      const balance = 1000

      if (balance > 500) console.log("test"),console.log("test2");

      if (balance < 500) {
          console.log("less than 500");
      } else if (balance < 750) {
          console.log("less than 750");
          
      } else if (balance < 900) {
          console.log("less than 750");
          
      } else {
          console.log("less than 1200");

      }

      const userLoggedIn = true
      const debitCard = true
      const loggedInFromGoogle = false
      const loggedInFromEmail = true

      if (userLoggedIn && debitCard && 2==3) {
          console.log("Allow to buy course");
      }

      if (loggedInFromGoogle || loggedInFromEmail) {
          console.log("User logged in");
      }
     ```
   - **Switch**:
     ```js
     switch (expression) {
       case value1:
         // code
         break;
       case value2:
         // code
         break;
       default:
         // code
     }
     ```
     - **Example**:
     ```js
     const month = "march"

      switch (month) {
          case "jan":
              console.log("January");
              break;
          case "feb":
              console.log("feb");
              break;
          case "march":
              console.log("march");
              break;
          case "april":
              console.log("april");
              break;

          default:
              console.log("default case match");
              break;
      }
          }
     ```
   - **Truthy Values**
     - `"0"`, `'false'`,  `" "`, `[]`, `{}`, `function(){}` 
  - **Fasly Values**
     - `false`, `0`, `-0`, `BigInt 0n`, `""`, `null`, `undefined`, `NaN` 
  - **Nullish Coalescing Operator (??): null undefined** 
     - The nullish coalescing `??` operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
     - **Example**:
     ```js
    let val1;
    val1 = 5 ?? 10
    val1 = null ?? 10
    val1 = undefined ?? 15
    val1 = null ?? 10 ?? 20
     ```
   - **Loops**:
     - `for`, `while`, `do...while`
     - Array methods: `forEach()`, `map()`, `filter()`, `reduce()`

### 4. **Functions**
   - **Function Declaration**:
     ```js
     //defination
     function myFunction(param) {
       return param;
     }
     // call
     myfunction(args);
     ```
   - **Function Expression**:
     ```js
     const myFunction = function(param) {
       return param;
     };
     ```
   - **Arrow Function**:
     ```js
     const myFunction = (param) => param;
     ```
   - **Higher-Order Functions**: Functions that accept other functions as arguments or return functions.


# JavaScript Functions and Arrow Functions

This repository explains **Basic Functions** and **Arrow Functions** in JavaScript, including their syntax, usage, and examples.


## What is a Function?

A **function** in JavaScript is a reusable block of code that performs a specific task. Functions can accept inputs (called **parameters**) and return outputs. Functions help organize code and make it modular.

### Example:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('John')); // Output: Hello, John!
```

## Basic Function Syntax

### Function Declaration

A **function declaration** defines a function using the `function` keyword followed by the function name, parameters in parentheses, and a function body enclosed in curly braces.

#### Syntax:

```javascript
function functionName(parameters) {
  // function body
}
```

### Example:

```javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8
```

### Function Expression

A **function expression** defines a function as part of an expression. The function can be anonymous (without a name) or named.

#### Example:

```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // Output: 20
```

### Calling a Function

A function is **called** or **invoked** by using the function name followed by parentheses.

#### Example:

```javascript
function sayHello() {
  console.log('Hello!');
}

sayHello(); // Output: Hello!
```

## Arrow Function Syntax

Introduced in ES6, **arrow functions** are a shorter syntax for writing functions. They are especially useful for writing simple one-liner functions. Arrow functions use the `=>` syntax and have a different behavior with the `this` keyword compared to regular functions.

### Basic Arrow Function

An arrow function with two parameters and a single line of code does not need curly braces or the `return` keyword.

#### Syntax:

```javascript
const functionName = (parameters) => expression;
```

#### Example:

```javascript
const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8
```

### Single Parameter Arrow Function

If there is only one parameter, you can omit the parentheses around the parameter.

#### Example:

```javascript
const square = num => num * num;

console.log(square(4)); // Output: 16
```

### No Parameter Arrow Function

If there are no parameters, you must include empty parentheses.

#### Example:

```javascript
const greet = () => 'Hello, World!';

console.log(greet()); // Output: Hello, World!
```

### Multi-line Arrow Function

For multi-line functions, you need to use curly braces and an explicit `return` statement.

#### Example:

```javascript
const multiply = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply(4, 5)); // Output: 20
```

## Key Differences Between Regular and Arrow Functions

### `this` Keyword

One of the main differences between regular functions and arrow functions is how the **`this`** keyword is handled.

- **Regular Functions**: The value of `this` depends on how the function is called.
- **Arrow Functions**: `this` is lexically bound, meaning it refers to the `this` value of the surrounding code where the arrow function is defined.

#### Example:

```javascript
const person = {
  name: 'John',
  regularFunc: function() {
    console.log(this.name); // 'this' refers to the person object
  },
  arrowFunc: () => {
    console.log(this.name); // 'this' refers to the global object, not the person object
  }
};

person.regularFunc(); // Output: John
person.arrowFunc();   // Output: undefined (because `this` is lexically bound)
```

### Arguments Object

- **Regular Functions**: They have access to the **`arguments`** object, which contains the arguments passed to the function.
- **Arrow Functions**: Do **not** have their own `arguments` object.

#### Example:

```javascript
function regularFunc() {
  console.log(arguments);
}

const arrowFunc = () => {
  console.log(arguments); // This will throw a ReferenceError
};

regularFunc(1, 2, 3); // Output: [1, 2, 3]
arrowFunc(1, 2, 3);   // Output: ReferenceError: arguments is not defined
```

### Using Arrow Functions in Object Methods

Avoid using arrow functions as **object methods**, since they do not have their own `this` binding.

#### Example:

```javascript
const car = {
  brand: 'Toyota',
  start: () => {
    console.log(this.brand); // 'this' does not refer to the car object
  }
};

car.start(); // Output: undefined
```

## Conclusion

- **Basic Functions** (using the `function` keyword) are versatile and allow for dynamic handling of the `this` context and `arguments` object.
- **Arrow Functions** (introduced in ES6) provide a shorter syntax but do not bind their own `this` or `arguments`. They are especially useful for writing concise, single-line functions and callbacks.



# JavaScript IIFE (Immediately Invoked Function Expression)

This repository explains the concept of **IIFE (Immediately Invoked Function Expression)** in JavaScript, including its syntax, use cases, and examples.


## What is an IIFE?

**IIFE** stands for **Immediately Invoked Function Expression**. It is a function in JavaScript that is **executed immediately** after it is defined. Unlike regular functions, which need to be called explicitly, an IIFE runs automatically when it is created.

The main purpose of an IIFE is to create a **local scope** for variables and functions, avoiding potential conflicts with other parts of the code.

## IIFE Syntax

An IIFE is simply a function that is defined and invoked immediately. It can be written in two forms: the classic function expression and an ES6 arrow function.

### Classic IIFE Syntax

The IIFE is wrapped inside parentheses `()` to treat it as a function expression, followed by another set of parentheses `()` to invoke it.

#### Example:

```javascript
(function() {
  console.log('This IIFE runs immediately!');
})();
```

#### Breakdown:
- **`(function() {...})`**: This is a function expression wrapped in parentheses.
- **`()`:** This invokes the function immediately.

### ES6 Arrow Function IIFE

You can also write IIFEs using ES6 arrow functions.

#### Example:

```javascript
(() => {
  console.log('This ES6 arrow function IIFE runs immediately!');
})();
```

This achieves the same effect, but with the concise arrow function syntax.

## Why Use an IIFE?

The main benefits of using an IIFE include:
1. **Avoiding Global Scope Pollution**: Variables defined inside an IIFE are scoped to the IIFE and do not affect or get affected by other code outside the function.
2. **Creating Private Variables**: You can create private variables inside an IIFE that cannot be accessed from the outside.
3. **Immediate Code Execution**: IIFEs are useful when you want to execute some code immediately, like initializing variables or running setup logic.

## IIFE with Parameters

You can pass arguments into an IIFE by adding parameters inside the parentheses.

#### Example:

```javascript
(function(name) {
  console.log(`Hello, ${name}!`);
})('John');
```

In this example, the IIFE takes `'John'` as an argument and executes immediately with that value.

## IIFE Example Use Cases

### Avoid Polluting the Global Scope

One of the key reasons to use IIFE is to avoid polluting the global namespace by keeping variables inside the IIFE scope.

#### Example:

```javascript
(function() {
  let counter = 0;
  console.log(counter); // Output: 0
})();

// console.log(counter); // Uncaught ReferenceError: counter is not defined
```

Here, the variable `counter` is not accessible outside of the IIFE, preventing any conflict with other code.

### Create Private Variables

You can use an IIFE to create **private variables** that cannot be accessed from outside, ensuring data encapsulation.

#### Example:

```javascript
const privateCounter = (function() {
  let counter = 0;
  return function() {
    counter += 1;
    return counter;
  };
})();

console.log(privateCounter()); // Output: 1
console.log(privateCounter()); // Output: 2
console.log(privateCounter()); // Output: 3
```

In this example, `counter` is private and only accessible through the returned function, allowing the value to be updated without exposing it to the global scope.

### Avoiding Conflicts in the Global Scope

IIFEs are commonly used to avoid naming collisions in JavaScript libraries or modules. They ensure that your code does not interfere with other global variables or functions.

#### Example:

```javascript
(function() {
  let libraryName = 'MyLibrary';
  console.log(libraryName);
})();

(function() {
  let libraryName = 'AnotherLibrary';
  console.log(libraryName);
})();
```

Both IIFEs use the variable `libraryName`, but they don’t conflict with each other because the variables are scoped to their respective IIFE.

## Conclusion

- An **IIFE** is a function that runs immediately after being defined.
- IIFEs are useful for creating private scopes, avoiding global namespace pollution, and running initialization logic.
- You can pass arguments to an IIFE and even create private variables inside it.
- IIFEs are commonly used in JavaScript libraries and frameworks to encapsulate code and avoid conflicts with other code.


### 5. **Objects**
   - **Creating Objects**:
     ```js
     const person = {
       name: 'John',
       age: 30,
       greet: function() { console.log('Hello'); }
     };
     ```
   - **Accessing Properties**: Dot notation (`obj.prop`) vs Bracket notation (`obj['prop']`)
   - **Object Methods**: `Object.keys()`, `Object.values()`, `Object.assign()`, `Object.freeze()`

### 6. **Arrays**
   - **Methods**: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()`, `concat()`, `includes()`, `indexOf()`

### 7. **ES6 Features**
   - **Destructuring**:
     ```js
     const [a, b] = [1, 2]; // Array
     const {name, age} = person; // Object
     ```
   - **Spread Operator**:
     ```js
     const arr1 = [1, 2, 3];
     const arr2 = [...arr1, 4, 5];
     ```
   - **Rest Parameter**:
     ```js
     function sum(...numbers) {
       return numbers.reduce((acc, cur) => acc + cur, 0);
     }
     ```

### 8. **Asynchronous JavaScript**
   - **Promises**:
     ```js
     const myPromise = new Promise((resolve, reject) => {
       if (success) resolve('Success');
       else reject('Error');
     });
     ```
   - **Async/Await**:
     ```js
     async function fetchData() {
       const response = await fetch('url');
       const data = await response.json();
       return data;
     }
     ```

  

# Asynchronous JavaScript

This repository provides an explanation of **Asynchronous JavaScript**, including how the **Call Stack**, **Web APIs**, and **Event Loop** work together. We will also cover error handling using `.then()`, `.catch()`, `try-catch`, and conditional handling using `if-else` for responses and errors.



## What is Asynchronous JavaScript?

Asynchronous programming allows code execution to happen in a non-blocking manner. JavaScript, although **single-threaded**, uses the **event loop** to handle asynchronous tasks like API calls, timers, and file I/O, ensuring that long-running tasks do not freeze the main thread.


## Call Stack, Web APIs, and Event Loop

The core of asynchronous JavaScript revolves around three main components:
1. **Call Stack**: Executes synchronous code.
2. **Web APIs**: Handles asynchronous tasks (timers, network requests) in the background.
3. **Event Loop**: Pushes tasks from the **Task Queue** (when ready) to the **Call Stack** for execution.

---

## Basic Asynchronous Example

Here’s a basic example using `setTimeout()` to demonstrate asynchronous behavior.

```javascript
console.log('Start');

setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

console.log('End');
```

**Output**:
```plaintext
Start
End
This runs after 2 seconds
```

The `setTimeout()` function is asynchronous, allowing the rest of the code to execute while it waits.

---

## Understanding Promises

A **Promise** represents the eventual completion (or failure) of an asynchronous task. It has three states:
- **Pending**: The initial state, the task is ongoing.
- **Fulfilled**: The task completed successfully.
- **Rejected**: The task failed.

### Example of a Promise:

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved');
  }, 1000);
});

myPromise.then(result => {
  console.log(result); // Output: Promise resolved
}).catch(error => {
  console.error('Error:', error);
});
```

---

## Handling Responses and Errors

When working with asynchronous tasks like network requests or file handling, it's essential to manage both successful and failed outcomes. There are several ways to handle these: `.then()`, `.catch()`, `try-catch` with `async/await`, and conditional `if-else` logic.

### Using then/catch

`.then()` and `.catch()` are methods available on Promises for handling success and error responses.

#### Example:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Data:', data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

**Explanation**:
- **`.then()`**: Used to handle successful responses.
- **`.catch()`**: Catches errors such as network issues or manual `throw` statements.

### Using try-catch with async/await

When using `async/await`, you can handle responses and errors with `try-catch`. This allows for more readable code than chaining `.then()` and `.catch()`.

#### Example:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Data:', data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
```

**Explanation**:
- `try` is used to handle successful asynchronous operations.
- `catch` catches and handles any errors that occur inside the `try` block, including network issues and exceptions.

### Handling with if-else

Using `if-else` logic inside the `.then()` block or `try` block can help handle custom error conditions based on the response.

#### Example with `if-else`:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    
    if (response.ok) {
      const data = await response.json();
      console.log('Data:', data);
    } else {
      console.error('Error: Failed to fetch data. Status code:', response.status);
    }
    
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

fetchData();
```

**Explanation**:
- The `if` statement checks if the response is successful using `response.ok`.
- If not, an error message is logged with the appropriate status code.
- This is helpful for handling custom conditions like 404 errors or other HTTP status codes.

---

## Conclusion

Asynchronous JavaScript allows code to execute without blocking other operations. By using techniques like **Promises**, `.then()`, `.catch()`, `async/await`, and error handling strategies like `try-catch` and conditional `if-else` logic, you can effectively manage responses and errors in asynchronous code.

This README demonstrates how to handle success and error states when dealing with asynchronous tasks, helping make your code more robust and responsive.

---

By implementing these methods, you can manage asynchronous operations efficiently and handle any errors or success cases appropriately.

### 9. **Error Handling**
   - **Try-Catch**:
     ```js
     try {
       // code
     } catch (error) {
       console.error(error);
     }
     ```

### 10. **DOM Manipulation**
   - **Selecting Elements**: `getElementById()`, `querySelector()`, `getElementsByClassName()`
   - **Modifying Elements**: `.innerHTML`, `.style`, `.classList.add()`
   - **Event Listeners**:
     ```js
     element.addEventListener('click', function() {
       // code
     });
     ```

    

# JavaScript DOM (Document Object Model)

This repository explains the **Document Object Model (DOM)** in JavaScript, including what it is, how to interact with it, and some basic examples of DOM manipulation.



## What is the DOM?

The **Document Object Model (DOM)** is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, where each object corresponds to a part of the document (such as elements, attributes, and text). JavaScript can interact with the DOM to modify the content, structure, and style of a webpage.

### Example of the DOM Tree:

For the HTML code below:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample Page</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

The DOM represents this document as a tree structure, where `html`, `head`, `body`, `h1`, and `p` are nodes.

## Selecting Elements

JavaScript provides various methods to **select** DOM elements, allowing you to access and modify them.

### `getElementById`

This method selects an element by its unique `id` attribute.

#### Example:

```html
<h1 id="title">Hello World</h1>

<script>
  const title = document.getElementById('title');
  console.log(title.textContent); // Output: Hello World
</script>
```

### `getElementsByClassName`

This method selects all elements with a specific class name and returns a **live HTMLCollection** (which updates automatically when the document changes).

#### Example:

```html
<p class="text">This is the first paragraph.</p>
<p class="text">This is the second paragraph.</p>

<script>
  const paragraphs = document.getElementsByClassName('text');
  console.log(paragraphs.length); // Output: 2
</script>
```

### `querySelector` and `querySelectorAll`

- `querySelector`: Selects the **first** element that matches a CSS selector.
- `querySelectorAll`: Selects **all** elements that match a CSS selector and returns a **NodeList**.

#### Example:

```html
<p class="text">This is the first paragraph.</p>
<p class="text">This is the second paragraph.</p>

<script>
  const firstParagraph = document.querySelector('.text');
  console.log(firstParagraph.textContent); // Output: This is the first paragraph

  const allParagraphs = document.querySelectorAll('.text');
  console.log(allParagraphs.length); // Output: 2
</script>
```

## Modifying Elements

Once elements are selected, you can modify their properties, content, or style.

### Changing Text Content

You can modify the text content of an element using the `textContent` property.

#### Example:

```html
<p id="paragraph">Original text</p>

<script>
  const paragraph = document.getElementById('paragraph');
  paragraph.textContent = 'Updated text';
</script>
```

### Changing HTML Content

You can change the inner HTML of an element using the `innerHTML` property.

#### Example:

```html
<div id="content">Old content</div>

<script>
  const content = document.getElementById('content');
  content.innerHTML = '<p>New content inside a paragraph</p>';
</script>
```

### Changing Element Style

You can modify the CSS styles of an element using the `style` property.

#### Example:

```html
<p id="paragraph">Styled text</p>

<script>
  const paragraph = document.getElementById('paragraph');
  paragraph.style.color = 'blue';
  paragraph.style.fontSize = '20px';
</script>
```

## Creating and Removing Elements

JavaScript can also create new elements and remove existing ones from the DOM.

### Creating New Elements

Use the `document.createElement()` method to create a new element, and `appendChild()` or `insertBefore()` to add it to the document.

#### Example:

```html
<div id="container"></div>

<script>
  const container = document.getElementById('container');
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This is a new paragraph';
  container.appendChild(newParagraph);
</script>
```

### Removing Elements

You can remove an element from the DOM using the `remove()` method or `removeChild()` on its parent node.

#### Example:

```html
<p id="removeMe">Remove this paragraph</p>

<script>
  const paragraph = document.getElementById('removeMe');
  paragraph.remove();
</script>
```

## Handling Events

JavaScript interacts with the DOM through **events**, which are actions that occur on elements (e.g., clicks, input changes, page loads).

### Click Event Example

You can handle events like clicks by adding event listeners using `addEventListener()`.

#### Example:

```html
<button id="myButton">Click me</button>

<script>
  const button = document.getElementById('myButton');
  
  button.addEventListener('click', function() {
    alert('Button was clicked!');
  });
</script>
```

In this example, when the button is clicked, an alert box will appear.

## Conclusion

- The **DOM** represents an HTML document as a tree of nodes.
- JavaScript can be used to **select, modify, create, and delete** elements in the DOM.
- The DOM allows dynamic interactions with a webpage by handling **events** such as clicks and inputs.



# NodeList vs HTMLCollection in JavaScript

This repository explains the differences between **NodeList** and **HTMLCollection** in JavaScript, including their properties, usage, and key differences. These two objects are often returned when querying the DOM for multiple elements, and understanding their distinctions is important for DOM manipulation.



## What is a NodeList?

A **NodeList** is a collection of DOM nodes (elements, text nodes, comments, etc.) returned when querying the DOM using methods like `querySelectorAll()` or `childNodes`. A NodeList can contain both element nodes and other types of nodes, such as text nodes or comments.

NodeLists can either be **static** or **live**, depending on how they are created. For example, `querySelectorAll()` returns a static NodeList, which does not update when the DOM changes.

### Example of a NodeList

Using `querySelectorAll()` to select all `<p>` elements:

```html
<p>First paragraph</p>
<p>Second paragraph</p>
<p>Third paragraph</p>

<script>
  const nodeList = document.querySelectorAll('p');
  console.log(nodeList); // NodeList of 3 <p> elements
  console.log(nodeList.length); // Output: 3
</script>
```

In this example, `nodeList` is a **NodeList** of all `<p>` elements in the document.

## What is an HTMLCollection?

An **HTMLCollection** is a collection of HTML elements (specifically **element nodes**) that is **live** by default. This means it automatically updates when the document structure changes. An HTMLCollection can be returned using methods like `getElementsByClassName()`, `getElementsByTagName()`, and `children`.

### Example of an HTMLCollection

Using `getElementsByClassName()` to select elements:

```html
<div class="myDiv">First div</div>
<div class="myDiv">Second div</div>
<div class="myDiv">Third div</div>

<script>
  const htmlCollection = document.getElementsByClassName('myDiv');
  console.log(htmlCollection); // HTMLCollection of 3 <div> elements
  console.log(htmlCollection.length); // Output: 3
</script>
```

In this example, `htmlCollection` is an **HTMLCollection** of all elements with the class `myDiv`.

## Key Differences Between NodeList and HTMLCollection

### Static vs Live

- **NodeList** can be either **static** or **live**:
  - **Static NodeList**: Returned by methods like `querySelectorAll()`. It does **not** update if the DOM changes.
  - **Live NodeList**: Returned by methods like `childNodes`. It updates automatically if the DOM changes.

- **HTMLCollection** is always **live**. If elements are added or removed from the DOM, the HTMLCollection automatically reflects these changes.

#### Example (Live vs Static):

```html
<div class="myDiv">First div</div>
<div class="myDiv">Second div</div>

<button id="addDiv">Add Div</button>

<script>
  const htmlCollection = document.getElementsByClassName('myDiv'); // Live HTMLCollection
  const nodeList = document.querySelectorAll('.myDiv'); // Static NodeList

  document.getElementById('addDiv').addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('myDiv');
    newDiv.textContent = 'New div';
    document.body.appendChild(newDiv);

    console.log('HTMLCollection length:', htmlCollection.length); // Output: updated length
    console.log('NodeList length:', nodeList.length); // Output: static length
  });
</script>
```

- Clicking the button adds a new `<div>` with the class `myDiv`.
- The **HTMLCollection** updates automatically and shows the new length, while the **NodeList** remains unchanged.

### Accessing Elements

- Both **NodeList** and **HTMLCollection** allow access to elements using **index-based** notation (e.g., `collection[0]`), similar to an array.

### Iteration

- **NodeList** can be directly iterated using methods like `forEach()` (if the NodeList is static) or by using a `for` loop.
- **HTMLCollection** does not support `forEach()` natively but can still be iterated using a regular `for` loop or by converting it to an array.

#### Example (Iterating Over NodeList and HTMLCollection):

```html
<div class="myDiv">First div</div>
<div class="myDiv">Second div</div>

<script>
  const nodeList = document.querySelectorAll('.myDiv');
  const htmlCollection = document.getElementsByClassName('myDiv');

  // Iterating over NodeList with forEach (supported)
  nodeList.forEach(node => console.log(node.textContent));

  // Iterating over HTMLCollection with a for loop
  for (let i = 0; i < htmlCollection.length; i++) {
    console.log(htmlCollection[i].textContent);
  }
</script>
```

### Methods Available

- **NodeList** has access to array-like methods, such as:
  - `forEach()`: Iterates through the NodeList.
  - `item()`: Returns the node at the specified index.
  - **Note**: In modern browsers, static NodeLists can use additional array-like methods such as `entries()`, `keys()`, etc.

- **HTMLCollection** does not have access to array-like methods like `forEach()` but does support:
  - `item()`: Returns the element at the specified index.
  - `namedItem()`: Returns the element with a matching `id` or `name` attribute (used in forms).

#### Example (Using item()):

```javascript
const nodeList = document.querySelectorAll('.myDiv');
const htmlCollection = document.getElementsByClassName('myDiv');

console.log(nodeList.item(0).textContent); // First div
console.log(htmlCollection.item(1).textContent); // Second div
```

## Conclusion

- **NodeList** is a collection of nodes (elements, text, etc.) and can be static or live. It supports `forEach()` and other array-like methods.
- **HTMLCollection** is a live collection of HTML elements. It updates automatically when the DOM changes and does not support `forEach()` by default.
- Both NodeList and HTMLCollection are indexable and allow access to elements by index, but they have different behaviors regarding DOM updates and available methods.

In the DOM, `NodeList` and `HTMLCollection` are array-like objects, but they don't have all the methods that arrays do (e.g., `map`, `filter`, etc.). To iterate over them or convert them to arrays, you can follow these methods:

### 1. **Iterating over `NodeList` and `HTMLCollection`**

You can use traditional loops like `for`, `for...of`, or `forEach` (for `NodeList` only).

#### For `NodeList` (using `forEach`):
```javascript
const nodeList = document.querySelectorAll('div'); // This returns a NodeList
nodeList.forEach((node) => {
  console.log(node); // You can work with each node here
});
```

#### For `NodeList` and `HTMLCollection` (using `for...of`):
```javascript
const nodeList = document.querySelectorAll('div'); // NodeList
const htmlCollection = document.getElementsByTagName('div'); // HTMLCollection

for (let node of nodeList) {
  console.log(node); // Iterate NodeList
}

for (let node of htmlCollection) {
  console.log(node); // Iterate HTMLCollection
}
```

#### Using a `for` loop (works for both `NodeList` and `HTMLCollection`):
```javascript
const htmlCollection = document.getElementsByTagName('div'); // HTMLCollection

for (let i = 0; i < htmlCollection.length; i++) {
  console.log(htmlCollection[i]); // Access each element
}
```

### 2. **Converting `NodeList` or `HTMLCollection` to an Array**

To use array methods like `map`, `filter`, etc., you can convert them to a real array.

#### Method 1: Using `Array.from()` (Recommended)
```javascript
const nodeList = document.querySelectorAll('div'); // NodeList
const nodeArray = Array.from(nodeList); // Convert to array

const htmlCollection = document.getElementsByTagName('div'); // HTMLCollection
const htmlArray = Array.from(htmlCollection); // Convert to array
```

#### Method 2: Using the Spread Operator `[...]`
```javascript
const nodeList = document.querySelectorAll('div'); // NodeList
const nodeArray = [...nodeList]; // Spread into an array

const htmlCollection = document.getElementsByTagName('div'); // HTMLCollection
const htmlArray = [...htmlCollection]; // Spread into an array
```

### 3. **Using `map` after Conversion**
```javascript
const nodeList = document.querySelectorAll('div');
const nodeArray = Array.from(nodeList);

const result = nodeArray.map((node) => {
  return node.textContent; // Example: Return text content of each node
});

console.log(result);
```

By converting `NodeList` or `HTMLCollection` into arrays, you can seamlessly use array methods like `map`, `filter`, etc.



# JavaScript Events and `addEventListener`

JavaScript events allow web pages to respond to user interactions like clicks, keyboard inputs, mouse movements, etc. The **`addEventListener`** method provides a way to assign event handlers to HTML elements dynamically, offering more flexibility than using the older `onclick`, `onmouseover`, and similar attributes.


## What is an Event?

An **event** is any interaction or occurrence that takes place in the browser that JavaScript can respond to. Examples include mouse clicks, key presses, window resizing, page loading, etc.

### How Events Work:
- **User actions** trigger events (clicks, key presses, form submissions).
- **JavaScript event handlers** (functions) listen for those events and execute specific code in response.

---

## Common JavaScript Events

Here are some of the most common events in JavaScript:

| Event Type | Description                          |
|------------|--------------------------------------|
| `click`    | Fires when an element is clicked     |
| `mouseover`| Fires when the mouse is over an element |
| `keydown`  | Fires when a key is pressed down     |
| `keyup`    | Fires when a key is released        |
| `submit`   | Fires when a form is submitted       |
| `load`     | Fires when a page or an image loads  |
| `resize`   | Fires when the window is resized     |

---

## addEventListener

The **`addEventListener`** method is the preferred way to register event handlers in modern JavaScript. It allows you to attach multiple events to a single element and provides more control over event handling than inline HTML event attributes (like `onclick`, `onmouseover`).

### Syntax

```javascript
element.addEventListener(event, handler, options);
```

- `event`: The type of event you want to listen for (e.g., `'click'`, `'mouseover'`).
- `handler`: The function that runs when the event occurs.
- `options` (optional): An object that specifies options like `capture`, `once`, and `passive`.

---

### Basic Example

Here's an example of how to use `addEventListener` to handle a button click:

#### HTML:

```html
<button id="myButton">Click Me</button>
<p id="message"></p>
```

#### JavaScript:

```javascript
const button = document.getElementById('myButton');
const message = document.getElementById('message');

// Add event listener to the button
button.addEventListener('click', function() {
  message.textContent = 'Button clicked!';
});
```

**Explanation**:
- The `addEventListener()` method is used to listen for a `click` event on the button element.
- When the button is clicked, the event handler function runs, updating the paragraph's text.

---

### Removing an Event Listener

To remove an event listener, you use the **`removeEventListener`** method. You need to provide the same event type and handler that were used to add the listener.

#### Example:

```javascript
function handleClick() {
  alert('Button clicked!');
}

// Add the event listener
button.addEventListener('click', handleClick);

// Remove the event listener
button.removeEventListener('click', handleClick);
```

**Explanation**:
- The `removeEventListener()` method removes the previously added `click` event handler.
- The function `handleClick` must be defined separately (not an anonymous function) so that it can be referenced when removing the listener.

---

## Event Object

When an event occurs, an **event object** is automatically passed to the event handler function. This object contains information about the event, such as:
- `event.type`: The type of event (e.g., `'click'`, `'keydown'`).
- `event.target`: The element that triggered the event.
- `event.preventDefault()`: Prevents the default action (e.g., stopping a form from submitting).
- `event.stopPropagation()`: Stops the event from bubbling up to parent elements.

#### Example Using the Event Object:

```javascript
button.addEventListener('click', function(event) {
  console.log('Event type:', event.type); // Output: "click"
  console.log('Target element:', event.target); // Output: <button>
});
```

**Explanation**:
- The `event` object is automatically passed to the event handler, allowing you to access detailed information about the event and control its behavior.

---

## Conclusion

- Events are a crucial part of creating interactive web pages, allowing developers to react to user actions.
- The **`addEventListener`** method is a powerful way to handle events in JavaScript, supporting multiple events per element and offering better flexibility and control than older methods.
- The **event object** gives useful information about the event and provides methods to control its propagation and default behavior.


# Event Propogation/ Event Bubbling

**Event propagation** in the DOM defines how events travel through the HTML elements in a hierarchy. It consists of three phases:

1. **Capturing phase (Event Capturing)**: The event moves from the root element (`<html>`) down towards the target element.
2. **Target phase**: The event reaches the target element (the element that was interacted with).
3. **Bubbling phase (Event Bubbling)**: The event bubbles up from the target element back up to the root element.

The most commonly discussed part of event propagation is **event bubbling**, where the event starts at the target element and then "bubbles" up to the ancestors.

### Example: Event Bubbling with Parent and Child

Imagine a simple structure of two elements where the child is nested inside the parent:

```html
<div id="parent" style="padding: 20px; background-color: lightblue;">
  Parent Element
  <button id="child">Child Button</button>
</div>
```

Here, we have a parent `<div>` and a child `<button>`.

Now, let's add event listeners to both the parent and the child to see how event bubbling works.

### JavaScript Code

```javascript
// Event listener for parent
document.getElementById('parent').addEventListener('click', function () {
  console.log('Parent clicked');
});

// Event listener for child
document.getElementById('child').addEventListener('click', function (event) {
  console.log('Child clicked');
});
```

### What Happens When You Click the Child Button?

1. **Child Clicks First**: When you click the button (`#child`), the event triggers on the child first. This is called the **target phase**.
2. **Bubbling Up to Parent**: After the child, the event **bubbles up** to the parent element (`#parent`), triggering its event listener as well.

So, in the console, you will see:
```
Child clicked
Parent clicked
```

This demonstrates **event bubbling**, where the event first happens on the target (`#child`) and then propagates up to the parent (`#parent`).

### Stopping Event Bubbling
If you want to stop the event from propagating to parent elements, you can use `event.stopPropagation()`.

#### Example:

```javascript
document.getElementById('child').addEventListener('click', function (event) {
  console.log('Child clicked');
  event.stopPropagation(); // Prevents the event from bubbling up
});
```

Now, when you click the child button, the event will not propagate to the parent, and you'll only see:
```
Child clicked
```

### Capturing Phase (Optional)

If you want to handle events during the **capturing phase** (before the bubbling), you can pass an additional argument `true` to the `addEventListener` function. This makes the listener run during the capturing phase instead of bubbling.

```javascript
document.getElementById('parent').addEventListener(
  'click',
  function () {
    console.log('Parent clicked during capturing');
  },
  true // Capturing phase
);
```

When you click the child button now, the parent will handle the event first during the capturing phase, followed by the child in the target phase:
```
Parent clicked during capturing
Child clicked
```

### Summary of Event Propagation:

1. **Event Capturing (optional)**: The event moves from the outermost element (e.g., `document`) to the target.
2. **Target Phase**: The event occurs on the target element.
3. **Event Bubbling**: The event bubbles back up to the ancestors of the target.

`event.stopPropagation()` can stop this bubbling if needed.


### 11. **Closures and Scope**
   - **Closure**: Functions remember the environment in which they were created.
     ```js
     function outer() {
       let counter = 0;
       return function() {
         counter++;
         return counter;
       }
     }
     const increment = outer();
     increment(); // 1
     increment(); // 2
     ```
   - **Scope**: Block, function, and global scope.

 

# Closures and Scope in JavaScript

**Closures** and **Scope** are two foundational concepts in JavaScript that play a significant role in how variables and functions behave. Understanding these concepts is crucial for mastering JavaScript, especially when dealing with asynchronous code, function execution, and memory management.



## What is Scope?

**Scope** in JavaScript refers to the visibility and accessibility of variables and functions at different parts of the code. JavaScript has three main types of scope:
- **Global Scope**
- **Local (Function) Scope**
- **Block Scope**

### Global Scope

Variables or functions defined in the global scope are accessible from anywhere in the program. These are declared outside any function or block.

#### Example:

```javascript
var globalVar = "I'm a global variable!";

function showGlobal() {
  console.log(globalVar); // Accessible inside the function
}

showGlobal(); // Output: I'm a global variable!
console.log(globalVar);   // Accessible globally: Output: I'm a global variable!
```

### Local Scope (Function Scope)

Variables defined inside a function are scoped to that function, meaning they are not accessible outside it.

#### Example:

```javascript
function showLocal() {
  var localVar = "I'm a local variable!";
  console.log(localVar); // Accessible inside the function
}

showLocal(); // Output: I'm a local variable!
console.log(localVar);   // Error: localVar is not defined (not accessible outside the function)
```

### Block Scope

Variables declared with `let` or `const` inside a block (e.g., within `{}`) are scoped to that block. Block-scoped variables cannot be accessed outside the block they are defined in.

#### Example:

```javascript
if (true) {
  let blockScoped = "I'm block-scoped!";
  console.log(blockScoped); // Output: I'm block-scoped!
}

console.log(blockScoped); // Error: blockScoped is not defined (not accessible outside the block)
```

---

## What is a Closure?

A **closure** is a feature in JavaScript where an **inner function** has access to variables in its **outer function's scope** even after the outer function has finished executing. Closures allow a function to "remember" the scope in which it was created.

In other words, a closure gives access to an outer function’s scope from an inner function, even after the outer function has returned.

### Basic Example of a Closure

```javascript
function outerFunction() {
  let outerVar = "I'm from outer scope";

  function innerFunction() {
    console.log(outerVar); // Access outerVar from the outer scope
  }

  return innerFunction;
}

const myClosure = outerFunction(); // outerFunction returns innerFunction
myClosure(); // Output: I'm from outer scope
```

**Explanation**:
- The `innerFunction` retains access to `outerVar` even after `outerFunction` has completed execution. This is because of the closure.

### Closures in Practice

Closures are commonly used when you want to **preserve state** or **create private variables**.

#### Example:

```javascript
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

**Explanation**:
- The `count` variable is preserved inside the closure, and each time the returned function is called, it updates and remembers the state of `count`.

---

## Advantages of Closures

1. **Data Encapsulation**: Closures allow you to encapsulate data in a function scope, providing a way to store private variables.
2. **Preserve State**: Closures allow a function to "remember" the state of variables between executions.
3. **Higher-Order Functions**: Many higher-order functions, such as `map()`, `filter()`, and `reduce()`, rely on closures to work with functions that maintain access to their original scope.

---

## Common Use Cases of Closures

1. **Data Privacy**: Closures are used to create private variables in JavaScript (variables that are not accessible from outside a function).
   
   ```javascript
   function secret() {
     let privateData = "Hidden value";

     return function() {
       return privateData;
     };
   }

   const getPrivateData = secret();
   console.log(getPrivateData()); // Output: Hidden value
   ```

2. **Event Handlers and Callbacks**: Closures are useful when working with asynchronous callbacks.

   ```javascript
   function eventListenerSetup() {
     let eventCount = 0;

     document.addEventListener('click', function() {
       eventCount++;
       console.log(`Click count: ${eventCount}`);
     });
   }

   eventListenerSetup();
   ```

3. **Factory Functions**: You can use closures in factory functions to create instances of a function with different private states.

   ```javascript
   function createPerson(name) {
     return {
       sayHello: function() {
         console.log(`Hello, my name is ${name}`);
       }
     };
   }

   const person1 = createPerson('Alice');
   const person2 = createPerson('Bob');

   person1.sayHello(); // Output: Hello, my name is Alice
   person2.sayHello(); // Output: Hello, my name is Bob
   ```

---

## Conclusion

- **Scope** determines where variables and functions are accessible in your code. It includes **global**, **local**, and **block scope**.
- **Closures** are created when an inner function retains access to its outer function's variables, even after the outer function has finished execution.
- Closures are incredibly powerful for preserving state, encapsulating data, and implementing patterns like factory functions and event handlers.

Understanding these concepts will help you write more efficient and maintainable JavaScript code.


### 12. **Hoisting**
   - Variables and function declarations are hoisted to the top of their scope before code execution.



# JavaScript Hoisting

**Hoisting** is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution. This means that you can use variables and functions before they are declared in your code.

In this document, we’ll explain:
- What hoisting is
- How it works with variables
- How it works with functions
- The difference between `var`, `let`, and `const` in hoisting
- Key points to remember about hoisting


## What is Hoisting?

In JavaScript, **hoisting** refers to the behavior where variable and function declarations are moved to the top of their scope (global or function scope) during the compilation phase. However, **only the declarations** are hoisted, not the actual assignments or initializations.

This allows you to reference variables or functions before they are declared in the code.

---

## Hoisting with Variables

### Using `var`

When you declare a variable with `var`, the **declaration** is hoisted to the top of its scope, but the **initialization** remains in place. This means the variable will exist, but its value will be `undefined` until the line of initialization is reached.

#### Example with `var`:

```javascript
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10
```

**Explanation**:
- The declaration `var myVar` is hoisted to the top of the scope, so the code behaves as if it were written like this:

```javascript
var myVar;
console.log(myVar); // undefined (since the initialization hasn't happened yet)
myVar = 10;
console.log(myVar); // 10
```

### Using `let` and `const`

With `let` and `const`, the declaration is also hoisted, but these variables are placed in a **temporal dead zone (TDZ)** until they are initialized. This means you cannot access them before the line where they are initialized.

#### Example with `let`:

```javascript
console.log(myLet); // Error: Cannot access 'myLet' before initialization
let myLet = 20;
console.log(myLet); // Output: 20
```

#### Example with `const`:

```javascript
console.log(myConst); // Error: Cannot access 'myConst' before initialization
const myConst = 30;
console.log(myConst); // Output: 30
```

**Explanation**:
- The `let` and `const` declarations are hoisted, but accessing them before initialization will result in a `ReferenceError`.

---

## Hoisting with Functions

### Function Declarations

Function declarations are **completely hoisted**, meaning both the function name and its definition are moved to the top of the scope. This allows you to call a function before it’s defined.

#### Example with Function Declaration:

```javascript
sayHello(); // Output: Hello, world!

function sayHello() {
  console.log('Hello, world!');
}
```

**Explanation**:
- The entire function `sayHello` is hoisted, so it can be called before its declaration in the code.

### Function Expressions

Function expressions are treated like variables. If you define a function using a variable (`var`, `let`, or `const`), the variable is hoisted but the function itself is **not hoisted**.

#### Example with Function Expression (`var`):

```javascript
sayGoodbye(); // Output: TypeError: sayGoodbye is not a function

var sayGoodbye = function() {
  console.log('Goodbye, world!');
};

sayGoodbye(); // Output: Goodbye, world!
```

**Explanation**:
- The `var sayGoodbye` declaration is hoisted, but the function assignment (`function() {...}`) is not. Therefore, before the assignment, `sayGoodbye` is `undefined`, and trying to call it results in a `TypeError`.

#### Example with Function Expression (`let` or `const`):

```javascript
sayGoodbye(); // Error: Cannot access 'sayGoodbye' before initialization

const sayGoodbye = function() {
  console.log('Goodbye, world!');
};

sayGoodbye(); // Output: Goodbye, world!
```

**Explanation**:
- Just like `let` and `const` with variables, function expressions declared with `let` or `const` are placed in the **temporal dead zone** and cannot be accessed before initialization.

---

## Key Points About Hoisting

1. **Variable Declarations**:
   - Variables declared with `var` are hoisted to the top of their scope, but their values are `undefined` until they are assigned.
   - Variables declared with `let` and `const` are also hoisted but are in the **temporal dead zone** until initialized, resulting in a `ReferenceError` if accessed before initialization.

2. **Function Declarations**:
   - Entire function declarations (including their body) are hoisted, allowing them to be called before they appear in the code.

3. **Function Expressions**:
   - Function expressions behave like variables and are not hoisted. You cannot call a function expression before it is defined.

---

## Conclusion

Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the compilation phase. While `var` declarations are hoisted with their initial value as `undefined`, `let` and `const` declarations are hoisted but kept in a **temporal dead zone** until they are initialized. Function declarations are fully hoisted, but function expressions follow variable hoisting rules.

Understanding hoisting helps you write better code and avoid unexpected issues in variable or function usage. 



### 13. **Event Loop & Callbacks**
   - JavaScript is single-threaded and asynchronous. The event loop handles async callbacks using the call stack and task queue.



# JavaScript Event Loop and Callbacks

JavaScript is single-threaded, meaning it executes code sequentially on a single main thread. To handle asynchronous operations like fetching data from a server or handling user input, JavaScript uses a system known as the **event loop**. This system works in conjunction with **callbacks** to handle these operations without blocking the main thread.

In this document, we’ll explore:
- What the event loop is
- How it works with asynchronous code
- How callbacks function
- A diagram of the event loop and examples to demonstrate the concepts



## What is the Event Loop?

The **event loop** is a mechanism in JavaScript that handles asynchronous tasks, making it possible for JavaScript to perform non-blocking I/O operations, even though JavaScript is single-threaded. The event loop allows asynchronous operations (such as network requests, file reads, and timers) to be executed without blocking the main thread.

### How the Event Loop Works

- JavaScript has a **call stack**, which is where function executions are added.
- It also has a **task queue** (or **callback queue**) where asynchronous operations (like network requests or timers) place their callbacks once they are complete.
- The **event loop** continuously monitors the call stack and the task queue. When the call stack is empty, it pushes the first callback from the task queue into the call stack, executing it.

### Event Loop Example

#### Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 2000);

console.log("End");
```

**Expected Output**:
```
Start
End
Timeout
```

**Explanation**:
- **`console.log("Start")`** is added to the call stack and executed immediately.
- The **`setTimeout()`** function is asynchronous. After 2000ms, its callback function is placed into the task queue.
- **`console.log("End")`** is added to the call stack and executed immediately.
- After the call stack is empty, the event loop picks the callback from the task queue (after 2 seconds) and executes it.

---

## What is a Callback?

A **callback** is a function passed as an argument to another function. It allows a function to be executed after another function has finished execution or after an asynchronous operation has completed. Callbacks are a fundamental part of asynchronous programming in JavaScript.

### Callback Example

#### Synchronous Callback Example:

```javascript
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("John", sayGoodbye);
```

**Expected Output**:
```
Hello John
Goodbye!
```

**Explanation**:
- The `greet` function takes two arguments: a string (`name`) and a callback function (`callback`).
- The `greet` function first logs `"Hello John"`, then immediately calls the `sayGoodbye` function as the callback.

### Asynchronous Callback Example

#### Example:

```javascript
console.log("Fetching data...");

setTimeout(() => {
  console.log("Data fetched successfully!");
}, 3000);

console.log("Doing something else...");
```

**Expected Output**:
```
Fetching data...
Doing something else...
Data fetched successfully!
```

**Explanation**:
- `console.log("Fetching data...")` is executed immediately.
- The `setTimeout()` function introduces a delay of 3 seconds, after which the callback function is placed into the task queue.
- In the meantime, `console.log("Doing something else...")` is executed.
- After 3 seconds, the event loop picks the callback from the task queue and executes it, logging `"Data fetched successfully!"`.

---

## Event Loop Diagram

Below is a simplified description of how the event loop interacts with the call stack and the task queue:

1. **Call Stack**: This is where function calls are made and executed.
2. **Web APIs**: Handles asynchronous operations like timers, network requests, and DOM events.
3. **Task Queue**: After asynchronous operations complete, their callbacks are added to the task queue.
4. **Event Loop**: Continuously checks if the call stack is empty. If it is, it moves callbacks from the task queue to the call stack for execution.

```
         +----------------------+
         |    Call Stack         |
         +----------------------+
                   |
                   | (empty?)
                   |
                   v
         +----------------------+
         |    Event Loop         |
         +----------------------+
                   |
                   v
         +----------------------+
         |     Task Queue        |
         +----------------------+
```

---

## Conclusion

- The **event loop** is a fundamental part of JavaScript’s concurrency model, allowing it to perform non-blocking asynchronous tasks despite being single-threaded.
- **Callbacks** are functions that are passed as arguments to other functions and are executed once a specific task is completed.
- Understanding how the event loop, call stack, and callbacks work together is crucial for writing efficient asynchronous code in JavaScript.



# JavaScript Classes, OOP Concepts, Prototypes, and Prototypal Inheritance

JavaScript is an object-oriented programming (OOP) language that uses **prototypal inheritance**. It allows objects to inherit properties and methods from other objects. In this document, we'll explore:
- **OOP Concepts** in JavaScript
- What **Classes** are and how they work
- Understanding **Prototypes** and **Prototypal Inheritance**



## OOP Concepts in JavaScript

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which are instances of classes. JavaScript implements OOP concepts in its own way.

### Key OOP Concepts:
1. **Encapsulation**: Grouping related properties and methods into objects.
2. **Inheritance**: Objects can inherit properties and methods from other objects (or classes).
3. **Abstraction**: Hiding the complexity by exposing only necessary parts of the object.
4. **Polymorphism**: Objects can share methods while using them in different ways, typically through method overriding.

---

## JavaScript Classes

Classes in JavaScript are syntactical sugar over JavaScript's prototypal inheritance. They allow us to create objects and implement inheritance in a cleaner and more intuitive way.

### Class Syntax

A **class** is defined using the `class` keyword. You can define constructors (for initializing objects), methods, and properties.

#### Basic Class Syntax:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

### Class Example

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log(`${this.brand} ${this.model}'s engine has started!`);
  }
}

const myCar = new Car("Toyota", "Corolla");
myCar.startEngine(); // Output: Toyota Corolla's engine has started!
```

### Inheritance with Classes

Classes can extend other classes using the `extends` keyword. This allows the child class to inherit properties and methods from the parent class.

#### Example of Inheritance:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the parent class constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks!`);
  }
}

const myDog = new Dog("Rex", "Labrador");
myDog.speak(); // Output: Rex barks!
```

**Explanation**:
- `Dog` class extends the `Animal` class and inherits its properties.
- The `super()` method is used to call the parent class constructor.

---

## Prototypes in JavaScript

JavaScript uses **prototypes** to implement inheritance. Every object in JavaScript has a prototype. When trying to access a property or method of an object, JavaScript will look for it on the object itself first. If it doesn’t find it, it will search for it on the object's prototype.

### Prototype Example

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, I am ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, I am Alice and I am 25 years old.
```

**Explanation**:
- We created a `Person` constructor function.
- Added the `greet` method to `Person.prototype` so all instances of `Person` will inherit it.

### Adding Methods to a Prototype

You can dynamically add methods to any object's prototype, and all instances will have access to the new methods.

#### Example:

```javascript
Person.prototype.sayGoodbye = function() {
  console.log(`${this.name} says goodbye!`);
};

person1.sayGoodbye(); // Output: Alice says goodbye!
```

---

## Prototypal Inheritance

Prototypal inheritance refers to the ability of an object to inherit properties and methods from another object through the prototype chain.

### Inheritance Example

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Call the parent constructor
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype); // Inherit Animal's prototype
Dog.prototype.constructor = Dog; // Correct the constructor

Dog.prototype.speak = function() {
  console.log(`${this.name} barks!`);
};

const dog1 = new Dog("Buddy", "Golden Retriever");
dog1.speak(); // Output: Buddy barks!
```

**Explanation**:
- The `Dog` constructor calls the `Animal` constructor to inherit its properties.
- `Dog.prototype` is set to inherit from `Animal.prototype`, enabling `Dog` to inherit the `speak` method.
- We then override the `speak` method in the `Dog` prototype.

---

## Key Differences Between Classical and Prototypal Inheritance

1. **Classical Inheritance** (used in many languages like Java, C#):
   - Inheritance occurs through class definitions.
   - Instances are created from blueprints (classes).

2. **Prototypal Inheritance** (JavaScript):
   - Inheritance occurs through objects.
   - Objects inherit directly from other objects via prototypes.

---

## Conclusion

- **Classes** in JavaScript provide a cleaner syntax for creating objects and managing inheritance, though under the hood they still rely on prototypes.
- **Prototypes** form the foundation of JavaScript's object model and inheritance system.
- **Prototypal inheritance** allows objects to inherit directly from other objects, making JavaScript's inheritance model highly flexible.

Understanding classes, prototypes, and inheritance concepts in JavaScript is essential for working with objects and applying object-oriented programming principles effectively.



# JavaScript Getters, Setters, and Static Properties

JavaScript provides mechanisms to define special methods for accessing and modifying properties in objects using **getters** and **setters**. It also allows defining **static properties** on classes, which are properties that belong to the class itself rather than instances of the class.

This document will cover:
- **Getters**: Methods to access object properties.
- **Setters**: Methods to set or modify object properties.
- **Static Properties**: Properties that are defined on the class itself, not on its instances.



## Getters in JavaScript

A **getter** is a method that allows you to bind a property to a function that will be executed when the property is accessed. This allows you to define custom logic to retrieve the value of a property.

### Syntax:

To define a getter, use the `get` keyword before the method.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person1 = new Person("John", "Doe");
console.log(person1.fullName); // Output: John Doe
```

### Explanation:
- The `get` keyword is used to define a getter for the `fullName` property.
- When `person1.fullName` is accessed, the getter method runs and returns the concatenated `firstName` and `lastName`.

---

## Setters in JavaScript

A **setter** is a method that allows you to bind a property to a function that will be executed when the property is modified. Setters allow you to define custom logic when setting the value of a property.

### Syntax:

To define a setter, use the `set` keyword before the method.

```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Setter for fullName
  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

const person1 = new Person("John", "Doe");
console.log(person1.fullName); // Output: John Doe

person1.fullName = "Jane Smith";
console.log(person1.fullName); // Output: Jane Smith
console.log(person1.firstName); // Output: Jane
console.log(person1.lastName); // Output: Smith
```

### Explanation:
- The `set` keyword is used to define a setter for the `fullName` property.
- When `person1.fullName = "Jane Smith"` is executed, the setter method splits the string and updates `firstName` and `lastName` accordingly.

---

## Static Properties in JavaScript

**Static properties** are properties that belong to the class itself rather than to instances of the class. Static properties are accessed using the class name and cannot be accessed by instances of the class.

### Syntax:

To define a static property, use the `static` keyword before the property.

```javascript
class Calculator {
  static pi = 3.14159;

  static calculateArea(radius) {
    return Calculator.pi * radius * radius;
  }
}

console.log(Calculator.pi); // Output: 3.14159
console.log(Calculator.calculateArea(5)); // Output: 78.53975
```

### Explanation:
- The `static` keyword is used to define a static property `pi` on the `Calculator` class.
- Static properties can only be accessed via the class (`Calculator.pi`) and not via instances of the class.

### More about static methods:
- Static methods are similar to static properties and are defined using the `static` keyword. They can be called without creating an instance of the class.

#### Static Method Example:

```javascript
class MathUtility {
  static square(num) {
    return num * num;
  }
}

console.log(MathUtility.square(4)); // Output: 16
```

---

## Conclusion

- **Getters** are used to access object properties with custom logic, offering a clean way to retrieve values dynamically.
- **Setters** allow for controlled setting of object properties, enabling validation or transformation of input values.
- **Static Properties** and methods belong to the class itself and are shared by all instances, rather than being instance-specific.

Getters, setters, and static properties are powerful features in JavaScript that provide better control over object properties and class-level data or behavior.



# JavaScript Currying

**Currying** is a functional programming technique where a function is transformed into a sequence of nested functions, each taking a single argument. This allows you to break down a function that takes multiple arguments into a series of functions that each take one argument.

This document will cover:
- What is Currying?
- Why use Currying?
- How to implement Currying in JavaScript
- Examples of Currying



## What is Currying?

Currying is the process of converting a function with multiple arguments into a series of functions that each take a single argument. For example, a function that takes three arguments can be transformed into three functions, each taking one argument.

### Example:

A regular function:

```javascript
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3)); // Output: 6
```

Using currying, this can be transformed into:

```javascript
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // Output: 6
```

---

## Why Use Currying?

1. **Partial Application**: Currying allows you to create functions with preset arguments, making it easier to create specialized functions.
2. **Function Reusability**: Curried functions can be reused with different arguments.
3. **Improved Readability**: It can enhance code readability by breaking down complex functions into simpler, smaller functions.

---

## Implementing Currying in JavaScript

You can implement currying in JavaScript using various techniques. Here’s a common way to create a curry function:

### Currying Function Implementation:

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...args2) {
      return curried(...args, ...args2);
    };
  };
}
```

### Explanation:
- The `curry` function takes a function `fn` as its argument.
- It returns a new function `curried` that collects arguments until the number of provided arguments matches the number of expected arguments (`fn.length`).
- If enough arguments are provided, it calls the original function `fn`. Otherwise, it returns another function to collect more arguments.

---

## Examples of Currying

### Example 1: Adding Numbers

```javascript
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3));  // Output: 6
console.log(curriedAdd(1, 2, 3));  // Output: 6
```

### Example 2: Greeting Function

```javascript
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

const curriedGreet = curry(greet);

console.log(curriedGreet("Hello")("Alice")); // Output: Hello, Alice!
console.log(curriedGreet("Hi", "Bob"));       // Output: Hi, Bob!
```

### Example 3: Configurable Multiplier

```javascript
function multiply(a, b) {
  return a * b;
}

const curriedMultiply = curry(multiply);

const double = curriedMultiply(2); // Partially applying 2
console.log(double(5)); // Output: 10
console.log(double(10)); // Output: 20
```

---

## Conclusion

Currying is a powerful technique in JavaScript that allows you to break down functions into smaller, reusable pieces. It enhances code readability, facilitates partial application, and promotes function reusability. Understanding and implementing currying can significantly improve your functional programming skills in JavaScript.



# JavaScript Call, Apply, and Bind

In JavaScript, functions are first-class objects, which means they can be treated like any other object. The `call`, `apply`, and `bind` methods are used to control the execution context of functions, allowing you to set the value of `this` within a function. Understanding these methods is crucial for effective function manipulation.


## The call Method

The `call` method allows you to invoke a function with a specified `this` value and individual arguments. 

### Syntax:

```javascript
func.call(thisArg, arg1, arg2, ...);
```

### Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Alice" };

greet.call(person, "Hello", "!"); // Output: Hello, Alice!
```

### Explanation:
- The `greet` function is called with `this` set to the `person` object.
- The arguments `"Hello"` and `"!"` are passed directly to the function.

---

## The apply Method

The `apply` method is similar to `call`, but it takes an array of arguments instead of individual arguments.

### Syntax:

```javascript
func.apply(thisArg, [argsArray]);
```

### Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Bob" };

greet.apply(person, ["Hi", "."]); // Output: Hi, Bob.
```

### Explanation:
- The `greet` function is invoked with `this` set to the `person` object.
- The arguments are passed as an array.

---

## The bind Method

The `bind` method returns a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

### Syntax:

```javascript
const newFunc = func.bind(thisArg, arg1, arg2, ...);
```

### Example:

```javascript
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Charlie" };

const greetCharlie = greet.bind(person, "Good morning");
greetCharlie("!"); // Output: Good morning, Charlie!
```

### Explanation:
- The `greet` function is bound to the `person` object.
- The first argument is set to `"Good morning"` while waiting for the second argument to be provided when calling `greetCharlie`.

---

## Comparing Call, Apply, and Bind

| Method | Description | Arguments | Returns |
|--------|-------------|-----------|---------|
| **call** | Calls a function with a specified `this` value and arguments provided individually. | Individual arguments. | The result of the function call. |
| **apply** | Calls a function with a specified `this` value and arguments provided as an array. | An array of arguments. | The result of the function call. |
| **bind** | Creates a new function with a specified `this` value and optional arguments. | Individual arguments. | A new function. |

### Example Comparison:

```javascript
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

const person1 = { name: "David" };
const person2 = { name: "Eva" };

// Using call
introduce.call(person1, "Hello", "!"); // Output: Hello, I am David!

// Using apply
introduce.apply(person2, ["Hi", "."]); // Output: Hi, I am Eva.

// Using bind
const introduceDavid = introduce.bind(person1, "Good evening");
introduceDavid("!"); // Output: Good evening, I am David!
```

---

## Conclusion

Understanding how to use `call`, `apply`, and `bind` is essential for managing function contexts in JavaScript. They provide powerful ways to control how functions are invoked and with what data, allowing for more flexible and reusable code.


In JavaScript, the concepts of **shallow copy** and **deep copy** refer to how objects are duplicated and how they handle references to nested objects.

### Shallow Copy

A **shallow copy** creates a new object but does not create copies of nested objects. Instead, it copies references to those nested objects. As a result, changes to nested objects in the copied object will affect the original object and vice versa.

**Example of Shallow Copy:**

```javascript
const original = {
    name: "Alice",
    age: 25,
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

// Create a shallow copy using Object.assign
const shallowCopy = Object.assign({}, original);

// Create another shallow copy using spread operator
const shallowCopy2 = { ...original };

// Modify the nested object in the shallow copy
shallowCopy.address.city = "New City";

console.log(original.address.city); // Output: "New City"
console.log(shallowCopy.address.city); // Output: "New City"
```

In this example, changing the city in `shallowCopy` also affects `original`, demonstrating that they share the same reference to the nested `address` object.

### Deep Copy

A **deep copy** creates a new object and recursively copies all nested objects, ensuring that there are no shared references between the original and the copied object. Changes made to nested objects in the deep copy do not affect the original object.

**Example of Deep Copy:**

To create a deep copy, you can use methods like `JSON.parse` and `JSON.stringify`, or libraries like Lodash.

**Using JSON methods:**

```javascript
const original = {
    name: "Alice",
    age: 25,
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

// Create a deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(original));

// Modify the nested object in the deep copy
deepCopy.address.city = "New City";

console.log(original.address.city); // Output: "Wonderland"
console.log(deepCopy.address.city); // Output: "New City"
```

In this example, changing the city in `deepCopy` does not affect `original`, indicating that they are completely independent objects.

### Summary

- **Shallow Copy**: Copies an object and its first-level properties. Nested objects are shared references.
- **Deep Copy**: Recursively copies all objects, creating independent copies of nested objects.

Using shallow and deep copies appropriately is essential for managing object states in JavaScript, especially when working with complex data structures.
