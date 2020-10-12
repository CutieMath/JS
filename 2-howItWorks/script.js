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
retire(1990);


// Variables