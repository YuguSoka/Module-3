/*makeCounter below is a decorator function which creates and returns a function that
increments a counter.
a) Create a second counter counter2 using the makeCounter function and test to see if
it remains independent to counter1
b) Modify makeCounter so that it takes an argument startFrom specifying where the
counter starts from (instead of always starting from 0)
c) Modify makeCounter to take another argument incrementBy, which specifies how
much each call to counter() should increase the counter value by.*/

function makeCounter(startFrom = 0, incrementBy = 1) {
    let currentCount = startFrom;
    return function() {
        currentCount += incrementBy;
        console.log(currentCount);
        return currentCount;
    };
}


let counter1 = makeCounter(5, 2); 
counter1(); 
counter1(); 

let counter2 = makeCounter(10, 3); 
counter2(); 
counter2(); 


let counter3 = makeCounter(); 
counter3(); 
counter3(); 

let counter4 = makeCounter(100, 10); 
counter4(); 
counter4(); 
