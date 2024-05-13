var humanScore = 0;
var computerScore = 0;

function getComputerChoice () {

    const choice = Math.random(); // value 0 to .999

    // equal probability in returning either values
    if (choice <= 0.33) {
        console.log('com : rock');
        return('rock');
    }
    else if (choice > 0.66) {
        console.log('com : scissors');
        return('scissors');
    }
    else {
        console.log('com : paper');
        return('paper');
    }
}

function getHumanChoice () {
    let choice = prompt("rock, paper or scissors?").toLowerCase();
    const rps = ['rock', 'paper', 'scissors'];

    while (!rps.includes(choice)) {
        console.log('Choose only rock, paper or scissors');
        choice = prompt("rock, paper or scissors?").toLowerCase();
    }
    console.log('human: ' + choice);
    return choice;
}

function playRound (humanChoice, computerChoice) {
    var dict_rps = {'rock' : 2, 'scissors' : 1, 'paper' : 0};

    var human = dict_rps[humanChoice];
    var com = dict_rps[computerChoice];

    if ((human - com) == 1 || (human - com) == -2) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }
    else if (com == human) {
        console.log(`You tied! ${humanChoice} ties with ${computerChoice}`);
    }
    else {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    }
}

function playGame () {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 

    playRound(humanSelection, computerSelection);
}

for (let i = 0; i < 5; i++) {
    playGame();
}
if (humanScore > computerScore) {
    console.log(`You won with a score of ${humanScore} to ${computerScore}`);
}
else {
    console.log(`You lost with a score of ${humanScore} to ${computerScore}`);
}