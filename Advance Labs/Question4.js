/*The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.*/

function printFibonacci() {
    let a = 0, b = 1;
    console.log(a); 

    const intervalId = setInterval(() => {
        console.log(b);
        [a, b] = [b, a + b]; 
    }, 1000);

   
    setTimeout(() => clearInterval(intervalId), 10000);
}

printFibonacci();
