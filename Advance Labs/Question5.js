/* The following car object has several properties and a method which uses them to print a
description. When calling the function normally this works as expected, but using it from
within setTimeout fails. Why?*/

/*When you use setTimeout with car.description, the this context inside car.description is lost because setTimeout
 doesn't preserve the context in which the function was originally called.
 Instead, it defaults to the global context (or undefined in strict mode).*/

 /*let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
    };
    car.description(); //works
    setTimeout(car.description, 200); //fails */

    // Define the original car object
let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

// Function to fix setTimeout call by wrapping the call to car.description() inside a function
function delayedDescription() {
    setTimeout(() => car.description(), 2000); // Fix with arrow function to maintain `this`
}

// Call the description immediately
car.description(); // Output: This car is a Porsche 911 from 1964

// Call the delayed description
delayedDescription(); // Output after 200ms: This car is a Porsche 911 from 1964

// Clone the car object and change the year
let newCar = { ...car, year: 2024 };

// Display the new car's details
newCar.description(); // Output: This car is a Porsche 911 from 2024

// Check what the delayed description prints using the original `car` object
// The delayed description uses the original `car` values, not `newCar` because `setTimeout` was using an unbound method.
delayedDescription(); // Output after 200ms: This car is a Porsche 911 from 1964

// Use bind to fix the description method so that it can be called from within setTimeout without a wrapper function
let boundDescription = car.description.bind(car);

// Test setTimeout with the bound method
console.log('Using bound method with setTimeout:');
setTimeout(boundDescription, 2000); // Output after 200ms: This car is a Porsche 911 from 1964

// Clone the car object again and change another property
let anotherCar = { ...car, make: 'Ferrari' };

// Display the new car's details
console.log('Using anotherCar:');
anotherCar.description(); // Output: This car is a Ferrari 911 from 1964

// Testing the setTimeout method with the bound description function
console.log('Testing setTimeout with bound method:');
setTimeout(boundDescription, 2000); // Output after 200ms: This car is a Porsche 911 from 1964

