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


/*
 *  Truthy and Falsy values
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy

// NOTE: the 0 is a falsy value. Check it in everything

var height;
height = 0;

if (height || height === 0) {
    console.log("variable is defined");
} else {
    console.log("variable is not defined");
}

// the difference between == and === 
height = 23;

if (height === '23') {
    console.log("The == doesn't care about type!");
} else {
    console.log("The === showes the type is not the same");
}


/*
 *  Coding Challange 2
 */

var baby_1 = 89;
var baby_2 = 120;
var baby_3 = 1030;

var cutie_1 = 116;
var cutie_2 = 94;
var cutie_3 = 123;

var okie_1 = 97;
var okie_2 = 134;
var okie_3 = 105;

var babyAve = (baby_1 + baby_2 + baby_3) / 3;
var cutieAve = (cutie_1 + cutie_2 + cutie_3) / 3;
var okieAve = (okie_1 + okie_2 + okie_3) / 3;


if (babyAve > cutieAve) {
    console.log("Baby got it! With " + babyAve);
} else if (cutieAve > babyAve) {
    console.log("Cutie got it! With " + cutieAve);
} else {
    console.log("Both Cutie and Baby got it xx At " + babyAve);
}


/*
 *  Function statements and expressions
 */

// function declaration
function occupation(job, firstName){}

// function expression: return a value
var occupation = function(job, firstName) {
    switch(job) {
        case 'Secret Agent':
            return firstName + ' is an agent.';
        case 'High-end cutie':
            return firstName + ' is extremely beautiful';
        case 'Intellegent Agent':
            return firstName + ' is very skilled';
        default:
            return firstName + ' does something else';
    }
}

console.log(occupation('Secret Agent', 'Baby'));


/*
 *  Arrays
 */

var names = ['Baby', 'Cutie', 'Sexc'];
var occupation = new Array('Agency', 'bb', 'Intellegent');

console.log(names);
console.log(names.length);

// remove from the last
occupation.pop();
console.log(occupation);

// remove from the first
occupation.shift();
console.log(occupation);

// Add to beginning
occupation.unshift('CEO');
console.log(occupation);


/*
 *  Coding Challange
 */

 var first = 124;
 var second = 48;
 var last = 268;

 var tip = [];
 var results = [];

 function calcTip(bill) {   
    var percentage;
    if (bill != null && bill != 0 && bill > 0){
        if (bill < 50){
            percentage = 0.2;
        } else if (  bill >= 50 && bill <= 200) {
            percentage = 0.15;
        } else {
            percentage = 0.1;
        }
        return percentage * bill;
    }
    return 0;
 }

tip.push(calcTip(first), calcTip(second), calcTip(last));
results.push(tip[0] + first, tip[1] + second, tip[2] + last)
console.log(tip);
console.log(results);


/*
 *  9th Oct
 *  Objects and properties
 */

 var baby = {
     firstName: "BB",
     lastName: "YE",
     birthYear: 1997,
     family: ["cutie", "major"],
     occupation: "baby",
     isMarried: false
 };

 // retrieve data
 console.log(baby);
 console.log(baby.occupation);
 var x = "isMarried";
 console.log(baby[x]);

 // mutate data
 baby.firstName = "BABY";
 console.log(baby);

 // new object syntax
 var cutie = new Object();
 cutie.firstName = "CUTIE";
 cutie.lastName = "DODO";
 cutie["birthYear"] = 1995;
 cutie.family = ["major", "BB"];
 cutie.occupation = "Agent";
 // doesn't have to include all variables in constructor
 
 console.log(cutie);


/*
 *  Objects and methods
 */

var currentYear = new Date().getFullYear();

 var baby = {
     firstName: "BB",
     lastName: "YE",
     birthYear: 1997,
     family: ["cutie", "major"],
     occupation: "baby",
     isMarried: false,
     calcAge: function() {
        return currentYear - this.birthYear;
     }
 };

 console.log(currentYear);
 console.log(baby.calcAge());

 //Setter
 baby.age = baby.calcAge();
 console.log(baby);

 //we can also use this.age = currentYear - this.birthYear in the object 


 
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

// get clear with count
var x = 1;
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("Count i");
for (var i = 0; i < array.length; i ++) {
    console.log(i);
}

