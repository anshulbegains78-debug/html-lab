# Assignment 15: Responsive Pages with Media Queries

## Aim
To understand responsive web design and learn how to use media queries, responsive images and scalable text sizes.

## Theory

### 1. Responsive Web Design
Responsive web design is an approach used to make webpages display properly on different screen sizes and devices, such as mobile phones, tablets and desktop computers.

### 2. Viewport Meta Tag
The viewport meta tag controls how a webpage is displayed on mobile devices. It helps the page adjust to the device's screen width.

### 3. Media Queries
Media queries allow CSS styles to be applied only when certain conditions are met, such as a minimum screen width.

For example:
`@media (min-width: 600px) { }`

### 4. Mobile-First Design
Mobile-first design means writing the basic CSS styles for smaller screens first and then adding styles for larger screens using media queries.

### 5. Responsive Images
The max-width property can prevent an image from becoming wider than its container.

The height: auto property maintains the image's original proportions.

### 6. Responsive Typography
The rem unit is useful for defining scalable font sizes. Media queries can change heading sizes depending on screen width.

## Tasks
1. Create mobile-first.html with the viewport meta tag and a div having class cards. Add two cards with class card, each containing an h2 heading and a paragraph. Write base styles for phones and add a media query for screens 600px wide and above to display the cards side by side.
2. Create responsive-image.html with a heading and one picture from the images folder. Set max-width to 100% and height to auto so the picture adjusts to a narrow window. Use the filename provided by your instructor.
3. Create responsive-text.html with an h1 heading and a paragraph. Set the body font size to 1rem and h1 font size to 1.5rem. Add a media query for screens 600px wide and above that changes the h1 font size to 2.5rem.

## Conclusion
This assignment explains how responsive web design makes webpages suitable for different screen sizes. It demonstrates media queries, mobile-first layouts, responsive images and scalable typography.