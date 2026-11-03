# Assignment 08: Inheritance, Methods and Composition

## Aim
To understand inheritance, class methods, and object composition in JavaScript.

## Theory

### 1. Inheritance
Inheritance is an object-oriented programming concept in which one class can acquire properties and methods from another class.

It helps in reusing existing code and reducing repetition.

### 2. extends Keyword
The extends keyword is used to create a child class from a parent class.

For example:
class Teacher extends Person {
}

### 3. Methods in Classes
Methods are functions defined inside a class. They describe the actions that objects created from that class can perform.

### 4. Composition
Composition is a programming technique in which one object contains another object as a property.

It helps organize complex programs by combining smaller objects.

### 5. Boolean Values
Boolean values represent true or false. They are useful for checking conditions, such as whether an entered PIN matches the stored PIN.

## Tasks
1. Create a class Person whose method greet returns Hi, I am followed by the name. Create a class Teacher that extends Person and adds a subject. Create Anita, who teaches Maths, and print her greeting.
2. Create a class Locker with PIN 1234 and a method checkPin that returns true if its number equals the PIN, otherwise false. Create a Locker and print checkPin(1111) and checkPin(1234), one per line.
3. Create classes Engine and Car. Engine stores a power, while Car holds an Engine created from its power. Add a start() method that returns Car starts with, the power and HP. Create a Car with power 150 and print start().

## Conclusion
This assignment demonstrates inheritance and composition in JavaScript. It explains how classes can reuse methods from other classes and how objects can be combined to create more organized programs.