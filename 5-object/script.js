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



// // *************************
// // Objects and Primitives
// // ************************************

// // In primitives
// var a = 23;
// var b = a; // copy of reference not changed
// a = 46;    // copy of value changed
// console.log(a, b);


// // However in objects
// var obj1 = {
//     name: 'baby', 
//     age: 29
// };
// var obj2 = obj1;   // copy of reference
// obj1.age = 30;     
// console.log(obj2); // copy of reference changed
// console.log(obj1); 

// // Functions
// var age = 29; 
// var obj = {
//     name: 'Baby', 
//     city: 'Melbourne'
// };

// function change(a, b){
//     a = 30; // copy of a new object
//     b.city = 'London'; // copy of the reference 
// }

// change(age, obj);  
// console.log(age);  // object not changed
// console.log(obj.city); // reference changed

// // Summary
// // when use a = object: a copy of reference is created, no new object
// // when use a = primitive: a copy of new object is created



// // *************************
// // passing function as arguments
// // ************************************

// var years = [1990, 1965, 1966, 2005, 1999, 2015];

// // generic function!!! 
// function arrayCalc(array, fn) {
//     var resultArr = [];
//     for(var i = 0; i < array.length; i ++){
//         resultArr.push(fn(array[i]));
//     }
//     return resultArr;
// }

// function calcAge(element){
//     return new Date().getFullYear() - element;
// }

// function isFullAge(element){
//     return element >= 18;
// }

// // only applicable for people between 18 to 81
// function maxHeartRate(element){
//     if(element < 18 || element > 81){
//         return -1;
//     }else {
//         return Math.round(206.9 - (0.67 * element));
//     }
// }

// console.log("First Function_________");
// var resultArr = arrayCalc(years, calcAge);
// console.log(resultArr);

// console.log("Second Function_________");
// var fullAgeArr = arrayCalc(resultArr, isFullAge);
// console.log(fullAgeArr);

// console.log("Third Function_________");
// var maxHeartRate = arrayCalc(resultArr, maxHeartRate);
// console.log(maxHeartRate);


// // *************************
// // Functions returning functions
// // ************************************

// function question(job){
//     if (job === "baby") {
//         return function(name) {
//             console.log(name + " is a baby.");
//         }
//     } else if (job === "agent") {
//         return function(name) {
//             console.log(name + " is super cool.");
//         }
//     } else {
//         return function(name) {
//             console.log(name + " is rich.");
//         }
//     }
// }

// // get the returning function and use it
// var agentQuestion = question("baby");
// agentQuestion("Cutie");

// var otherQuestion = question("unknown");
// otherQuestion("Cutie");

// question("agent")("Cutie");



// // *************************
// // IIFE
// // ************************************

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// // better way to do this
// // achieve data privacy 
// (function() {
//     var score2 = Math.random() * 10;
//     console.log(score2 >= 5);
// })();



// *************************
// Closures
// ************************************

function calcMoney(retirementAge){
    var a = ' years left until retirement.';
    var b = ' dollars in investment.';
    // the inner function can still use a, b, and retirementAge
    // even after the outer function is returned
    // Becasue the variable objects are still in the memory!!!
    return function(yearOfBirth, investment){
        const annualRate = .1;
        const n = 1;
        const age = new Date().getFullYear() - yearOfBirth;
        const yearsLeft = retirementAge - age;
        var money = investment * (Math.pow((1+(annualRate / n)), (n * yearsLeft)));
        money = Math.floor(money);
        console.log(yearsLeft + a);
        console.log(money.toLocaleString() + b);
    }
}
//calcMoney(55)(1991, 1000000);
calcMoney(65)(1991, 1000000);


// ***************
// coding challange:
// JS closure for job questions

function question2(job){
    a = " is a baby.";
    b = " is super cool.";
    c = " is rich.";
    return function(name){
        if (job === "baby") { 
            console.log(name + a);
        } else if (job === "agent") {
            console.log(name + b);
        } else {
            console.log(name + c);
        }
    }
}
question2(undefined)("Cutie");