/*The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.*/


const phoneBookABC = new Map();
phoneBookABC.set('Annabelle', '0412312343');
phoneBookABC.set('Barry', '0433221117');
phoneBookABC.set('Caroline', '0455221182');


const entries = [
    ['David', '0477123456'],
    ['Emily', '0423456789'],
    ['Fiona', '0467890123']
];
let phoneBookDEF = new Map(entries);


phoneBookABC.set('Caroline', '0466789123');


function printPhoneBook(contacts) {
    contacts.forEach((phoneNumber, name) => {
        console.log(`${name}: ${phoneNumber}`);
    });
}


console.log("Phone Book ABC:");
printPhoneBook(phoneBookABC);

console.log("Phone Book DEF:");
printPhoneBook(phoneBookDEF);


const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);


console.log("Combined Phone Book:");
printPhoneBook(phoneBook);


const names = [...phoneBook.keys()];
console.log("Full List of Names:");
console.log(names);
