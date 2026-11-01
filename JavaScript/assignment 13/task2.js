let marks = [72, 85, 30, 90];

let anyBelow40 = marks.some(function(mark) {
    return mark < 40;
});

let allAbove35 = marks.every(function(mark) {
    return mark >= 35;
});

console.log(anyBelow40);
console.log(allAbove35);