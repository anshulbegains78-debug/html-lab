# Assignment 15: Promises and async/await with Local Data

## Aim
To understand JavaScript Promises, asynchronous programming, async/await, and error handling using local data.

## Theory

### 1. Promises
A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

A Promise can have three states:
- Pending
- Fulfilled
- Rejected

### 2. Promise Resolve and Reject
The resolve() method is used when an asynchronous operation completes successfully.

The reject() method is used when an operation fails or encounters an error.

### 3. Async Function
The async keyword is used to declare an asynchronous function. An async function always returns a Promise.

### 4. Await Keyword
The await keyword pauses the execution of an async function until a Promise is settled.

It makes asynchronous code easier to read and understand.

### 5. Error Handling
The try...catch statement is used to handle errors in asynchronous operations.

The try block contains the code that may produce an error, while the catch block handles that error.

### 6. Local Data
Local data refers to information stored directly within a program. Promises can be used to process and return this data asynchronously.

## Tasks
1. Create a checkMarks() function that returns a Promise. It should resolve marks when the value is between 0 and 100 and reject with an Error saying Marks out of range otherwise. Call checkMarks with 80 and print the value.
2. Call checkMarks with 120 marks and print the error message when the Promise is rejected.
3. Create an async function named run() that uses await and try...catch to print the result of checkMarks(65), then checkMarks(-5). In the catch block, print Caught: followed by the error message. Call run().
4. Create a getUsers() function that returns a Promise resolving after 100 milliseconds with three local users having IDs and names Asha, Rohan and Meera. Write an async function that awaits getUsers() and prints each name, then call it.

## Conclusion
This assignment demonstrates how JavaScript handles asynchronous operations using Promises and async/await. It also explains how errors can be managed using try...catch and how local data can be processed asynchronously.