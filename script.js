let choices = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let computerPoints = 0;

//gets a random number between 0 and 2 and returns the value at the corresponding index location in the choices array 
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];
}

//Input rock, paper, or scissors (case insensitive) to return the corresponding value from the choices array. Loops until user input is valid.
function getUserChoice() {
    let selection;

    do {
        let userChoice = prompt('Enter rock, paper, or scissors');
        selection = choices[choices.indexOf(userChoice.toString().toLowerCase())];
    }while(selection == undefined)

    return selection;
}

//game logic: rock > scissors, paper > rock, scissors > paper
//choose who wins the round based on input
function chooseRoundWinner(userChoice, computerChoice) {
    if(userChoice == computerChoice) {
        console.log('TIE');
        return null;
    }
    else if(userChoice == 'Rock' && computerChoice == 'Scissors' ||
            userChoice == 'Paper' && computerChoice == 'Rock' ||
            userChoice == 'Scissors' && computerChoice == 'Paper') {
        console.log('You won the round');
        return userPoints += 1;
    }
    else {
        console.log('You lost the round');
        return computerPoints += 1;
    }
}

//selects the user with the most points
function selectWinner() {
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
function game() {
    for(i = 0; i < 5; i++) {
        chooseRoundWinner('Rock', getComputerChoice());
    }
    selectWinner();
}