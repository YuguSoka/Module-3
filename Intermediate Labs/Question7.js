/*Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.*/ 
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];
function getBookTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : 'Book not found'; // Return the title or a message if the book is not found
}

// Example usage
console.log(getBookTitle(3)); // Output: '1984'
console.log(getBookTitle(6)); // Output: 'Book not found'

function getOldBooks() {
    return books.filter(book => book.year < 1950);
}

// Example usage
console.log(getOldBooks());
// Output: [ { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
//           { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 } ]
function addGenre() {
    return books.map(book => ({
        ...book,  // Spread operator to keep existing properties
        genre: 'classic'  // Add the new genre property
    }));
}


console.log(addGenre());

function getTitles(authorInitial) {
    return books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
}

// Example usage
console.log(getTitles('G')); // Output: [ '1984' ]
console.log(getTitles('J')); // Output: [ 'The Catcher in the Rye' ]

function latestBook() {
    let latest = books[0];  // Start with the first book
    books.forEach(book => {
        if (book.year > latest.year) {
            latest = book;  // Update if a more recent book is found
        }
    });
    return latest;
}

// Example usage
console.log(latestBook());