console.log("Count elements");
for (var i = 0; i < array.length; i ++){
    console.log(x);
    x ++;
}

// access arrays
var array = ["okie", "cutie", "baby", "violet", "me"];
for(var i = 0; i < array.length; i ++){
    console.log(array[i]);
}

// while loop 
var i = 0;
while (i < array.length) {
    console.log(array[i]);
    i ++;
}

// continue and break
var array = ["okie", "cutie", 520, "baby", "violet", "me", 222];
console.log("_________continue__________");
for(var i = 0; i < array.length; i ++){
    if (typeof array[i] !== "string") {
        continue;
    }
    console.log(array[i]);
}
console.log(typeof array[0]);

console.log("___________break___________");
for(var i = 0; i < array.length; i ++){
    if (typeof array[i] !== "string") {
        break;
    }
    console.log(array[i]);
}

// loop the array backwards
console.log("_______loop backwards________");
for(var i = array.length-1; i >= 0; i --) {
    console.log(array[i]);
}


/*
 *  Coding challange
 */


// Baby
console.log("____________Baby's bill__________")
var r_one = 124;
var r_two = 48;
var r_three = 268; 
var r_four = 180; 
var r_five = 42;

var babyBills = {
    bills: [r_one, r_two, r_three, r_four, r_five],
    calc_tip: function(){
        this.tips = [];
        this.finalBills = [];
        for(var i = 0; i < this.bills.length; i ++) {
            console.log(this.bills[i]);
            if(this.bills[i] != 0 && this.bills[i]!= null && this.bills[i] > 0) {
                var percentage = 0;
                if(this.bills[i] < 50) {
                    percentage = 0.20;
                } else if(this.bills[i] >= 50 && this.bills[i] < 200) {
                    percentage = 0.15;
                } else {
                    percentage = 0.10;
                }
                this.tips.push(this.bills[i] * percentage);
                this.finalBills.push(this.bills[i] + this.bills[i] * percentage);
            } else {
                // if the bill is 0, null or less than 0
                this.tips.push(0);
                this.finalBills.push(0);
            }
        }
    }
}
babyBills.calc_tip();
console.log("Tips are " + babyBills.tips);
console.log("Final bills are " + babyBills.finalBills);


// Major
console.log("____________Major's bill__________")
var m_one = 77;
var m_two = 475;
var m_three = 110; 
var m_four = 45; 

var majorBills = {
    bills: [m_one, m_two, m_three, m_four],
    tips: [],
    finalBills:[]
}

function calc_tip(array){
    for(var i = 0; i < array.length; i ++) {
        console.log(array[i]);
        if(array[i] != 0 && array[i]!= null && array[i] > 0) {
            var percentage = 0;
            if(array[i] < 100) {
                percentage = 0.20;
            } else if(array[i] >= 100 && array[i] < 300) {
                percentage = 0.10;
            } else {
                percentage = 0.25; 
            }
            majorBills.tips.push(array[i] * percentage);
            majorBills.finalBills.push(array[i] + array[i] * percentage);
        } else {
            // if the bill is 0, null or less than 0
            majorBills.tips.push(0);
            majorBills.finalBills.push(0);
        }
    }
}

calc_tip(majorBills.bills);
console.log("Major's tips are: " + majorBills.tips);
console.log("Major's bills are: " + majorBills.finalBills);


// Average and results
console.log("____________Results__________")
var babyAve = calcAve(babyBills.bills);
var majorAve = calcAve(majorBills.finalBills);
var babyTipAve = calcAve(babyBills.tips);
var majorTipAve = calcAve(majorBills.tips);

function calcAve(array){
    var sum = 0;
    for(var i = 0; i < array.length; i ++) {
        sum += array[i];
    }
    return sum / array.length;
}

// bill
if(babyAve > majorAve) {
    console.log("Baby paid more, at " + babyAve);
} else {
    console.log("Major paid more on average, at " + majorAve + ". Baby's bill was: " + babyAve);
}

// tip
if(babyTipAve > majorTipAve) {
    console.log("Baby paid more tips, at " + babyTipAve);
} else {
    console.log("Major paid more tips on average, at " + majorTipAve + ". Baby's tip was: " + babyTipAve);
}