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
        this.percentage = -1;
    };

    // add the calculate percentage function
    Expense.prototype.calcPct = function(totalIncome) {
        if(totalIncome > 0) {
            this.percentage = Math.round((this.moneyAmount / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPct = function() {
        return this.percentage;
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

        deleteItem: function(type, id){
            // use map function to select the element
            var idsArr, index;
            // this returns an array of all the available ids
            idsArr = data.allItems[type].map(function(i) {
                return i.id;
            });
            // get the index of that id
            index = idsArr.indexOf(id);

            // delete it!!
            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }
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
            } else {
                data.percentage = -1;
            }
        },

        calcPercentages: function(){
            data.allItems.exp.forEach(function(i) {
                i.calcPct(data.totals.inc);
            });
        },

        getPercentages: function(){
            var allPct = data.allItems.exp.map(function(i){
                return i.getPct();
            });
            return allPct;
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
        expPercen: '.budget__expenses--percentage',
        container: '.container',
        expPctLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
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
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%moneyAmount%</div><div class="item__delete"><button class="item__delete--btn"><i class="fas fa-times-circle"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMstrings.expContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%moneyAmount%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="fas fa-times-circle"></i></button></div></div></div>';
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

        deleteListItem: function(selectorID){
            var element = document.getElementById(selectorID);
            element.parentNode.removeChild(element);
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

        displayPcts: function(pctArr){
            var fields = document.querySelectorAll(DOMstrings.expPctLabel);
            // get each UI node
            var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i ++){
                    callback(list[i], i);
                }
            };
            // update them!
            nodeListForEach(fields, function(element, index) {
                if(pctArr[index] >= 0) {
                    element.textContent = pctArr[index] + '%';
                } else {
                    element.textContent = '---';
                }
            });
        },

        displayMonth: function() {
            var now, year, month, months;

            now = new Date();
            months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            month = now.getMonth();
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month - 1] + ', ' + year;
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

        // 3. add eventlistener to the delete button
        // Use event bubbles
        document.querySelector(UIDOM.container).addEventListener('click', ctrlDeleteItem);
    };


    // update the percentage for each expense
    var updatePercentage = function(){
        // calculate percentage
        moneyCtrl.calcPercentages();

        // read percentages from the budget controller
        var pcts = moneyCtrl.getPercentages();

        // update UI
        UICtrl.displayPcts(pcts);
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

            // d. calculate and update global money
            updateMoney();

            // e. calculate and update percentages
            updatePercentage();

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


    var ctrlDeleteItem = function(event){
        var itemID, splitArr, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if (itemID) {
            // split: inc-1
            splitArr = itemID.split('-');
            type = splitArr[0];
            ID = parseInt(splitArr[1]);

            // 1. delete from data structure
            moneyCtrl.deleteItem(type, ID);

            // 2. delete from UI
            UICtrl.deleteListItem(itemID);

            // 3. update UI
            updateMoney();

            // 4. update percentage
            updatePercentage();
        }
    };


    // publically accessible elements
    return {
        init: function(){
            console.log('Application started x');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
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