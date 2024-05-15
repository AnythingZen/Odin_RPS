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
    let btnContainer = document.querySelector('.button-container');

    btnContainer.addEventListener('click', (event) => {

        let target = event.target;
        
        if (target.tagName === 'BUTTON') {
            const humanSelection = target.classList.value;
            const computerSelection = getComputerChoice(); 

            playRound(humanSelection, computerSelection);
            winnerCondition();
        }
    });
}

let div = document.createElement('div');
document.querySelector('body').appendChild(div);

function playRound (humanChoice, computerChoice) {
    var dict_rps = {'rock' : 2, 'scissors' : 1, 'paper' : 0};

    var human = dict_rps[humanChoice];
    var com = dict_rps[computerChoice];

    if ((human - com) == 1 || (human - com) == -2) {
        
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
        div.textContent = `You win! ${humanChoice} beats ${computerChoice},
                        score of human: ${humanScore} : com: ${computerScore}`;
    }
    else if (com == human) {
        
        console.log(`You tied! ${humanChoice} ties with ${computerChoice}`);
        div.textContent = `You tied! ${humanChoice} ties with ${computerChoice},
                        score of human: ${humanScore} : com: ${computerScore}`;
    }
    else {
        
        console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
        div.textContent = `You lost! ${computerChoice} beats ${humanChoice},
                        score of human: ${humanScore} : com: ${computerScore}`;
    }
}

getHumanChoice();

function winnerCondition () {

    if (humanScore > 4) {
        div.textContent = `You won with a score of ${humanScore} to ${computerScore}`;
        console.log(`You won with a score of ${humanScore} to ${computerScore}`);

        humanScore = 0;
        computerScore = 0;
    }
    else if (computerScore > 4){
        div.textContent = `You lost with a score of ${humanScore} to ${computerScore}`;
        console.log(`You lost with a score of ${humanScore} to ${computerScore}`);

        humanScore = 0;
        computerScore = 0;
    }

    document.querySelector('body').appendChild(div);
}
