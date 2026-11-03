# Assignment 13: Flexbox Layouts

## Aim
To understand CSS Flexbox and use it to create navigation bars, centred card layouts and wrapping card designs.

## Theory

### 1. Introduction to Flexbox
Flexbox is a CSS layout model used to arrange elements in rows or columns. It provides flexible alignment and spacing between items.

### 2. Display Flex
The display: flex property turns an element into a flex container. Its direct children become flex items.

### 3. Flex Direction
The flex-direction property controls the direction in which flex items are arranged.

Common values include:
- row
- column

### 4. Justify Content
The justify-content property aligns flex items along the main axis.

It can be used to centre items and distribute available space.

### 5. Align Items
The align-items property controls alignment along the cross axis.

### 6. Flex Wrap
The flex-wrap property controls whether flex items remain in one row or move onto multiple rows when space becomes limited.

## Tasks
1. Create nav-flex.html with a horizontal navigation bar using a nav element and four links: Home, About, Events and Contact. Use display: flex, a dark background and white link text.
2. Create centred-cards.html with a div having class row and three cards having class card. Each card should contain an h3 heading (Starter, Standard and Premium) and a paragraph showing prices 199, 349 and 499. Use justify-content and align-items to centre the cards in the row.
3. Create wrapping-cards.html with the heading Stationery Shop and four cards in a flex-wrap row: Notebook (60), Pen (15), Bag (350) and Book (120). Narrow the browser window to check wrapping.

## Conclusion
This assignment explains how Flexbox creates flexible webpage layouts. It demonstrates navigation bars, alignment of cards and wrapping items when the available screen space becomes smaller.