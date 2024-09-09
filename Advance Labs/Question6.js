/* Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.*/


Function.prototype.delay = function(ms) {
    const func = this; 
    return function(...args) {
        setTimeout(() => func.apply(this, args), ms);
    };
};


function multiply(a, b) {
    console.log(a * b);
}


multiply.delay(500)(5, 5); 


function add() {
    const sum = Array.from(arguments).reduce((acc, val) => acc + val, 0);
    console.log(sum);
}


add.delay(1000)(1, 2, 3, 4, 5); 


function multiplyFour(a, b, c, d) {
    console.log(a * b * c * d);
}


multiplyFour.delay(500)(2, 3, 4, 5); 
