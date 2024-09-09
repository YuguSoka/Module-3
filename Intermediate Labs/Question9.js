/*Given the below salaries object, perform the following tasks.*/

let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};


function sumSalaries(salaries) {
    return Object.values(salaries).reduce((total, salary) => total + salary, 0);
}

function topEarner(salaries) {
    return Object.entries(salaries).reduce((top, [name, salary]) => {
        return salary > top.salary ? { name, salary } : top;
    }, { name: null, salary: -Infinity }).name;
}


console.log("Total of all salaries:", sumSalaries(salaries)); 
console.log("Top earner:", topEarner(salaries)); 
