/*In JavaScript, the toString method is used to convert an object to a string representation.
By default, when an object is converted to a String, it returns a string that looks something
like [object Object].
However, we can define our own toString methods for custom objects to provide a more
meaningful string representation.
a) Define a custom toString method for the Person object that will format and print
their details
b) Test your method by creating 2 different people using the below constructor function
and printing them
c) Create a new constructor function Student that uses call to inherit from Person and
add an extra property cohort
d) Add a custom toString for Student objects that formats and prints their details. Test
with 2 students.*/ 


function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


Person.prototype.toString = function() {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
};


const person1 = new Person('Jacob Tim', 27, 'male');
const person2 = new Person('Jasmin Smith', 29, 'female');

console.log('person1: ' + person1); 
console.log('person2: ' + person2); 


function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender); 
    this.cohort = cohort;
}


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.toString = function() {
    return `${Person.prototype.toString.call(this)}, Cohort: ${this.cohort}`;
};


const student1 = new Student('John Doe', 21, 'male', 'Winter 2024');
const student2 = new Student('Jane Doe', 22, 'female', 'Spring 2024');

console.log('student1: ' + student1); 
console.log('student2: ' + student2); 
