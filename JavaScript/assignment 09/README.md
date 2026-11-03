# Assignment 09: DOM, Validation, Storage and Quiz

## Aim
To understand how JavaScript interacts with HTML pages using the DOM, validates form data, stores information in localStorage, and creates a simple quiz.

## Theory

### 1. Document Object Model (DOM)
The DOM represents an HTML document as a tree of objects. JavaScript can use the DOM to access and modify page elements.

### 2. Changing HTML Content
JavaScript can change the text of an HTML element using properties such as textContent.

It can also respond to user actions such as button clicks.

### 3. Event Handling
An event is an action that occurs in a web page, such as clicking a button or entering text.

JavaScript can respond to events using event handlers and addEventListener().

### 4. Form Validation
Form validation is the process of checking user input before accepting it.

For example, a program can check whether a name field is empty and display an appropriate error message.

### 5. Local Storage
localStorage is a browser feature used to store data as key-value pairs. The stored information remains available even after the browser page is refreshed.

Common methods include:
- localStorage.setItem()
- localStorage.getItem()

### 6. Radio Buttons and Quiz
Radio buttons allow users to select one option from a group of choices. JavaScript can check the selected option and display the result.

## Tasks
1. Create a page with a heading containing the text Welcome and a button labelled Change text. When the button is clicked, change the heading text to Button clicked.
2. Create a function validateForm(name) that returns a list of errors and adds Name is required when the name is empty. Print validateForm for Asha and then for an empty name.
3. Create a page with a text box and a Save button. When Save is clicked, store the text in localStorage under the key note. When the page opens, show the saved text in the box.
4. Create a page with the question What is 2 + 3?, three radio buttons labelled 4, 5 and 6, and a Check answer button. Display Correct when answer 5 is selected and Try again otherwise.

## Conclusion
This assignment explains how JavaScript interacts with HTML elements through the DOM. It also demonstrates form validation, browser local storage, event handling, and the development of a simple interactive quiz.