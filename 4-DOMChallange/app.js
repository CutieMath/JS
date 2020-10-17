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
- The first player to reach 20 points on GLOBAL score wins the game

ADDED RULES for coding challange:
1. A player looses Round score when they rolls two 6 in a roll
2. Add an input field to the HTML where user can set the winning score. Or the game will use 100 as default
3. Add another dice to the game. 
    - The player looses Round score when roll two 6 on the first dice. Then next player's turn.
    - They player looses Round score when roll a 1. Then next player's turn.
********************************************************************/

// start from the most important variables
var scores, roundScore, activePlayer, dice1, dice2, gamePlaying;

init();
// to check last dice
var lastDice;

// Roll button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        // use array for easier testing purpose
        const allValues = [1, 2, 3, 4, 5, 6];
        const index1 = Math.floor(Math.random() * allValues.length);
        const index2 = Math.floor(Math.random() * allValues.length)
        const dice1Value = allValues[index1];
        const dice2Value = allValues[index2];
        var diceDOM1 = document.querySelector('.dice1');
        var diceDOM2 = document.querySelector('.dice2');
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1Value + '.png';
        diceDOM2.src = 'dice-' + dice2Value + '.png';
        // if player rolled two 6 in a row, lost all scores
        if(dice1Value === 6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = '0';
            nextPlayer();
        }// if player rolled 1, lost all scores and next player
         else if(dice1Value !== 1 && dice2Value !== 1) {
            roundScore += (dice1Value + dice2Value);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            lastDice = dice1Value;
        } else {
            nextPlayer();
        }
    }
});


// Hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // get the user input to determine winning score
        var input = document.getElementById('win_score').value;
        var winningScore;
        // Remember: Undefined, 0, null or "" are coerced to false
        if(input){
            winningScore = input;
        } else {
            winningScore = 100;
        }
        // make a global array to store scores for each player
        scores[activePlayer] += roundScore;
        // update UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        
        if(scores[activePlayer] >= winningScore){
            document.getElementById('name-' + activePlayer).innerHTML = "WON(｡◕‿◕｡) "
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
            // apply css winner class
            document.querySelector('.player-' + activePlayer + '-panel').classList.toggle('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            // Use state variable to disable hold and roll button
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

// New game button
document.querySelector('.btn-new').addEventListener('click', init);


// repeated functions
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    lastDice = -1;
    // update UI
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true; // state variable 
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // update Player text to all players, to replace Winner text
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    // update winner class from all players
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // add active class to one player
    document.querySelector('.player-0-panel').classList.add('active');
}
