// /*
//  *  Data types
//  */
// var firstName = "Cutie";
// console.log(firstName);

// var lastName = "Math";
// var age = 29;
// console.log(firstName + " " + lastName + " is " + age + " years old x");
// console.log(firstName, lastName, " is ", age, " years old x");


// var isCutie = true;
// console.log(isCutie);

// var message = prompt("Girl what's the deal");
// console.log(message);


// /*
//  *  Operators
//  */
// var x;
// console.log(typeof x);
// console.log(x == null);


// /*
//  *  Operator precedence (Which one is executed first)
//  */
// var now = new Date().getFullYear();
// var birth = 1991;
// var age = 30;

// var isFullAge = now - birth >= age;
// console.log(isFullAge);

// var x, y;
// x = y = (8 + 9) * 16;
// console.log(x, y); // assignment operator start from right


// /*
//  *  Coding challange
//  */

// // body mass in kg
// var babyMass = 43;
// var mysteriousMass = 60;

// // height in meters
// var babyHeight = 1.60;
// var mysteriousHeight = 1.80;

// var babyBMI = babyMass / Math.pow(babyHeight, 2);
// var mysteriousHeight = mysteriousMass / Math.pow(mysteriousMass, 2);

// if (babyBMI > mysteriousMass) {
//     console.log("Baby is greater than Mysterious! At " + babyBMI);
// } else {
//     console.log("Baby is fit at " + babyBMI + " x");
// }


// /*
//  *  Ternary and Switch Operator
//  */

// // ternary
// var name = "Cutie";
// var age = 16;

// age >= 18 ? console.log("girl had some wine x") : console.log("girl you can't drink x");

// var drink = age >= 18 ? "Wine" : "Juice";
// console.log(drink);

// // switch
// var name = 'women';
// switch (name) {
//     case 'baby':
//         console.log('Ya baby x');
//         break;
//     case 'women':
//         console.log('being sexc');
//         break;
//     default:
//         console.log('something else...');
// }


// /*
//  *  Truthy and Falsy values
//  */

// // falsy values: undefined, null, 0, '', NaN
// // truthy values: Not falsy

// // NOTE: the 0 is a falsy value. Check it in everything

// var height;
// height = 0;

// if (height || height === 0) {
//     console.log("variable is defined");
// } else {
//     console.log("variable is not defined");
// }

// // the difference between == and === 
// height = 23;

// if (height === '23') {
//     console.log("The == doesn't care about type!");
// } else {
//     console.log("The === showes the type is not the same");
// }


// /*
//  *  Coding Challange 2
//  */

// var baby_1 = 89;
// var baby_2 = 120;
// var baby_3 = 1030;

// var cutie_1 = 116;
// var cutie_2 = 94;
// var cutie_3 = 123;

// var okie_1 = 97;
// var okie_2 = 134;
// var okie_3 = 105;

// var babyAve = (baby_1 + baby_2 + baby_3) / 3;
// var cutieAve = (cutie_1 + cutie_2 + cutie_3) / 3;
// var okieAve = (okie_1 + okie_2 + okie_3) / 3;


// if (babyAve > cutieAve) {
//     console.log("Baby got it! With " + babyAve);
// } else if (cutieAve > babyAve) {
//     console.log("Cutie got it! With " + cutieAve);
// } else {
//     console.log("Both Cutie and Baby got it xx At " + babyAve);
// }


// /*
//  *  Function statements and expressions
//  */

// // function declaration
// function occupation(job, firstName){}

// // function expression: return a value
// var occupation = function(job, firstName) {
//     switch(job) {
//         case 'Secret Agent':
//             return firstName + ' is an agent.';
//         case 'High-end cutie':
//             return firstName + ' is extremely beautiful';
//         case 'Intellegent Agent':
//             return firstName + ' is very skilled';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(occupation('Secret Agent', 'Baby'));


// /*
//  *  Arrays
//  */

// var names = ['Baby', 'Cutie', 'Sexc'];
// var occupation = new Array('Agency', 'bb', 'Intellegent');

// console.log(names);
// console.log(names.length);

// // remove from the last
// occupation.pop();
// console.log(occupation);

// // remove from the first
// occupation.shift();
// console.log(occupation);

// // Add to beginning
// occupation.unshift('CEO');
// console.log(occupation);


// /*
//  *  Coding Challange
//  */

//  var first = 124;
//  var second = 48;
//  var last = 268;

//  var tip = [];
//  var results = [];

//  function calcTip(bill) {   
//     var percentage;
//     if (bill != null && bill != 0 && bill > 0){
//         if (bill < 50){
//             percentage = 0.2;
//         } else if (  bill >= 50 && bill <= 200) {
//             percentage = 0.15;
//         } else {
//             percentage = 0.1;
//         }
//         return percentage * bill;
//     }
//     return 0;
//  }

// tip.push(calcTip(first), calcTip(second), calcTip(last));
// results.push(tip[0] + first, tip[1] + second, tip[2] + last)
// console.log(tip);
// console.log(results);


// /*
//  *  9th Oct
//  *  Objects and properties
//  */

//  var baby = {
//      firstName: "BB",
//      lastName: "YE",
//      birthYear: 1997,
//      family: ["cutie", "major"],
//      occupation: "baby",
//      isMarried: false
//  };

//  // retrieve data
//  console.log(baby);
//  console.log(baby.occupation);
//  var x = "isMarried";
//  console.log(baby[x]);

//  // mutate data
//  baby.firstName = "BABY";
//  console.log(baby);

//  // new object syntax
//  var cutie = new Object();
//  cutie.firstName = "CUTIE";
//  cutie.lastName = "DODO";
//  cutie["birthYear"] = 1995;
//  cutie.family = ["major", "BB"];
//  cutie.occupation = "Agent";
//  // doesn't have to include all variables in constructor
 
//  console.log(cutie);


// /*
//  *  Objects and methods
//  */

// var currentYear = new Date().getFullYear();

//  var baby = {
//      firstName: "BB",
//      lastName: "YE",
//      birthYear: 1997,
//      family: ["cutie", "major"],
//      occupation: "baby",
//      isMarried: false,
//      calcAge: function() {
//         return currentYear - this.birthYear;
//      }
//  };

//  console.log(currentYear);
//  console.log(baby.calcAge());

//  //Setter
//  baby.age = baby.calcAge();
//  console.log(baby);

//  //we can also use this.age = currentYear - this.birthYear in the object 


 
/*
 *  Coding challange
 */
var baby = {
    firstName: "baby",
    lastName: "yx",
    mass: 43,
    height: 1.60,
    calcBMI: function(){
        this.BMI = this.mass / Math.pow(this.height, 2);
    }
}

baby.calcBMI();
console.log("Baby's BMI is " + baby.BMI); 


var mimi = new Object();
mimi.firstName = "Mimi";
mimi.mass = 73;
mimi.height = 1.72;
mimi.calcBMI = function(){
    this.BMI = this.mass / Math.pow(this.height, 2);
};
mimi.calcBMI();
console.log("Mimi's BMI is " + mimi.BMI);


/*
 *  Loops !!!
 */