// **********************
// This project focus on: 
// 1. Use module pattern
// 2. Implement data encapsulation 
// *******************************



// *****************
// Money Data Module
// *****************
var moneyController = (function(){
    
    
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
        addButton: '.add__btn'
    }


    // Public methods for other Controller
    return {

        getInput: function(){
            // make the three of them as an object
            return {
                type: document.querySelector(DOMstrings.type).value, // - or +
                description: document.querySelector(DOMstrings.description).value,
                moneyAmount: document.querySelector(DOMstrings.moneyAmount).value,
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

    var UIDOM = UIController.getDOMstrings();

    // Use a function for both key events
    var ctrlAddItem = function(){
        // a. get input data
        var inputItem = UIController.getInput(); 
        console.log(inputItem);

        // b. add to the data structure in moneyController

        // c. update UI by adding to UIController

        // d. Calculate money in the moneyController
        
        // e. update globale UI

    };

    // 1. Add event listener for the button
    document.querySelector(UIDOM.addButton).addEventListener('click', ctrlAddItem);

    // 2. Add event listener for Enter key!
    document.addEventListener('keypress', function(event) {
        if ( event.keyCode === 13 || event.which === 13 || event.key === 13) {
            ctrlAddItem();
        }
    });




})(moneyController, UIController);


