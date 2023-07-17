let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];
}
