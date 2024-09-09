/*5. Decimal number operations in JavaScript can lead to unexpected results, as in the
following:*/ 

let twentyCents = 0.20;
let tenCents = 0.10;
let result = twentyCents + tenCents;
console.log(`${twentyCents} + ${tenCents} = ${result.toFixed(2)}`); // Output: 0.30

function currencyAddition(float1, float2) {
    const scale = 100; // Scaling factor to avoid precision issues
    return (Math.round(float1 * scale) + Math.round(float2 * scale)) / scale;
}

// Example usage
console.log(currencyAddition(0.1, 0.2)); // 0.3
