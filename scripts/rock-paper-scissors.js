function computerPlay() {
    let myArray = [
        'rock', 
        'paper', 
        'scissors'
    ];  
    let computerSelection = myArray[Math.floor(Math.random() * myArray.length)]; 
    return computerSelection;
};

function playRound(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        roundResult.textContent = 'Computer also chose Rock. It\'s a draw!';
        div.appendChild(roundResult);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        roundResult.textContent = 'Computer chose Paper. You lose this round.';
        div.appendChild(roundResult);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        roundResult.textContent = 'Computer chose Scissors. You win this round!';  
        div.appendChild(roundResult);
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        roundResult.textContent = 'Computer chose Rock. You win this round!';
        div.appendChild(roundResult);
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        roundResult.textContent = 'Computer also chose Paper. It\'s a draw!';
        div.appendChild(roundResult);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        roundResult.textContent = 'Computer chose Scissors. You lose this round.';
        div.appendChild(roundResult);
    }

    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        roundResult.textContent = 'Computer chose Rock. You lose this round.';
        div.appendChild(roundResult);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        roundResult.textContent = 'Computer chose Paper. You win this round!';
        div.appendChild(roundResult);
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        roundResult.textContent = 'Computer also chose Scissors. It\'s a draw!';
        div.appendChild(roundResult);
    };
}

function scoreUpdate() {
    playerScoreLabel.textContent = `Your Score: ${playerScore}`;
    div.insertBefore(playerScoreLabel, roundResult);

    computerScoreLabel.textContent = `Computer's Score: ${computerScore}`;
    div.insertBefore(computerScoreLabel, roundResult);
};

function gameEnd () {
    if (playerScore < 5 && computerScore < 5) {
        return;
    } else if (playerScore === 5) {
        div.removeChild(roundResult);
        gameResult.textContent = 'Congratulations! You won the game!';
        div.appendChild(gameResult);
    } else if (computerScore === 5) {
        div.removeChild(roundResult);
        gameResult.textContent = 'Womp womp, you lost the game.';
        div.appendChild(gameResult);
    }
}

function reset() {
    if (document.contains(document.getElementById('roundResult'))) {
        document.getElementById('roundResult').remove();
    }
    if (document.contains(document.getElementById('gameResult'))) {
        document.getElementById('gameResult').remove();
    }    
    
    playerScore = 0;
    computerScore = 0;

    playerScoreLabel.textContent = `Your Score: ${playerScore}`;
    div.appendChild(playerScoreLabel);

    computerScoreLabel.textContent = `Computer's Score: ${computerScore}`;
    div.appendChild(computerScoreLabel);    
}

const div = document.querySelector('.results');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const btnReset = document.querySelector('#reset');

let playerScore = 0;
let computerScore = 0;

let roundResult = document.createElement('p');
roundResult.setAttribute('id', 'roundResult');

let gameResult = document.createElement('p');
gameResult.setAttribute('id', 'gameResult');

let playerScoreLabel = document.createElement('p');
playerScoreLabel.textContent = `Your Score: ${playerScore}`;
div.appendChild(playerScoreLabel);

let computerScoreLabel = document.createElement('p');
computerScoreLabel.textContent = `Computer's Score: ${computerScore}`;
div.appendChild(computerScoreLabel);

btnRock.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        div.removeChild(gameResult);
    }
    playRound('rock', computerPlay());
    scoreUpdate();
    document.activeElement.blur();
    gameEnd();
});

btnPaper.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        div.removeChild(gameResult);
    }
    playRound('paper', computerPlay());
    scoreUpdate();
    document.activeElement.blur();
    gameEnd();
});

btnScissors.addEventListener('click', () => {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        div.removeChild(gameResult);
    }
    playRound('scissors', computerPlay());
    scoreUpdate();
    document.activeElement.blur();
    gameEnd();
});

btnReset.addEventListener('click', () => {
    reset();
});