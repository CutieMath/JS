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

    // Create data structures (invisible!)
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

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
        expContainer: '.expenses__list'
    }


    // Public methods for other Controller
    return {

        getInput: function(){
            // make the three of them as an object
            return {
                type: document.querySelector(DOMstrings.type).value, // 'inc' or 'exp'
                description: document.querySelector(DOMstrings.description).value,
                moneyAmount: document.querySelector(DOMstrings.moneyAmount).value,
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
            newHtml = newHtml.replace('%moneyAmount%', parseInt(object.moneyAmount).toLocaleString());

            // insert HTML into DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
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

        // 2. Add event listener for Enter key! (disabled for now to avoid dups)
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
        console.log(inputItem.moneyAmount);

        // b. add to the data structure in moneyController
        newAddedItem = moneyCtrl.addItem(inputItem.type, inputItem.description, inputItem.moneyAmount);

        // c. update UI by adding to UIController
        UICtrl.addListItem(newAddedItem, inputItem.type);

        // d. Calculate money in the moneyController
        
        // e. update globale UI

    };

    return {
        init: function(){
            setupEventListeners();
        }
    };


})(moneyController, UIController);


// *****************
// Start the app!!
// *****************
controller.init();