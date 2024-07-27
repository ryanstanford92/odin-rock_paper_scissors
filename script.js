const GAME_CHOICES = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let computerPoints = 0;

//Makes random selection for computer
function getComputerSelection() {
    let randomInt = Math.floor(Math.random() * 3); //gets a random number between 0 and 2

    return GAME_CHOICES[randomInt];
}

//Gets valid input for user selection
function getUserSelection() {
    let selection;

    //loops until user enters valid selection
    do {
        let userChoice = prompt('Enter rock, paper, or scissors');
        selection = GAME_CHOICES[GAME_CHOICES.indexOf(userChoice.toString().toLowerCase())];
    }while(selection == undefined)

    return selection;
}

//game logic: rock > scissors, paper > rock, scissors > paper
//determines winner of round and assigns points
function playRound(userSelection, computerSelection) {
    if(userSelection == computerSelection) {
        console.log('TIE');
        return null;
    }
    else if(userSelection == 'rock' && computerSelection == 'scissors' ||
            userSelection == 'paper' && computerSelection == 'rock' ||
            userSelection == 'scissors' && computerSelection == 'paper') {
        console.log('You won the round');
        return userPoints += 1;
    }
    else {
        console.log('You lost the round');
        return computerPoints += 1;
    }
}

//selects the user with the most points
function getWinner() {
    if(userPoints > computerPoints) {
        console.log(`You win ${userPoints} to ${computerPoints}`);
    }
    else if(userPoints < computerPoints) {
        console.log(`You lose ${computerPoints} to ${userPoints}`);
    }
    else {
        console.log(`TIE ${userPoints} to ${computerPoints}`);
    }
}

//runs 5 rounds and chooses player with most points as the winner
/*
function playGame() {
    for(i = 0; i < 5; i++) {
        playRound(getUserSelection(), getComputerSelection());
    }
    getWinner();
}

playGame();
*/