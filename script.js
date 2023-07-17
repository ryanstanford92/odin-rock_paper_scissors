let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];
}

//input a value between 0 and 2 that maps to and returns the corresponding value in the choices array
function getUserChoice(choice) {
    return choices[choice];
}

