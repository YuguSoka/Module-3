/*The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following*/

// Current time and hours passed
const today = new Date();
const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const totalMinutes = hours * 60 + minutes;
const totalSeconds = hours * 3600 + minutes * 60 + seconds;

console.log('Current time is ' + today.toLocaleTimeString());
console.log(hours + ' hours have passed so far today');
console.log(totalMinutes + ' minutes have passed so far today');
console.log(totalSeconds + ' seconds have passed so far today');


function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    const ageMonths = monthDifference < 0 ? 12 + monthDifference : monthDifference;
    const ageDays = dayDifference < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() + dayDifference : dayDifference;

    return { years: age, months: ageMonths, days: ageDays };
}

// Print age
const birthDate = new Date('2000-05-07'); 
const age = calculateAge(birthDate);
console.log(`I am ${age.years} years, ${age.months} months, and ${age.days} days old`);


function daysInBetween(date1, date2) {
    const MS_PER_DAY = 86400000; 
    const timeDiff = Math.abs(date2 - date1);
    return Math.floor(timeDiff / MS_PER_DAY);
}


const date1 = new Date('2024-01-01');
const date2 = new Date('2024-12-31');
console.log('Days in between:', daysInBetween(date1, date2));
