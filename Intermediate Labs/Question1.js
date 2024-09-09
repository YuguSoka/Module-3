/*1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/

console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) {
    return str
      .split(' ') // Split the string into words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join the words back into a string
  }
  
  // Test the function
  console.log(ucFirstLetters("los angeles")); 
  console.log(ucFirstLetters("benJamin franklin")); 
  console.log(ucFirstLetters("javascript")); 

  