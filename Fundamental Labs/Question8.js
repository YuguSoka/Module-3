/*The object below represents a single city.
a) Write a function that takes an object as an argument and uses a for…in loop to access
and print to the console each of those object properties and their values. Test it using
the sydney object below.
b) Create a new object for a different city with different properties and call your function
again with the new object.*/

// Function to print object properties and values
function printObjectProperties(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  // Sydney city object
  const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
  };
  
  // Test with the Sydney object
  console.log('Sydney Object:');
  printObjectProperties(sydney);
  
  // Tokyo city object
  const tokyo = {
    name: 'Tokyo',
    population: 13_515_000,
    state: 'Tokyo Metropolis',
    founded: '1st of January 1603',
    timezone: 'Asia/Tokyo'
  };
  
  // Test with the Tokyo object
  console.log('\nTokyo Object:');
  printObjectProperties(tokyo);
  