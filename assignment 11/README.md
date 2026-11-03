# Assignment 11: Units and CSS Variables

## Aim
To understand different CSS measurement units and learn how to define and use CSS variables for colours and spacing.

## Theory

### 1. CSS Units
CSS units are used to define measurements such as width, height, margin, padding and font size.

### 2. Pixel Unit
The px unit represents pixels. It is commonly used to define fixed dimensions of HTML elements.

For example:
`width: 200px;`

### 3. Percentage Unit
The % unit defines a size relative to the parent element's dimensions.

For example:
`width: 50%;`

### 4. rem Unit
The rem unit is relative to the root element's font size. It is useful for creating scalable text and spacing.

For example:
`font-size: 1.5rem;`

### 5. CSS Variables
CSS variables store reusable values such as colours, spacing and font sizes. They are generally declared inside the :root selector.

### 6. var() Function
The var() function is used to access a previously defined CSS variable.

For example:
`color: var(--main-color);`

## Tasks
1. Create units.html with one div box having width 200px and height 40px, another div box having width 50% and height 40px, and a paragraph with font size 1.5rem. Give both boxes a background colour.
2. Create variables.html with an h1 and a paragraph. In :root, define --main-color as #1d3557, --accent-color as #e63946 and --page-padding as 20px. Use var() for the body colour and padding and for the h1 colour.
3. Create tokens.css with variables for primary colour (#1d3557), accent colour (#e63946), heading size (2rem) and spacing (16px). Use these variables for the body colour and padding and for the h1 colour and size.

## Conclusion
This assignment explains how CSS units control the dimensions and text sizes of webpage elements. It also demonstrates how CSS variables make styling values reusable and easier to maintain.