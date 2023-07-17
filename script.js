let choices = ['Rock', 'Paper', 'Scissors'];

//gets a random number between 0 and 2 and returns the value at the corresponding index location in the choices array 
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];
}

//input a value between 0 and 2 that maps to and returns the corresponding value in the choices array
function getUserChoice(choice) {
    return choices[choice];
}