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

// start from the most important variable
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// select the number we want to change
diceValue = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current-' + activePlayer).textContent = diceValue;
document.querySelector('#current-' + activePlayer).innerHTML = "<Strong>" + diceValue + "</Strong>";

var x = document.querySelector('#score-0').textContent;
console.log(x);

// change css property
document.querySelector('.dice').style.display = 'none';