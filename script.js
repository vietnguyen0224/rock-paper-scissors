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

function game() {
    let i = 0;
    let count = 0;
    while (i < 5) {
        let player = prompt('Please choose your weapon', 'Rock or Paper or Scissors?');
        let computer = getComputerChoice();
        let result = playGround(player, computer);
        console.log(computer);
        console.log(result);
        if (result === 'Win!') count++;
        if (!result) --i;
        i++;
    }
    return count >= 3 ? 'Player wins!!!' : 'Computer wins :('
}

console.log(game());