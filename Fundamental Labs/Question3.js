//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true'); //This will print nothing as 0 is a false value. so the if statement evaluates to false.
if ("0") console.log('#2 zero is true'); //#2 zero is true prints, The string "0" is a non-empty string and is considered true, so the if condition evaluates to true.
if (null) console.log('null is true'); //This will print nothing as the null value is a false value so the if conditions evaluates to false. 
if (-1) console.log('negative is true'); //This prints negative os true, reasoning beause the value -1 is a non-zero number and is considered true, so the if condition evaluates to true.
if (1) console.log('positive is true');//This will print positive is true because, The value 1 is a non-zero number and is considered true, so the if condition evaluates to true.