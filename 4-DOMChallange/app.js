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
1. A player looses ENTIRE score when they rolls two 6 in a roll
2. Add an input field to the HTML where user can set the winning score
3. Add another dice to the game. The player looses ENTIRE score when one of them is 1 or two 6 in a roll
********************************************************************/

// start from the most important variables
var scores, roundScore, activePlayer, dice, gamePlaying, diceValueArray;

init();


// Roll button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying) {
        const allValues = [5, 2, 6];
        const index = Math.floor(Math.random() * allValues.length);
        const diceValue = allValues[index];
        console.log(diceValue);
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + diceValue + '.png';

        // if player rolled 1, lost all scores
        if(diceValue !== 1) {
            roundScore += diceValue;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            // add into dice value array to check two 6
            diceValueArray.push(diceValue);
            if ( diceValueArray.length !== 1 && diceValue === 6 && diceValueArray[diceValueArray.length-2] === 6 ){
                nextPlayer();
            }
        } else {
            nextPlayer();
        }


    }
});


// Hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // make a global array to store scores for each player
        scores[activePlayer] += roundScore;
        // update UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        
        if(scores[activePlayer] >= 20){
            document.getElementById('name-' + activePlayer).innerHTML = "WON(｡◕‿◕｡) "
            document.querySelector('.dice').style.display = 'none';
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
    diceValueArray = [];
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
    diceValueArray = [];
    document.querySelector('.dice').style.display = 'none';
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
