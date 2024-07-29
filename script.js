const GAME_CHOICES = ['rock', 'paper', 'scissors'];
let userPoints = 0;
let computerPoints = 0;

//Makes random selection for computer
function getComputerSelection() {
    let randomInt = Math.floor(Math.random() * 3); //gets a random number between 0 and 2

    return GAME_CHOICES[randomInt];
}

//Gets valid input for user selection
/*
function getUserSelection() {
    let selection;

    //loops until user enters valid selection
    do {
        let userChoice = prompt('Enter rock, paper, or scissors');
        selection = GAME_CHOICES[GAME_CHOICES.indexOf(userChoice.toString().toLowerCase())];
    }while(selection == undefined)

    return selection;
}
*/


//game logic: rock > scissors, paper > rock, scissors > paper
//determines winner of round and assigns points
function playRound(userSelection, computerSelection) {
    if(userSelection == computerSelection) {
        //console.log('TIE');
        roundResult.textContent = "TIE";
        score.textContent = "User: " + userPoints + " \t " + "Computer: " + computerPoints;
        return null;
    }
    else if(userSelection == 'rock' && computerSelection == 'scissors' ||
            userSelection == 'paper' && computerSelection == 'rock' ||
            userSelection == 'scissors' && computerSelection == 'paper') {
        roundResult.textContent = "You won the round"
        score.textContent = "User: " + (userPoints + 1) + " \t " + "Computer: " + computerPoints;
        return userPoints += 1;
    }
    else {
        roundResult.textContent = "You lost the round";
        score.textContent = "User: " + userPoints + " \t " + "Computer: " + (computerPoints + 1);
        return computerPoints += 1;
    }
}

//selects the user with the most points
function getWinner() {

    if (userPoints == 5 || computerPoints == 5) {
        buttons.forEach(button => {
            button.remove();
        });
        roundResult.remove();
        score.remove();
    }

    if(userPoints == 5) {
        gameResult.textContent = `You win ${userPoints} to ${computerPoints}`;
    }
    
    if(computerPoints == 5) {
        gameResult.textContent = `You lose ${computerPoints} to ${userPoints}`;
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

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let selection = e.target.getAttribute("id");
        playRound(selection, getComputerSelection());
        getWinner();

    });
});

let results = document.querySelector("div");
let score = document.createElement("div");
score.textContent = "User: " + userPoints + " \t " + "Computer: " + computerPoints;
results.appendChild(score);
let roundResult = document.createElement("div");
results.appendChild(roundResult);
let gameResult = document.createElement("div");
results.appendChild(gameResult);
