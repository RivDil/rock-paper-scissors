function getComputerChoice(){
    let options = ['rock','paper','scissors']
    let cpu = options[Math.floor(Math.random()*options.length)]
    return cpu
}


function round(){
    let playerScore = 0;
    let cpuScore = 0;
    let gameWinner = '';
    for (let i=0;i<5;i++){
        let cpuChoice =  getComputerChoice();
        player = prompt('what are u')
        let roundResult = checkWinner(player,cpuChoice);
        if (roundResult === 'cpuWin'){
            cpuScore++;
        }else{
            playerScore++;
        }

        console.log(`Score = Player ${playerScore} vs Cpu ${cpuScore}`)
    }
    
  if (playerScore > cpuScore) {
    gameWinner = 'You win!';
  } else if (cpuScore > playerScore) {
    gameWinner = 'You lose, Computer wins!';
  } else {
    gameWinner = 'Draw';
  }
  console.log(gameWinner);
}
function checkWinner(playerOpt,cpuOpt){
    //rock
    if (playerOpt === 'rock' && cpuOpt === 'paper'){
        console.log(`Cpu wins ${cpuOpt} over ${playerOpt}`)
        return 'cpuWin';
    }else if (playerOpt === 'rock' && cpuOpt === 'scissors'){
        console.log(`Player wins ${cpuOpt} over ${playerOpt}`)
        return 'playerWin';
    }else if (playerOpt === 'rock' && cpuOpt === 'rock'){
        console.log(`Tie ${cpuOpt} and ${playerOpt}`)
        return null;
    }
    // paper
    else if (playerOpt === 'paper' && cpuOpt === 'rock'){
        console.log(`Player wins ${cpuOpt} over ${playerOpt}`)
        return 'playerWin';
    }else if (playerOpt === 'paper' && cpuOpt === 'scissors'){
        console.log(`Cpu wins ${cpuOpt} over ${playerOpt}`)
        return 'cpuWin';
    }else if (playerOpt === 'paper' && cpuOpt === 'paper'){
        console.log(`Tie ${cpuOpt} and ${playerOpt}`)
        return null;
    }
    // Scissors

    else if (playerOpt === 'scissors' && cpuOpt === 'rock'){
        console.log(`Cpu wins ${cpuOpt} over ${playerOpt}`)
        return 'cpuWin';
    }else if (playerOpt === 'scissors' && cpuOpt === 'scissors'){
        console.log(`Tie ${cpuOpt} and ${playerOpt}`)
        return null;
    }else if (playerOpt === 'scissors' && cpuOpt === 'paper'){
        console.log(`Player wins ${cpuOpt} over ${playerOpt}`)
        return 'playerWin';
    }
}
round()