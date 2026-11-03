# Assignment 14: Timers and Intervals

## Aim
To understand JavaScript timing functions such as setTimeout(), setInterval(), and clearTimeout().

## Theory

### 1. setTimeout()
The setTimeout() function executes a particular function after a specified delay.

The delay is measured in milliseconds.

For example:
setTimeout(() => console.log("Hello"), 1000);

### 2. setInterval()
The setInterval() function repeatedly executes a function after a specified time interval.

It continues running until it is stopped.

### 3. clearTimeout()
The clearTimeout() function cancels a timeout that was previously created using setTimeout().

### 4. clearInterval()
The clearInterval() function stops a repeating task created using setInterval().

### 5. Asynchronous Execution
JavaScript timers demonstrate asynchronous execution. Other statements can execute while a timer is waiting for its scheduled time.

## Tasks
1. Use setTimeout() with a delay of 0 milliseconds to display "Timer done" and observe the execution order with other statements. Print Start first and End after scheduling the timer.
2. Create a timeout using setTimeout() with a delay of 1000 milliseconds and cancel it using clearTimeout(). Print Cancelled.
3. Use setInterval() to display Tick with a counter every 200 milliseconds and stop the interval when the counter reaches 3.

## Conclusion
This assignment explains how JavaScript handles delayed and repeated execution using timer functions and how scheduled tasks can be cancelled when required.