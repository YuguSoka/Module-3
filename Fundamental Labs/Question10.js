/*The following constructor function creates a new Person object with the given name and
age values.
a) Create a new person using the constructor function and store it in a variable
b) Create a second person using different name and age values and store it in a separate
variable
c) Print out the properties of each person object to the console
d) Rewrite the constructor function as a class called PersonClass and use it to create a
third person using different name and age values. Print it to the console as well.
e) Add a canDrive method to both the constructor function and the class that returns true
if the person is old enough to drive.*/

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.canDrive = function() {
      return this.age >= 18;
    };
  }
  
  // Creating and printing persons using constructor function
  let person1 = new Person('Jenny', 30);
  let person2 = new Person('David', 25);
  
  console.log('Person 1:', person1);
  console.log('Person 2:', person2);
  console.log('Person 1 can drive:', person1.canDrive()); // true
  console.log('Person 2 can drive:', person2.canDrive()); // false
  
  // Class definition
  class PersonClass {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.human = true;
    }
  
    canDrive() {
      return this.age >= 18;
    }
  }
  
  // Creating and printing person using class
  let person3 = new PersonClass('Charlie', 22);
  
  console.log('Person 3:', person3);
  console.log('Person 3 can drive:', person3.canDrive()); // true
  