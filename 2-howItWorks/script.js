/* **********
 *  Hoisting
 ************/


// // 1. Functions
// calculate(1997);

// // a. Function Declaration 
// // the function is stored before execution
// function calculate(year){
//     console.log(2020 - year);
// }


// // b. Function Expression
// // the function can only be called after declaration 
// var retire = function(year){
//     console.log(60 - (2020 - year));
// }
// retire(1997);


// 2. Variables
console.log(age);
var age = 23;
console.log(age);

function foo(){
    var age = 50; 
    // variable object
    console.log(age);
}

foo();
// global object
console.log(age);



/* **********
 *  Scoping
 ************/