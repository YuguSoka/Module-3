/*Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let moreSports = teamSports;
moreSports.push('AFL');
moreSports.unshift('Tennis');
console.log(teamSports); 
console.log(moreSports);


let dog1 = 'Bingo';
let dog2 = dog1; 
dog2 = 'Jerry'; 
console.log(dog1); 
console.log(dog2); 


let cat1 = { name: 'Fluffy', breed: 'Siberian' };
let cat2 = cat1;
cat2.name = 'Tom'; 
console.log(cat1); 
console.log(cat2);







