# Assignment 01: Your First JavaScript Script

## Aim
To understand how to run JavaScript code in a web browser and with Node.js, and to learn how to declare variables using `const` and `let`.

## Theory

### 1. Introduction to JavaScript
JavaScript is a programming language used to make web pages interactive and dynamic. It can run in web browsers as well as outside the browser using Node.js.

### 2. JavaScript in HTML
JavaScript code can be written inside the `<script>` tag in an HTML document. The `console.log()` method is used to display messages in the browser console.

For example:
`console.log("Hello from the script");`

### 3. Variables in JavaScript
Variables are used to store data values.

JavaScript provides different ways to declare variables:

- `let`: Used to declare a variable whose value can be changed.
- `const`: Used to declare a variable whose value cannot be reassigned.

For example:
`const schoolName = "Sample College";`

`let year = 2026;`

### 4. Data Types and typeof Operator
JavaScript supports different data types, such as:

- String: Represents text.
- Number: Represents numeric values.
- Boolean: Represents true or false values.

The `typeof` operator is used to identify the data type of a value.

For example:
- `typeof "hello"` returns string.
- `typeof 7` returns number.
- `typeof true` returns boolean.

### 5. Node.js
Node.js is a JavaScript runtime environment that allows JavaScript programs to run outside a web browser. JavaScript files can be executed using the `node` command.

## Tasks
1. Create an HTML page with a script tag inside the body that displays the message "Hello from the script" using `console.log()`. Open the page in a browser and check the console using F12.
2. Create a JavaScript program with a constant `schoolName` having the value "Sample College" and a `let` variable `year` having the value 2026. Print both values on separate lines and run the program using Node.js.
3. Create a JavaScript program that prints the data types of the text "hello", the number 7, and the value true using the `typeof` operator. Run the program using Node.js.

## Conclusion
This assignment introduces the basics of JavaScript programming. It explains how to execute JavaScript in a browser and through Node.js, how to declare variables using `let` and `const`, and how to identify data types using the `typeof` operator.