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

let p = 0;
let c = 0;
let count = 0;

const res = document.createElement('div');
res.classList.add('display');
const time = document.createElement('div');
time.classList.add('display');
const comp = document.createElement('div');
comp.classList.add('display');
const player = document.createElement('div');
player.classList.add('display')
const point = document.createElement('div');
point.classList.add('display');

container.append(comp, player, point, time, res);

function game(e) {
    container.classList.add("container");
    let computer = getComputerChoice();
    let result = playGround(e.target.id, computer);
    if (result === 'Win!') p++;
    if (result === 'Lose!') c++;
    comp.textContent = `Computer: ${computer}`;
    player.textContent = `Player: ${e.target.id}`
    point.textContent = `Points *** player: ${p} *** computer: ${c} ***`;
    ++count;
    if (count >= 5) {
        if (p > c) res.textContent = 'Player wins!!!!';
        else if (p === c) res.textContent = 'Tie!!';
        else res.textContent = 'Computer wins :(';
        playerChoices.forEach(choice => choice.disabled = true);
    } 
    time.textContent = `Times played: ${count}`;  
}
playerChoices.forEach(choice => choice.addEventListener('click', game));



function reset() {
    p = 0, c = 0, count = 0;
    res.textContent = '', player.textContent = '', point.textContent = '', time.textContent = '', comp.textContent = '';
    playerChoices.forEach(choice => choice.disabled = false);
    container.classList.remove("container");
}
document.querySelector('.reset').addEventListener('click', reset);


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
