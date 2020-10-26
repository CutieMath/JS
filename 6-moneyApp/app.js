// **********************
// This project focus on: 
// 1. Use module pattern
// 2. Implement data encapsulation 
// *******************************



// *****************
// Money Data Module
// *****************
var moneyController = (function(){
    
    // Create objects for Income and Expenses
    var Expense = function(id, description, moneyAmount) {
        this.id = id;
        this.description = description;
        this.moneyAmount = moneyAmount;
    };
    
    var Income = function(id, description, moneyAmount) {
        this.id = id;
        this.description = description;
        this.moneyAmount = moneyAmount;
    };

    var calcTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(i){
            sum += i.moneyAmount;
        });
        data.totals[type] = sum;
    };

    const roundToHundredth = (value) => {
        return Number(value.toFixed(3));
      };

    // Create data structures (invisible!)
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    // accessible methods!
    return {
        addItem: function(type, descrip, money){
            var newItem, id;
            // id is the last item in the array + 1
            if(data.allItems[type].length > 0) {
                id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                id = 0;
            }
            // create new objects from user inputs
            if (type === 'exp') {
                newItem = new Expense(id, descrip, money);
            } else if (type === 'inc') {
                newItem = new Income(id, descrip, money);
            }
            // add into data structure
            data.allItems[type].push(newItem);
            // return the new element
            return newItem;
        },

        calcMoney: function(){
            // total income and exp
            calcTotal('exp');
            calcTotal('inc');
            // calc budget
            data.budget = data.totals.inc - data.totals.exp; 
            // calc percentage, round to the nearest hundredths
            if (data.totals.inc !== 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                console.log(data.percentage);
            } else {
                data.percentage = -1;
            }
        },

        getMoney: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        test: function(){
            console.log(data);
        }
        
    };

    
})();



// *****************
// UI Module
// *****************
var UIController = (function(){

    // Create an object for all selectors!
    var DOMstrings = {
        type: '.add__type',
        description: '.add__description',
        moneyAmount: '.add__value',
        addButton: '.add__btn',
        incContainer: '.income__list',
        expContainer: '.expenses__list',
        budgetUI: '.budget__value',
        incUI: '.budget__income--value',
        expUI: '.budget__expenses--value',
        expPercen: '.budget__expenses--percentage'
    }


    // Public methods for other Controller
    return {

        getInput: function(){
            // make the three of them as an object
            return {
                type: document.querySelector(DOMstrings.type).value, // 'inc' or 'exp'
                description: document.querySelector(DOMstrings.description).value,
                moneyAmount: parseFloat(document.querySelector(DOMstrings.moneyAmount).value),
            }
        },

        addListItem : function(object, type) {
            var html, newHtml, element;

            // create HTML string with placeholder text
            if(type === 'inc') {
                element = DOMstrings.incContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%moneyAmount%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMstrings.expContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%moneyAmount%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else {
                console.log("The type received was: " + type);
            }

            // replace the placeholder text
            newHtml = html.replace('%id%', object.id);
            newHtml = newHtml.replace('%description%', object.description);
            newHtml = newHtml.replace('%moneyAmount%', object.moneyAmount.toLocaleString());

            // insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function(){
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMstrings.type + "," + DOMstrings.description + "," + DOMstrings.moneyAmount);
            // Convert into array
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(fieldsValue){
                fieldsValue.value = "";
            });
            fieldsArray[0].focus();
        },

        displayBudget: function(obj) {
            document.querySelector(DOMstrings.budgetUI).textContent = obj.budget.toLocaleString();
            document.querySelector(DOMstrings.incUI).textContent = obj.totalInc.toLocaleString();
            document.querySelector(DOMstrings.expUI).textContent = obj.totalExp.toLocaleString();

            if (obj.percentage >= 0){
                document.querySelector(DOMstrings.expPercen).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMstrings.expPercen).textContent = "---";
            }
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();




// *****************
// Globle Module 
// *****************
var controller = (function(moneyCtrl, UICtrl){

    // organise event listener
    var setupEventListeners = function(){

        var UIDOM = UICtrl.getDOMstrings();
        
        // 1. Add event listener for the button
        document.querySelector(UIDOM.addButton).addEventListener('click', ctrlAddItem);

        // 2. Add event listener for Enter key! (disabled        to avoid dups)
        // document.addEventListener('keypress', function(event) {
        //     if ( event.keyCode === 13 || event.which === 13 || event.key === 13) {
        //         ctrlAddItem();
        //     }
        // });
    };

    // Use a function for both key events
    var ctrlAddItem = function(){
        var inputItem, newAddedItem;

        // a. get input data
        inputItem = UICtrl.getInput(); 

        if( inputItem.type !== "" && inputItem.description !== "" && !isNaN(inputItem.moneyAmount) && inputItem.moneyAmount >= 0) {
            // b. add to the data structure in moneyController
            newAddedItem = moneyCtrl.addItem(inputItem.type, inputItem.description, inputItem.moneyAmount);

            // c. update UI by adding to UIController
            // clear the inut fields
            UICtrl.addListItem(newAddedItem, inputItem.type);
            UICtrl.clearFields();

            // d. calculatge and update global money
            updateMoney();

            // e. update Global UI
        } else {
            alert("Please input valid money x");
        }
    };

    var updateMoney = function(){
        var moneyObj;

        // 1. Calculate money in the moneyController
        moneyCtrl.calcMoney();

        // 2. return the budget
        moneyObj = moneyCtrl.getMoney();
        
        // 3. update globale UI
        UICtrl.displayBudget(moneyObj);

    };

    return {
        init: function(){
            console.log('Application started x');
            UICtrl.displayBudget({
                budget: 5000000,
                totalInc: 5000000,
                totalExp: 0,
                percentage: 0});
            setupEventListeners();
        }
    };


})(moneyController, UIController);


// *****************
// Start the app!!
// *****************
controller.init();