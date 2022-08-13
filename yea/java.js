const games = () => {
    let playerScore = 0;  
    let computerScore = 0;
    let ties = 0;  
}

const playGame = () => {
    const rockBtn = document.querySelector('.Rock');
    const paperBtn = document.querySelector('.Paper');
    const scissorsBtn = document.querySelector('.Scissors');
    const playerOptions = [rockBtn, paperBtn, scissorsBtn];
    const computerOptions = ['Rock','Paper','Scissors']
}

playerOptions.forEach(option => {
    option.addEventListner='click',function()
    {
        const choiceNumber = math.floor(math.random()*3);
        const compurtChoice = computerOptions[choiceNumber];

        winner(this.innertext,compurtChoice)
    }
})


const winner = (player,computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.playerCount');
    const computerScoreBoard = document.querySelector('.computerCount');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
        result.textContent = 'Tie';
        ties++;
    }
    else if(player == 'Rock'){
        if(computer == 'Paper'){
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Player Won";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'Scissors'){
        if(computer == 'Rock'){
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Player Won";
            playerScore++;
            playerScoreBoard.textContent = playerScore;
        }
    }
    else if(player == 'Paper'){
        if(computer == 'Scissors'){
            result.textContent = "Computer Won";
            computerScore++;
            computerScoreBoard.textContent = computerScore;
        }else{
            result.textContent = "Player Won";
            playerScore++;
            playerScoreBoard.textContent = playerScore;

        }
    }
}

