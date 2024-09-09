/*6. Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.*/ 

function unique(duplicatesArray) {
    return Array.from(new Set(duplicatesArray));
}

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours));
console.log(unique(testScores)); 

const numbers = [1, 2, 2, 3, 4, 5, 1, 6, 7, 8, 8, 9];
console.log(unique(numbers)); 
