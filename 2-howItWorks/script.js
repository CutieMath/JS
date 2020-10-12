/* **********
 *  Hoisting
 ************/


// 1. Functions
calculate(1997);

// a. Function Declaration 
// the function is stored before execution
function calculate(year){
    console.log(2020 - year);
}


// b. Function Expression
// the function can only be called after declaration 
var retire = function(year){
    console.log(60 - (2020 - year));
}
retire(1997);


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

// 1
var a = "baby! ";
first();

function first(){
    var b = "baby b! ";
    second();

    function second(){
        var c = "baby c! ";
        console.log(a + b + c);
    }
}

// 2 
var a = "Baby a! ";
first();

function first(){
    var b = "Baby B! ";
    second();

    function second(){
        var c = "Baby C!";
        third();
    }
}

// this will show the c is not defined, because it's not global
// same to b
function third(){
    var d = "Baby d!";
    console.log(c);
}



/* *************
 *  this keyword
 ***************/

// Regular function call: point to global object
// Method call: point to the object that's calling the method
// It is not assigned until the funciton is called

// log the window object
console.log(this);

// regular function call
// also log the window object
calc(1997);
function calc(year){
    console.log(2020 - year);
    console.log(this);
}


// log the baby object
var baby = {
    name: "baby",
    yearOfBirth: 1997,
    calc: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);
       
        // inner function calls window object
        // because it's considered as a regular function
        function inner(){
            console.log(this);
        }
        inner();
    }
}
baby.calc();


var cutie={
    name: "cutie",
    yearOfBirth: 1991
};

// borrow the function from baby
// 'this' will become cuite's object
cutie.calc = baby.calc;
cutie.calc();