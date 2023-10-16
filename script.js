const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const resultText = document.getElementById('resultText');
//
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');
//
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');
//
const allGameIcons = document.querySelectorAll('.far');
//
const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

//State Variable
let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

//Reset All 'selected' Icons
const resetSelected = function () {
  allGameIcons.forEach((icons) => {
    icons.classList.remove('selected');
  });
};
//Randomizing a computer choice
const computerRandomChoice = function () {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = 'paper';
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = 'scissors';
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = 'lizard';
  } else {
    computerChoice = 'spock';
  }
};
//Add selected styling for computerChoice
const displayComputerChoice = function () {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
};

//Check Result, Increase Score, Update resultText
const updateScore = function (playerChoice) {
  console.log(playerChoice, computerChoice);
  //Tie
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's A Tie!";
  }
  //Player Wins
  if (choices[playerChoice].defeats.includes(computerChoice)) {
    resultText.textContent = 'You Win';
    playerScoreNumber++;
    playerScoreEl.textContent = playerScoreNumber;
  }
  //Computer Wins
  if (!choices[playerChoice].defeats.includes(computerChoice)) {
    resultText.textContent = 'You Lost';
    computerScoreNumber++;
    computerScoreEl.textContent = computerScoreNumber;
  }
};

//Call Functions to Process Turn
const checkResult = function (playerChoice) {
  //Clears all Selections
  resetSelected();
  //Makes a Random Computer Choice
  computerRandomChoice();
  //Renders styling
  displayComputerChoice();
  updateScore(playerChoice);
};
//

//
const select = function (playerChoice) {
  checkResult(playerChoice);
  //Add Selected Styling and update playerChoice
  switch (playerChoice) {
    case 'rock':
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Rock';
      break;
    case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- Paper';
      break;
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- Scissors';
      break;
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- Spock';
      break;
    default:
      break;
  }
};

const resetGame = function () {
  resetSelected();
  computerChoice = '';
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  resultText.textContent = 'Start Playing!';
  computerScoreEl.textContent = computerScoreNumber;
  playerScoreEl.textContent = playerScoreNumber;
  computerChoiceEl.textContent = '';
  playerChoiceEl.textContent = '';
};
resetGame();
