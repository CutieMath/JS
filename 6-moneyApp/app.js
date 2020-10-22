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

})();




// *****************
// Globle Module 
// *****************
var controller = (function(moneyCtrl, UICtrl){


    // 1. Add event listener for the button
    document.querySelector('.add__btn').addEventListener('click', function(){
        // a. get input data
        var type = document.querySelector('.add__type').value;
        var description = document.querySelector('.add__description').value;
        var moneyAmount = document.querySelector('.add__value').value;


        // b. add to the data structure in moneyController

        // c. update UI by adding to UIController

        // d. Calculate money in the moneyController
        
        // e. update globale UI
    });

    // 2. Add event listener for Enter key!
    document.addEventListener('keypress', function(event) {
        if ( event.keyCode === 13 || event.which === 13 || event.key === 13) {
            
        }
    });




})(moneyController, UIController);


