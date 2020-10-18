// *************************
// 1. Every JS object has a prototype property. This makes inheritance possible. 
// 2. The prototype property is where we put methods and properties that we want other objects to inherit
// ************************************


// *************************
// Object basics
// ************************************

// var baby = {
//     name: 'Baby', 
//     yearOfBirth: 1997, 
//     occupation: 'Secret Service'
// };

// // Constructor
// var Person = function (name, yearOfBirth, occupation) {
//     this.name = name, 
//     this.yearOfBirth = yearOfBirth,
//     this.occupation = occupation,
//     this.calcAge = function(){
//         console.log(new Date().getFullYear() - this.yearOfBirth);
//     }
// }

// // add functions
// Person.prototype.printOccupation = function(){
//     console.log(this.occupation);
// }


// var cutie = new Person('Cutie', 1997, 'Agent X');
// cutie.calcAge();

// var major = new Person('Major', 1980, 'Major');
// major.calcAge();
// major.printOccupation();


// // *************************
// // Object.create
// // ************************************
// var personProto = {
//     calcAge: function(){
//         console.log(new Date().getFullYear() - this.yearOfBirth);
//     }
// };

// var baby = Object.create(personProto);
// baby.name = 'Baby';
// baby.yearOfBirth = '1998';
// baby.occupation = 'Secret';

// var cutie = Object.create(personProto, {
//     name: { value: 'Cutie'},
//     yearOfBirth: { value: 1999 }, 
//     occupation: { value: 'Agent'}
// })


// *************************
// Objects and Primitives
// ************************************

// In primitives
var a = 23;
var b = a; // copy of reference not changed
a = 46;    // copy of value changed
console.log(a, b);


// However in objects
var obj1 = {
    name: 'baby', 
    age: 29
};
var obj2 = obj1;   // copy of reference
obj1.age = 30;     // copy of value
console.log(obj2); // copy of reference not changed
console.log(obj1); // copy of value changed

// Functions
var age = 29; 
var obj = {
    name: 'Baby', 
    city: 'Melbourne'
};

function change(a, b){
    a = 30; // not reflect outside the function
    b.city = 'London'; // reflect outside the function
}

change(age, obj);  
console.log(age);  
console.log(obj.city); 


