let choices = ['Rock', 'Paper', 'Scissors'];

//gets a random number between 0 and 2 and returns the value at the corresponding index location in the choices array 
function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];
}
