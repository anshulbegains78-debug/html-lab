# Assignment 14: CSS Grid Layouts

## Aim
To understand CSS Grid and learn how to create equal-column grids, responsive galleries and layouts using named grid areas.

## Theory

### 1. Introduction to CSS Grid
CSS Grid is a two-dimensional layout system used to arrange elements in rows and columns. It helps create structured and responsive webpage layouts.

### 2. Display Grid
The display: grid property makes an element a grid container. Its child elements become grid items.

### 3. Grid Template Columns
The grid-template-columns property defines the number and size of columns in a grid.

### 4. Fraction Unit
The fr unit represents a fraction of the available space in a grid container. It helps distribute space between columns.

For example:
`grid-template-columns: 1fr 1fr 1fr;`

### 5. Repeat and Minmax
The repeat() function avoids writing the same grid definition multiple times.

The minmax() function defines a minimum and maximum size for a grid track.

### 6. Grid Template Areas
The grid-template-areas property allows developers to assign names to different parts of a grid layout, such as header, sidebar, main and footer.

## Tasks
1. Create grid-first.html with six div boxes displaying numbers 1 to 6. Arrange them in three equal columns using fr units and a gap of 12px.
2. Create gallery.html with an h1 heading Club Photo Gallery and six boxes labelled Photo 1 to Photo 6. Use grid-template-columns with repeat(auto-fill, minmax(150px, 1fr)) and a gap of 10px.
3. Create dashboard-areas.html with a two-column grid using 200px and 1fr. Use grid-template-areas to place a header and footer across both columns, a sidebar on the left and a main area on the right.

## Conclusion
This assignment explains how CSS Grid organizes webpage elements into rows and columns. It demonstrates equal-sized columns, responsive galleries and named grid areas for structured layouts.