var startButtonEl = document.getElementById('start-button');
var resetButtonEl = document.getElementById('reset-button');
var playerCardEl = document.getElementById('player-card');
var computerCardEl = document.getElementById('computer-card');
var resultsEl = document.getElementById('results');


var startGame = function() {
    console.log('Good Luck');

    var letsPlay = window.confirm('Would you like to play Rock, Paper, Scissors?');

    if (letsPlay) {
        var choice = window.prompt('Please choose one: (r): rock, (p): paper, (s): scissors');
    }

    if (choice != 'r' && choice != 'p' && choice != 's') {
        window.alert('You must choose either r, p, or s.');
    }

    var dealer = function() {
        var dealerChoices = ['Rock', 'Paper', 'Scissors'];
        var randomNum = function() {
            return Math.floor(Math.random() * 3)
        }
        var dealersHand = dealerChoices[randomNum()];
        computerCardEl.textContent = dealersHand;
    }

    if (choice === 'r') {
        playerCardEl.textContent = "Rock"
        dealer();
        resultsEl.style.display = 'flex';
    }

    if (choice === 'p') {
        playerCardEl.textContent = "Paper"
        dealer();
    }

    if (choice === 's') {
        playerCardEl.textContent = "Scissors"
        dealer();
    }
}

var resetGame = function() {
    playerCardEl.textContent = '';
    computerCardEl.textContent = '';
    resultsEl.style.display = 'none';
}

startButtonEl.addEventListener('click', startGame);
resetButtonEl.addEventListener('click', resetGame);
