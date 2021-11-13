//Rock, Paper, Scissors game by Areebah Anzar. the game is played against the computer

//USER INPUT
const getUserChoice = userInput =>
{
  //remove issue of case
  userInput = userInput.toLowerCase();
  //make sure user entered one of the three correct choices: rock, paper, or scissors.
  switch (userInput)
  {
    case 'rock':
      return 'rock';
    case 'paper':
      return 'paper';
    case 'scissors':
      return 'scissors';
    default:
      console.log('Error: incorrect value entered, try again.');
    break;
  }
}


//COMPUTER INPUT
const getComputerChoice = (value) =>
{
  //randomize computer choice by having it pick a random number and having the three values: rock, paper, or scissors assigned to each specific number. 
  const randomNumber = Math.floor(Math.random()*3);
  switch (randomNumber)
  {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return'scissors';
   }
  
}


// RESULTS
const determineWinner = (userChoice,computerChoice) =>
{
  //SCENARIO: TIE
  if (userChoice === computerChoice)
  {
    return 'Its a tie!';
  }
//ALL OTHER SCENARIOS:
  switch(userChoice)
  {
    case 'rock':
      if(computerChoice === 'scissors')
      {return 'You win!';}
      else { return 'You lose!';}
    case 'paper':
      if(computerChoice === 'scissors')
      { return 'You lose!';}
      else { return 'You win!';}
    case 'paper':
      if(computerChoice ==='rock')
      { return 'You win!'}
      else {return 'You lose!';}
    break;
  }
}

//PLAY AND PRINT RESULTS
const playGame = userChoice =>
{
  userChoice = getUserChoice(userChoice);
  computerChoice = getComputerChoice();
  console.log('This is the value you chose: ' + userChoice);
  console.log('This is the value the computer chose: ' + computerChoice);
  console.log('Here are the results: ' + determineWinner(userChoice,computerChoice));
}


  //LETS PLAY

playGame('rock');


playGame('paper'); //I added paper as my choice, but you can change it!!! 
