let results = document.getElementById('results');
let choices = document.getElementById('choices');
let numbers = document.getElementById('numbers');

let buttonList = document.querySelectorAll(".button");
buttonList.forEach(function(i){
  i.addEventListener("click", function(e){
   round(e.target.value);
  })
})

function getComputerChoice(){
    let options = ['rock','paper','scissors']
    let cpu = options[Math.floor(Math.random()*options.length)]
    return cpu
}

let playerScore = 0;
let cpuScore = 0;


function round(playerC){

    let cpuChoice =  getComputerChoice();
    let player = playerC;

    let roundResult = checkWinner(player,cpuChoice);
    if (roundResult === 'cpuWin'){
        cpuScore++;
    }else{
        playerScore++;
    }
    numbers.innerHTML = 'Player ' + playerScore + ' - ' + 'Cpu ' + cpuScore; 
    if (playerScore == 5 || cpuScore == 5){
        buttonList.forEach(i => i.disabled = true)
        if (playerScore > cpuScore) {
        results.innerText = 'Player win!';
      } else if (cpuScore > playerScore) {
        results.innerText = 'You lose, Computer wins!';
      } else {
        results.innerText = 'Draw';
      }
    }
}
function checkWinner(playerOpt,cpuOpt){
    //rock
    if (playerOpt === 'rock' && cpuOpt === 'paper'){
        choices.innerHTML = (`Cpu wins ${cpuOpt} over ${playerOpt}`)
        return 'cpuWin';
    }else if (playerOpt === 'rock' && cpuOpt === 'scissors'){
        choices.innerHTML = (`Player wins ${playerOpt} over ${cpuOpt}`)
        return 'playerWin';
    }else if (playerOpt === 'rock' && cpuOpt === 'rock'){
        choices.innerHTML =(`Tie ${cpuOpt} and ${playerOpt}`)
        return null;
    }
    // paper
    else if (playerOpt === 'paper' && cpuOpt === 'rock'){
        choices.innerHTML =(`Player wins ${playerOpt} over ${cpuOpt}`)
        return 'playerWin';
    }else if (playerOpt === 'paper' && cpuOpt === 'scissors'){
        choices.innerHTML =(`Cpu wins ${cpuOpt} over ${playerOpt}`)
        return 'cpuWin';
    }else if (playerOpt === 'paper' && cpuOpt === 'paper'){
        choices.innerHTML =(`Tie ${cpuOpt} and ${playerOpt}`)
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
        console.log(`Player wins ${playerOpt} over ${cpuOpt}`)
        return 'playerWin';
    }
}
