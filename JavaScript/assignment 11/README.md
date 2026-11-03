# Assignment 11: Scope and Closures

## Aim
To understand variable scope, block scope, global scope, and closures in JavaScript.

## Theory

### 1. Variable Scope
Scope determines where a variable can be accessed in a JavaScript program.

JavaScript mainly supports:
- Global Scope
- Function Scope
- Block Scope

### 2. Global Scope
A variable declared outside all functions and blocks is called a global variable. It can be accessed from different parts of the program.

### 3. Block Scope
Variables declared using let and const inside a block {} can only be accessed within that block.

### 4. Closures
A closure is created when an inner function remembers and accesses variables from its outer function, even after the outer function has finished executing.

For example, a counter function can maintain its count using a closure.

## Tasks
1. Declare an outer variable and an inner variable with the same name. Display both values to understand block scope.
2. Create a makeCounter() function that returns another function to increase and display a counter value. Call the returned function twice.
3. Declare a global variable named school and access it inside a function named showSchool() to print Welcome to followed by the school name.

## Conclusion
This assignment explains how JavaScript manages variable accessibility through different types of scope and how closures allow functions to remember variables from their outer environment.