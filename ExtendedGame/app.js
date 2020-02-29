let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.querySelector('#rock');
const paper_div = document.querySelector('#paper');
const scissors_div = document.querySelector('#scissors');
const lizard_div = document.querySelector('#lizard');
const spock_div = document.querySelector('#spock');


// Events

rock_div.addEventListener('click', () => {
    game('rock');
});

paper_div.addEventListener('click', () => {
    game('paper');
});

scissors_div.addEventListener('click', () => {
    game('scissors');
});

lizard_div.addEventListener('click', () => {
    game('lizard');
});

spock_div.addEventListener('click', () => {
    game('spock');
});



// Computer Choice

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

// User Choice (game function)

function game(userChoice) {
    // Resetting icon color
    document.querySelector('#rock-icon').style.color = 'white';
    document.querySelector('#paper-icon').style.color = 'white';
    document.querySelector('#scissors-icon').style.color = 'white';
    document.querySelector('#lizard-icon').style.color = 'white';
    document.querySelector('#spock-icon').style.color = 'white';

    removeClass();
    const computerChoice = getComputerChoice();
    switch (`${userChoice} vs ${computerChoice}`) {
        case 'rock vs scissors':
        case 'rock vs lizard':
        case 'paper vs rock':
        case 'paper vs spock':
        case 'scissors vs paper':
        case 'scissors vs lizard':
        case 'lizard vs paper':
        case 'lizard vs spock':
            win(userChoice, computerChoice);
            break;
        case 'rock vs paper':
        case 'rock vs spock':
        case 'paper vs scissors':
        case 'paper vs lizard':
        case 'scissors vs rock':
        case 'scissors vs spock':
        case 'lizard vs rock':
        case 'lizard vs scissors':
        case 'spock vs paper':
        case 'spock vs lizard':
            lose(userChoice, computerChoice);
            break;
        case 'rock vs rock':
        case 'paper vs paper':
        case 'scissors vs scissors':
        case 'lizard vs lizard':
        case 'spock vs spock':
            draw(userChoice, computerChoice);
            break;
    }
}



// Remove Glow Class 
function removeClass() {
    rock_div.className = 'choice';
    paper_div.className = 'choice';
    scissors_div.className = 'choice';
    lizard_div.className = 'choice';
    spock_div.className = 'choice';
}


// WIN
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} <br> You win!`;
    result_div.style.color = '#4dcc7d'; 
    document.getElementById(userChoice).classList.add('green-glow');
    document.querySelector(`.${userChoice}`).style.color = '#4dcc7d';
};


// LOSE
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} loses ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} <br> You lost`;
    result_div.style.color = '#fc121b';
    document.getElementById(userChoice).classList.add('red-glow');
    document.querySelector(`.${userChoice}`).style.color = '#fc121b';
};


// DRAW
function draw(userChoice, computerChoice) {
    result_div.innerHTML = `${userChoice.charAt(0).toUpperCase() + userChoice.slice(1)} equals ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} <br> It's a draw`;
    result_div.style.color = '#464647'; 
    document.getElementById(userChoice).classList.add('gray-glow');
    document.querySelector(`.${userChoice}`).style.color = '#464647';
};