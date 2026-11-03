# Assignment 12: Box Model, Cards and Scrolling

## Aim
To understand the CSS box model, compare content-box and border-box sizing, design cards and manage overflowing content using scrolling.

## Theory

### 1. CSS Box Model
The CSS box model describes how every HTML element is represented as a rectangular box.

It consists of:
- Content
- Padding
- Border
- Margin

### 2. Content-Box
The content-box value makes the specified width and height apply only to the content area. Padding and borders are added outside these dimensions.

### 3. Border-Box
The border-box value includes content, padding and border within the specified width and height.

### 4. CSS Cards
Cards are containers used to display related information together. They can be styled using background colour, border, padding and border-radius.

### 5. Border Radius
The border-radius property creates rounded corners on an element.

For example:
`border-radius: 12px;`

### 6. Overflow Property
The overflow property controls what happens when content is larger than its container.

The auto value adds scrolling when necessary.

## Tasks
1. Create box-model.html with two div boxes. Both should have width 200px, padding 20px and border 5px. Set the first box to box-sizing content-box and the second to border-box.
2. Create card.html with a div having class card. Give it a background colour, 2px border, border-radius 12px and padding 16px. Add an h3 heading and a paragraph inside it.
3. Create scroll.html with a div having fixed height 120px and overflow set to auto. Add five paragraphs containing Line 1 to Line 5.

## Conclusion
This assignment explains how the CSS box model controls element dimensions. It also demonstrates card design, rounded corners and scrolling behaviour using the overflow property.