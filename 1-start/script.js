/*
 *  Data types
 */
var firstName = "Cutie";
console.log(firstName);

var lastName = "Math";
var age = 29;
console.log(firstName + " " + lastName + " is " + age + " years old x");
console.log(firstName, lastName, " is ", age, " years old x");


var isCutie = true;
console.log(isCutie);

var message = prompt("Girl what's the deal");
console.log(message);


/*
 *  Operators
 */
var x;
console.log(typeof x);
console.log(x == null);


/*
 *  Operator precedence (Which one is executed first)
 */
var now = new Date().getFullYear();
var birth = 1991;
var age = 30;

var isFullAge = now - birth >= age;
console.log(isFullAge);

var x, y;
x = y = (8 + 9) * 16;
console.log(x, y); // assignment operator start from right


/*
 *  Coding challange
 */

// body mass in kg
var babyMass = 43;
var mysteriousMass = 60;

// height in meters
var babyHeight = 1.60;
var mysteriousHeight = 1.80;

var babyBMI = babyMass / Math.pow(babyHeight, 2);
var mysteriousHeight = mysteriousMass / Math.pow(mysteriousMass, 2);

if (babyBMI > mysteriousMass) {
    console.log("Baby is greater than Mysterious! At " + babyBMI);
} else {
    console.log("Baby is fit at " + babyBMI + " x");
}


/*
 *  Ternary and Switch Operator
 */

// ternary
var name = "Cutie";
var age = 16;

age >= 18 ? console.log("girl had some wine x") : console.log("girl you can't drink x");

var drink = age >= 18 ? "Wine" : "Juice";
console.log(drink);

// switch
var name = 'women';
switch (name) {
    case 'baby':
        console.log('Ya baby x');
        break;
    case 'women':
        console.log('being sexc');
        break;
    default:
        console.log('something else...');
}