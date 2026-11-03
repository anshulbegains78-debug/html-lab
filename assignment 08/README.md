# Assignment 08: Sign-Up Forms and Choices

## Aim
To understand HTML forms and learn how to create labelled input fields, radio buttons, dropdown menus and required fields.

## Theory

### 1. HTML Forms
The <form> element is used to collect information from users. It can contain text fields, email fields, password fields and other input elements.

### 2. Form Attributes
The form element supports different attributes:
- action: Specifies where form data should be sent.
- method: Specifies how form data should be submitted.

### 3. Label Element
The <label> element provides a text description for an input field. The for attribute connects a label with an input having the matching id.

### 4. Input Types
HTML provides different input types:
- text: Accepts ordinary text.
- email: Accepts an email address.
- password: Hides the characters entered by the user.

### 5. Radio Buttons
Radio buttons allow users to select one option from a group of choices. They are created using input type radio.

### 6. Select and Option
The <select> element creates a dropdown list, while <option> defines individual choices.

### 7. Required Attribute
The required attribute makes an input field compulsory. The browser displays a validation message if the user tries to submit the form without filling it.

## Tasks
1. Create signup.html with a form having method post and action thanks.html. Add labelled fields for full name, email and password. Connect each label to its input field.
2. Create choices.html with a gender question using two radio buttons labelled Female and Male. Add a course dropdown containing BCA and B.Tech.
3. Create signup-required.html with full name and email fields. Make both fields required, add a placeholder to the name field and include a Submit button.

## Conclusion
This assignment explains how HTML forms collect user information. It demonstrates different input types, labels, radio buttons, dropdown menus and built-in form validation.