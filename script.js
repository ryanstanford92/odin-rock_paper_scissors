let choices = ['Rock', 'Paper', 'Scissors'];
let userPoints = 0;
let computerPoints = 0;

//gets a random number between 0 and 2 and returns the value at the corresponding index location in the choices array 
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];
}

//input a value between 0 and 2 that maps to and returns the corresponding value in the choices array
function getUserChoice(choice) {
    return choices[choice];
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