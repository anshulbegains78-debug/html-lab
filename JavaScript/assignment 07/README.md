# Assignment 07: Constructor Functions and Classes

## Aim
To understand constructor functions, ES6 classes, objects, and prototype methods in JavaScript.

## Theory

### 1. Constructor Functions
A constructor function is a special type of function used to create multiple objects with similar properties.

It is generally called using the new keyword.

### 2. Creating Objects
Objects can be created using constructor functions. Each object can store its own values for properties such as name and marks.

### 3. ES6 Classes
Classes provide a structured way to create objects in JavaScript. They act as templates for creating objects with properties and methods.

### 4. Constructor Method
The constructor() method is automatically called when a new object is created from a class. It is used to initialize object properties.

### 5. Prototype
JavaScript objects can share methods through prototypes. A method added to a constructor's prototype can be accessed by objects created using that constructor.

## Tasks
1. Create a constructor function Student that takes a name and marks and saves them on the object. Create a student named Asha with marks 88 and print her name and marks on separate lines.
2. Create an ES6 class Book that takes a title and pages, and a summary method that returns the title, has, the page count and pages, with spaces. Create the book Algorithms with 320 pages and print its summary.
3. Write a constructor function Student that stores a name and marks. Add a method result to Student.prototype that returns Pass for marks of 40 or more and Fail otherwise. Create a student Asha with marks 88 and print her result.

## Conclusion
This assignment explains how JavaScript objects can be created using constructor functions and ES6 classes. It also demonstrates how prototype methods can be shared between objects.