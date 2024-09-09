//2. Which of the below are not giving the right answer? Why are they not correct? How can we fix the? 
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four //Both three and four are strings. The + operator performs string.
let addiction = 3 + 4;  //To perform numerical addition, convert the strings to numbers
let multiplication = three * four // The * operator performs numerical multiplication. JavaScript converts "3" and "4" to numbers and performs 3 * 4, resulting in 12
let division = three / four // The / operator performs numerical division. JavaScript converts "3" and "4" to numbers and performs 3 / 4, resulting in 0.75.
let subtraction = three - four // The - operator performs numerical subtraction. JavaScript converts "3" and "4" to numbers and performs 3 - 4, resulting in -1.
let lessThan1 = three < four // three is lexicographically less than "4", so the result is true.
let lessThan2 = thirty < four //thirty is not less than four, so the result is false.