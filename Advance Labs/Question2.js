/* The following delayMsg function is intended to be used to delay printing a message until
some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.*/

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
};

const timeout1 = setTimeout(delayMsg, 1000, 'Delay #1');
const timeout2 = setTimeout(delayMsg, 2000, 'Delay #2');
const timeout3 = setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all');
const timeout4 = setTimeout(delayMsg, 10000, '#5: Delayed by 10 seconds');

// Prevent the fifth test from printing
clearTimeout(timeout4);
