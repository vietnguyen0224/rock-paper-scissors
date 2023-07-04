const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function playGround(player, computer) {
    let p = player.toLowerCase();
    switch (p) {
        case 'rock':
            return computer === 'rock' ? 'Tie!' : computer === 'paper' ? 'Lose!' : 'Win!';
        case 'paper':
            return computer === 'paper' ? 'Tie!' : computer === 'scissors' ? 'Lose!' : 'Win!';
        case 'scissors':
            return computer === 'scissors' ? 'Tie!' : computer === 'rock' ? 'Lose!' : 'Win!';
        default:
            alert('Not an option!!!')
    }
}

const playerChoices = document.querySelectorAll('.player')
const container = document.querySelector('#container');

let point = 0;
let count = 0;

const res = document.createElement('div');
const time = document.createElement('div');
const comp = document.createElement('div');
const player = document.createElement('div');
const display = document.createElement('div');

container.append(comp, player, display, time, res);

function game(e) {
    let computer = getComputerChoice();
    let result = playGround(e.target.id, computer);
    if (result === 'Win!') point++;
    comp.textContent = `Computer: ${computer}`;
    player.textContent = `Player: ${e.target.id}`
    display.textContent = `Points: ${point}`;
    ++count;
    time.textContent = `Times played: ${count}`;
    if (count >= 5) {
        if (point >= 3) res.textContent = 'Player wins!!!!';
        else res.textContent = 'Computer wins :(';
        playerChoices.forEach(choice => choice.disabled = true);
    }   
}

window.addEventListener('click', game);


// function game() {
//     let i = 0;
//     let count = 0;
//     while (i < 5) {
//         let player = prompt('Please choose your weapon', 'Rock or Paper or Scissors?');
//         let computer = getComputerChoice();
//         let result = playGround(player, computer);
//         console.log(computer);
//         console.log(result);
//         if (result === 'Win!') count++;
//         if (!result) --i;
//         i++;
//     }
//     return count >= 3 ? 'Player wins!!!' : 'Computer wins :('
// }
