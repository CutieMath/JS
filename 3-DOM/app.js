/* ****************************
 *  Document Object Model Study
 ******************************/

 // MEANING
 // Each HTML box is an object
 // We can access & manipulate them

/*********
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
********************************************************************/

// start from the most important variables
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// event listener (event reference on MDN)
// anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){
    // 1. Get the random number
    diceValue = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result and set the correct image
    var diceDOM = document.querySelector('.dice');
    // display it
    diceDOM.style.display = 'block';
    // add src for image
    diceDOM.src = 'dice-' + diceValue + '.png';


    // 3. Update the round score IF the diceValue was not 1
    if(diceValue !== 1) {
        // add score
        roundScore += diceValue;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // reset global to 0
        // next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // change active status
        // however this only works for player one
        // we use toggle to solve it
        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    }

});




// This section was added into the button function 
// select the number we want to change
// diceValue = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current-' + activePlayer).textContent = diceValue;
// document.querySelector('#current-' + activePlayer).innerHTML = "<Strong>" + diceValue + "</Strong>";

// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// change css property
// document.querySelector('.dice').style.display = 'none';

// after the event is called, run this function
// function btn(){}

// a function will be called by the Event listener
// document.querySelector('.btn-roll').addEventListener('click', btn);